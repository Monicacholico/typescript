// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this. name = name;
//     this.age = age;
//   }
// }

interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}

class User implements Greetable, Printable {
  constructor( public name: string, private age: number) {}
  print() {
    console.log(this.name);
  }
}

const user = new User('Max', 30);
console.log(user.name);

class Admin extends User {
  constructor(name:string, age: number, private permissions: string[]) {
    super(name, age);
  }
}





const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button')!;

// if (!buttonElement) {
//   buttonElement
// }

function add(a: number, b: number) {
  return a + b;
}

type PrintMode = 'console' | 'alert';
enum OutPutMode { CONSOLE, ALERT };

function printResult(result: string | number, printMode: OutPutMode) {
  if(printMode === OutPutMode.CONSOLE) {
    console.log(result);
  }else if (printMode === OutPutMode.ALERT){
    alert(result);
  }
}


// const result = add(5, 3);
// let isDone = false;

// printResult(result);

interface CalculationContainer {
  res: number;
  print(): void;
}

type CalculationResults = CalculationContainer[]


// type CalculationResults = { res: number, print: () => void }[]

const results : Array<CalculationContainer> = [];
// const results: CalculationResults  = [];
const names = ['Max'];

buttonElement.addEventListener( 'click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer= {
    res: result,
    print() {
      console.log(this.res);
    }
  }
  results.push(resultContainer);
  // results.push(5);
  // printResult(results);
  // results[0].print();
  printResult(result, OutPutMode.CONSOLE);
  printResult(result, OutPutMode.ALERT);
})


// Generic Types

function logAdEcho<T>(val: T) {
  console.log(val);
  return val;
}

logAdEcho<string>('Hi there!').split(' ');