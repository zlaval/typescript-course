interface NamedPerson {
    firstName: string;
    age?: number;

    [propName: string]: any;

    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log(person.firstName)
}

function changeName(person: NamedPerson) {
    person.firstName = "Laura";
}

const person = {
    firstName: "Maya",
    age: 27,
    hobby: "PaintBall",
    greet(lastName: string) {
        console.log(lastName)
    }
};

greet(person);
changeName(person);
greet(person);

class Human implements NamedPerson {
    firstName: string;

    greet(lastName: string): void {
        console.log(lastName)
    }
}

const p = new Human();
p.firstName = "Zed";
p.greet("K");


interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

const myDoubleFunc: DoubleValueFunc = function (a: number, b: number) {
    return a + b;
};

console.log(myDoubleFunc(4, 5));


interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 31,
    firstName: "Met",
    greet(lastName: string) {
        console.log(lastName)
    }
};

console.log(oldPerson);








