// const obj = {};
// console.log(obj);




// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name}!`);
//         console.log(`I am ${this.age} years old.`);
//     }

//     static getClassName () { 
//         return "Person";
// }
// }

// const alice = new Person('alice');
// const age = alice.age
// alice.age = 20;
// alice.greet();
// console.log(Person.getClassName());


// const bob = new Person('Bob');
// const age1 = bob.age
// bob.age = 33;
// bob.greet();



// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`My name is ${this.name}!`);
//     }    
// }

// class Dog extends Animal {
//     constructor(name, type) {
//         super(name);
//         this.type = type;
//     }
//     bark() {
//         console.log(`${this.name} barks! I am a ${this.type}.`);
//     }
// }

// const rex = new Dog('ReX', 'taksa');
// rex.greet();
// rex.bark();