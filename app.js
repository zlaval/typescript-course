"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jQuery");
function echo(data) {
    return data;
}
echo("Zed").length;
echo(27);
var list = [1, 2, 3.6];
list.push(34);
function printAll(args) {
    args.forEach(function (e) { return console.log(e); });
}
printAll(list);
var funEcho = echo;
funEcho("test");
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = "5";
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Car = /** @class */ (function () {
    function Car() {
        this.name = "Toyota";
    }
    Car = __decorate([
        printable
    ], Car);
    return Car;
}());
var car = new Car();
car.print();
$("#app").css({ "background-color": "blue" });
//# sourceMappingURL=app.js.map