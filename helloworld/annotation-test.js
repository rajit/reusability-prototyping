var mod = function annotated() {
    this.annotations = {};
};

mod.prototype.add = function add(annotation, fn) {
    this.annotations[annotation] = fn;
};

mod.prototype.def = function def(fn) {
    // register annotations based on .toString
    // return func that runs through all annotations
    var funcString = fn.toString();
    var anToApply = [];
    var self = this;
    Object.keys(self.annotations).forEach(function (annotation) {
        var regex = new RegExp('[\'"]' + annotation + '[\'"];');
        if (regex.test(funcString)) {
            anToApply.push(self.annotations[annotation]);
        }
    });
    return function () {
        var toInspect = arguments;
        anToApply.forEach(function (an) {
            an.apply(null, toInspect);
        });

        return fn.apply(null, toInspect);
    };
};

var annie = new mod();
var numRegex = /^[0-9]+$/;
annie.add('assertNumber', function (maybeNum) {
    if (!numRegex.test(maybeNum)) {
        throw new Error(maybeNum + ' must be a number');
    }
});

var myFunc = annie.def(function (num) {
    'assertNumber';

    console.log(num);
});

myFunc(1);
myFunc('2');
myFunc('one');
myFunc('');
myFunc(null);
