// Natürlich! Hier sind 10 Aufgaben, um TypeScript zu lernen, die von grundlegenden bis hin zu fortgeschrittenen Konzepten reichen:



// Hello World:

// Erstellen Sie ein einfaches TypeScript-Programm, das "Hello World" in der Konsole ausgibt.
// Kompilieren Sie das Programm mit dem TypeScript-Compiler (tsc) und führen Sie die generierte JavaScript-Datei aus.


export const hello = () => console.log('Hello World')


// Variablen und Datentypen:

// Schreiben Sie ein Programm, das verschiedene Variablen mit unterschiedlichen Typen (string, number, boolean, array, tuple, enum) deklariert und in der Konsole ausgibt.
// Experimentieren Sie mit Type Inference und expliziten Typannotationen.

export const declareVar = () => {
  const number: number = 1;
  const string: string = "Hello";
  const boolean: boolean = true;
  const stringArr: string[] = ["Hello", "World"];
  const tuple: [string, number] = ["Hello", 1];
  const enum Color {
    Red,
    Green,
    Blue,
  }

  console.log(
    "number: ",
    number,
    "string: ",
    string,
    "boolean: ",
    boolean,
    "stringArr: ",
    stringArr,
    "tuple: ",
    tuple,
    "enum: ",
    Color.Red
  );
};



// Funktionen und Parameter:

// Erstellen Sie eine Funktion, die zwei Zahlen addiert und das Ergebnis zurückgibt.
// Implementieren Sie eine Funktion mit optionalen und Standardparametern.

export const addFN = (a: number = 1, b: number = 2, c?:number, ...numbers:number[]) :void => {

    console.log(a + b - (c || 0) + numbers.reduce((acc, curr) => acc + curr, 0));
}




// Interfaces und Typen:

// Definieren Sie ein Interface für ein Person-Objekt mit Eigenschaften wie name, age, und email.
// Erstellen Sie eine Funktion, die ein Person-Objekt als Parameter akzeptiert und eine Begrüßung in der Konsole ausgibt.
interface Person {
    name: string;
    age: number;
    email?: string;
    }

export const  servus = (person: Person) => {
    console.log(`Servus ${person.name}!`);
}

// Klassen und Vererbung:

// Implementieren Sie eine Klasse Animal mit Eigenschaften wie name und age, sowie einer Methode makeSound().
// Erstellen Sie eine Unterklasse Dog, die die Methode makeSound() überschreibt und "Bark" ausgibt.


export const animals =(name : string, age:number) => {


    class Animal {
        name: string;
        age: number;
    
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    
        makeSound() {
            console.log("Animal sound");
        }
    }
    
    class Dog extends Animal {
        makeSound() {
            console.log("Bark");
        }

        eats(){
            console.log("Dog eats cat");
        }
    }

    const dog = new Dog(name, age);

    dog.makeSound();
    dog.eats();
    console.log(dog)

}



// Generics:

// Schreiben Sie eine generische Funktion identity, die einen Wert zurückgibt, der denselben Typ hat wie der Parameter.
// Erstellen Sie eine generische Klasse Stack, die typische Stack-Operationen wie push und pop unterstützt.
// Module und Namespaces:


export const generics = (a: number | string) => {
function identity<T>(arg: T): T {
    return arg

}

console.log(typeof a === "string" ? identity<string>(a) : identity<number>(a));


class genericBox<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getContents(): T {
        return this.value;
    }


}

let stringBox = new genericBox<string>("Test");
let numberBox = new genericBox<number>(54);

console.log(stringBox.getContents(), numberBox)
}

// Asynchrone Programmierung:

// Schreiben Sie eine Funktion, die Daten von einer API abruft (z.B. mit fetch oder axios).
// Verwenden Sie async und await, um die Daten abzurufen und in der Konsole auszugeben.


import axios from "axios";


export async function fetchData(id: number) {
    try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log (response.data);
    } catch (error) {
        console.error(error);
    }

}


// Type Guards und Union Types:

// Implementieren Sie eine Funktion, die entweder eine Zahl oder einen String akzeptiert und den Typ des Parameters überprüft.
// Verwenden Sie Type Guards (typeof, instanceof), um unterschiedliche Logiken basierend auf dem Typ zu implementieren.

export const typeGuard = (param: number | string) => {

       console.log(typeof param)
    }


// Decorators (fortgeschritten):

// Erstellen Sie einen einfachen Class Decorator, der die Erstellung einer Instanz protokolliert.
// Implementieren Sie einen Method Decorator, der die Ausführungszeit einer Methode misst und protokolliert.


