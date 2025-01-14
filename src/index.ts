console.log("TYPESCRİPT ÇALIŞIYOR");

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const user = "World";
console.log(greet(user));

let id: string | number | boolean = 23;
id = "Emre";
id = true;

let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["Ahmet", "Emre", "Berat"];
let mixedArray: (string | number)[] = ["Emre", 16];

mixedArray.push("Emre");

let anyType: any = true;

interface UserParams {
  name: string;
  age: number;
  isEmployed: boolean;
}

type User = {
  name: string;
  age: number;
  isEmployed: boolean;
};

let person: UserParams = {
  name: "Emre",
  age: 16,
  isEmployed: true,
};
