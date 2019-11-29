"use strict";
function greet(person) {
    console.log(person.firstName);
}
function changeName(person) {
    person.firstName = "Laura";
}
var person = {
    firstName: "Maya",
    age: 27,
    hobby: "PaintBall",
    greet: function (lastName) {
        console.log(lastName);
    }
};
greet(person);
changeName(person);
greet(person);
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.greet = function (lastName) {
        console.log(lastName);
    };
    return Human;
}());
var p = new Human();
p.firstName = "Zed";
p.greet("K");
var myDoubleFunc = function (a, b) {
    return a + b;
};
console.log(myDoubleFunc(4, 5));
var oldPerson = {
    age: 31,
    firstName: "Met",
    greet: function (lastName) {
        console.log(lastName);
    }
};
console.log(oldPerson);
//# sourceMappingURL=app.js.map