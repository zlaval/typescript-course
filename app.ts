import "jQuery"


function echo<T>(data: T) {
    return data;
}

echo("Zed").length;
echo<number>(27);

const list: Array<number> = [1, 2, 3.6];
list.push(34);

function printAll<T>(args: T[]) {
    args.forEach((e) => console.log(e))
}

printAll(list);

const funEcho: <T>(data: T) => T = echo;
funEcho("test");

class SimpleMath<T extends number | string, K extends number | string> {

    baseValue: T;
    multiplyValue: K;

    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }

}

const simpleMath = new SimpleMath<number, string>();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = "5";

function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this)
    }
}

@printable
class Car {
    name = "Toyota"
}

const car = new Car();
(<any>car).print();

$("#app").css({"background-color": "blue"});