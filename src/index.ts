console.log("TYPESCRİPT ÇALIŞIYOR");

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const user = "World";
console.log(greet(user));

let id: string | number = 23;
id = "Emre";
