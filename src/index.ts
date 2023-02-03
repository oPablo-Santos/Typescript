//string, boolean, number,
let x: number = 10;

x = 33;

console.log(x);

//inferencia x annotation
let y = 12;

//basico
let firstName: string = "Matheus";
let age: number = 30;
const isAdmin: boolean = true;

//string != string
console.log(typeof firstName);

firstName = "João";

//object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers.length);

//tuplas
let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["a", "b"]];

//object literals -> {prop: value}
const user: { name: string; age: number } = {
  name: "Pedro",
  age: 18,
};

console.log(user);

//union type
let id: string | number = "10";

id = 200;

//type alias
type MyIdType = number | string;
const userId: MyIdType = 10;

//enum
//tamanho de roupas (size: x, size: pequeno)
enum Size {
  P = "pequeno",
  M = "medio",
  G = "Grande",
}

const camisa = {
  name: "Camisa gola V",
  size: Size.M,
};

console.log(camisa);

//literal types
let teste: "algumvalor";

//funcoes
function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(3, 12));

function sayHelloTo(name: string): string {
  return `Hello ${name}`;
}

console.log(sayHelloTo("Aldair"));

function greeting(name: string, greet?: string) {
  if (greet) {
    console.log(`Olá ${greet} ${name}`);
  } else {
    console.log(`Olá ${name}`);
  }
}

greeting("Rose");
greeting("Pedro", "Sir");

//interface
interface MathFunctionsParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: MathFunctionsParams) {
  return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2 }));

//narrowing checagem tipos
function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O numero é ${info}`);
    return;
  }
  console.log("nao foi passado numero");
}

//generics qualquer dado
function showArraysItens<T>(arr: T[]) {
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
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
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

//interface em classes
interface IVehicle {
  brand: string;
  showBrand(): void;
}

class Car implements IVehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`a marca do carro é ${this.brand}`);
  }
}
const fusca = new Car("VW", 4);

fusca.showBrand();

//heranca

class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}

const a4 = new SuperCar("Audi", 4, 2.3);
console.log(a4);


