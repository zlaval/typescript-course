let address: [string, number] = ["Streetname", 10];

enum Color {
    Gray,
    Blue = 100,
    Yellow
}

let myName = "Zalan";

function getMyName(): string {
    return myName;
}

function muliply(a: number, b: number): number {
    return a * b;
}

let div: (a: number, b: number) => number = (a, b) => {
    return a / b
};

console.log(typeof div);

let myMultiply: (x: number, y: number) => number;
myMultiply = muliply;
myMultiply(3, 5);

let user = {
    name: "Zed",
    age: 31
};

let complex: { data: number[], fun: (all: boolean) => number[] };
complex = {
    data: [10, 20, 30],
    fun: function (all: boolean): number[] {
        return this.data;
    }
};

type Complex = { data: number[], fun: (all: boolean) => number[] }
let complex2: Complex = {
    data: [10, 20, 30],
    fun: function (all: boolean): number[] {
        return this.data;
    }
};

let strOrNum: number | string = 27;
strOrNum = "27";

if (typeof strOrNum == "string") {
    console.log("this is str")
}

function neverReturn(): never {
    throw new Error("Error");
}

let cantBeNull = 12;
//cantBeNull=null;
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canBeAny: any = null;
canBeAny = 10;


type BankAccount = { money: number, deposit: (value: number) => void }
let bankAccount: BankAccount = {
    money: 2000,
    deposit: function (value: number) {
        this.money += value;
    }
};

type Customer = { name: string, bankAccount: BankAccount, hobbies: string[] }

let myself: Customer = {
    name: "Zalan",
    bankAccount: bankAccount,
    hobbies: ["Paintball", "Programming"]
};

myself.bankAccount.deposit(1000);
console.log(myself);

const hobbies = ["paintball", "programming"];
const [paintball, hobbie2] = hobbies;

const userData = {userName: "Zed", age: 30};
const {userName, age} = userData;

const str = `Hi my name is ${userName}
and this is multiline`;

class Person {
    name: string;
    private type: string;
    protected age: number = 10;


    constructor(name: string, public username: string) {
        this.name = name;

    }

    printAge() {
        console.log(this.age);
    }

    setType(type: string) {
        this.type = type;
    }

    private setAge(age: number) {
        this.age = age;
    }
}

const erik = new Person("Toth Erik", "Erik");
erik.setType("Kid");
erik.printAge();

class Alex extends Person {
    name = "Alex";

    constructor(userName: string) {
        super(name, userName);
        this.age = 3;
    }
}

const alex = new Alex("lex");
console.log(alex);
console.log(erik);

class Plant {
    private _species: string;

    get species(): string {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        }
    }
}

const plant = new Plant();
plant.species = "something";
console.log(plant.species);

class Helpers {
    static PI: number = 3.14;

    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }

}

console.log(Helpers.PI);
console.log(Helpers.calcCircumference(8));

abstract class Project {
    projName: string = "default";

    abstract changeName(name: string): void;

}

class ProgProj extends Project {
    changeName(name: string): void {
        this.projName = name;
    }
}

class ReadOnlyProp {

    constructor(public readonly name: string) {
    }
}

const ro = new ReadOnlyProp("Zalan");
console.log(ro.name);





