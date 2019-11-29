"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var address = ["Streetname", 10];
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Blue"] = 100] = "Blue";
    Color[Color["Yellow"] = 101] = "Yellow";
})(Color || (Color = {}));
var myName = "Zalan";
function getMyName() {
    return myName;
}
function muliply(a, b) {
    return a * b;
}
var div = function (a, b) {
    return a / b;
};
console.log(typeof div);
var myMultiply;
myMultiply = muliply;
myMultiply(3, 5);
var user = {
    name: "Zed",
    age: 31
};
var complex;
complex = {
    data: [10, 20, 30],
    fun: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [10, 20, 30],
    fun: function (all) {
        return this.data;
    }
};
var strOrNum = 27;
strOrNum = "27";
if (typeof strOrNum == "string") {
    console.log("this is str");
}
function neverReturn() {
    throw new Error("Error");
}
var cantBeNull = 12;
//cantBeNull=null;
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canBeAny = null;
canBeAny = 10;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Zalan",
    bankAccount: bankAccount,
    hobbies: ["Paintball", "Programming"]
};
myself.bankAccount.deposit(1000);
console.log(myself);
var hobbies = ["paintball", "programming"];
var paintball = hobbies[0], hobbie2 = hobbies[1];
var userData = { userName: "Zed", age: 30 };
var userName = userData.userName, age = userData.age;
var str = "Hi my name is " + userName + "\nand this is multiline";
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 10;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var erik = new Person("Toth Erik", "Erik");
erik.setType("Kid");
erik.printAge();
var Alex = /** @class */ (function (_super) {
    __extends(Alex, _super);
    function Alex(userName) {
        var _this = _super.call(this, name, userName) || this;
        _this.name = "Alex";
        _this.age = 3;
        return _this;
    }
    return Alex;
}(Person));
var alex = new Alex("lex");
console.log(alex);
console.log(erik);
var Plant = /** @class */ (function () {
    function Plant() {
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.species = "something";
console.log(plant.species);
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(Helpers.PI);
console.log(Helpers.calcCircumference(8));
var Project = /** @class */ (function () {
    function Project() {
        this.projName = "default";
    }
    return Project;
}());
var ProgProj = /** @class */ (function (_super) {
    __extends(ProgProj, _super);
    function ProgProj() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgProj.prototype.changeName = function (name) {
        this.projName = name;
    };
    return ProgProj;
}(Project));
var ReadOnlyProp = /** @class */ (function () {
    function ReadOnlyProp(name) {
        this.name = name;
    }
    return ReadOnlyProp;
}());
var ro = new ReadOnlyProp("Zalan");
console.log(ro.name);
//# sourceMappingURL=app.js.map