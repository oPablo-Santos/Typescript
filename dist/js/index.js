"use strict";
//string, boolean, number,
let x = 10;
x = 33;
console.log(x);
//inferencia x annotation
let y = 12;
//basico
let firstName = "Matheus";
let age = 30;
const isAdmin = true;
//string != string
console.log(typeof firstName);
firstName = "João";
//object
const myNumbers = [1, 2, 3];
console.log(myNumbers.length);
//tuplas
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
//object literals -> {prop: value}
const user = {
    name: "Pedro",
    age: 18,
};
console.log(user);
//union type
let id = "10";
id = 200;
const userId = 10;
//enum
//tamanho de roupas (size: x, size: pequeno)
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.M,
};
console.log(camisa);
//literal types
let teste;
//funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Aldair"));
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("Rose");
greeting("Pedro", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
//narrowing checagem tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O numero é ${info}`);
        return;
    }
    console.log("nao foi passado numero");
}
//generics qualquer dado
function showArraysItens(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3, 4];
const a2 = ["a", "2", "chelo"];
showArraysItens(a1);
showArraysItens(a2);
//classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`nome do usuario é ${this.name}`);
    }
}
const zeca = new User("Zéca", "Admin", true);
console.log(zeca);
zeca.showUserName();
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`a marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
//heranca
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.3);
console.log(a4);
