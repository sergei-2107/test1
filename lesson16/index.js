// 'use strict';
// console.log(this);

// function f() {
//     console.log(this);
// }
// f();

// const obj = {
//     name: 'John',
//     age: 30,
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}!`);
//     },
// };

// obj.greet();

// const objArrow = {
//     name: 'John',
//     age: 30,
//     greet: () => {
//         return this;
//     },
// };

// objArrow.greet();

// const obj = {
//     name: 'John',
//     age: 30,
//     greet: function(a = 5) {
//         console.log(`Hello, my name is ${this.name}!`);
//         console.log(a);
        
//     },
// };

// const obj2 = {
//     name: 'Jane',
//     age: 25,
// };

// obj.greet.bind(obj2)(343);

// obj.greet.bind({name: 'AAA', age: 30})();
// obj.greet.call({name: 'BBB', age: 30});
// obj.greet.apply({name: 'CCC', age: 30} , [10])