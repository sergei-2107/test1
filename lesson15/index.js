// const arr = [1,43,45,65,6,76,7,67,6454,23];

// let max = arr [0];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i]> max) {
//         max = arr[i];
//     }
//     if (arr[i]< min) {
//         min = arr[i];
//     }
// }
// console.log(max);
// console.log(min);


// function hello(name) {
//     console.log('Hello', name);
// }

// function input(callback) {
//    const name = prompt('Enter name ');
//    callback (name);
// }

// input(hello);

// function AtoB(nextPoint) {
//     const transport = 'bus';
//     const friend = 'John Doe';
//     console.log(nextPoint(transport, friend));
// }

// function BtoC (transport, friend) {
//     console.log(`Take ${transport} to C with ${friend}`);
// }
   


// AtoB(BtoC);

// function AtoB1(nextPoint) {
//     const transport = 'bus';
//     const friend = 'John Doe';
//     console.log(nextPoint(transport, friend));
// }

// function BtoC1 (transport, friend) {
//     console.log(`Take ${transport} to C with ${friend}`);
// }

// const createPlayer = (initialScore) => {
//     let score = initialScore;
//     return {
//         getScore: function(){
//             return score;
//         },
//         addScore: function (amount) {
//             score += amount;
            
//         },
//     };
// };

// const player1 = createPlayer(100);
// console.log(player1);

// console.log(player1.getScore());
// player1.addScore(50);
// console.log(player1.getScore());


// const arr = [31,54,8,73,4,74,38,54,83,37];

// const resultSome = arr.some(el => el % 3 === 0)
// console.log(resultSome);

// const resultSome2 = arr.some(f);

// function f(element) {
//     return element % 3 === 0
// }

// console.log(resultSome2);


// const resultSome2 = arr.some (f(el));

// for (let i = 0; i < arr.length; i++) {
//    if (f(arr[i]) === true) {
//     break;
//     }
// }

// function f(element) {
//     return element % 3 === 0
// }

// const 

// let res = false;

// function isSomeTrue(callback) {
//    let res = false;
//    for (let i = 0; i < arr.length; i++) {
//     const isTrue = callback(arr[i])
//     if (isTrue) {
//         res = true;
//         break;
//     }
// }
// }

// // // for (let i = 0; i < arr.length; i++) {
// // //     const isTrue = f(arr[i])
// // //     if (isTrue) {
// // //         res = true;
// // //         break;
// // //     }
// // }

// function custo(element) {
//     if (element % 3 === 0) {
//         return true;
//     } else {
//         return false;
//     }
    
// }
// const has
// console.log(res);

const arr = [31,813,8,73,4,74,38,54,83,37];

// const resultFind = arr.find (el => el === 8);
// console.log(resultFind);

// const resultFindIndex = arr.findIndex(el => el === 8);
// console.log(resultFindIndex);

const sum = arr.reduce((acc, el) => acc + el, 0);
console.log(sum);



// const arr = [31,54,8];

// arr.forEach((el, i, arr) => {
//     console.log(el);
//     console.log(i);
//     console.log(arr);
// });
    
    

// const resultEvery = arr.every(el => el > 0);

// console.log(resultEvery);

// const reultFilter = arr.filter(el => el % 3 === 0);
// console.log(reultFilter);

// const resultSort = arr.sort((curr, next) => curr - next);
// console.log(resultSort);

// const resultSort = arr.toSorted ((a,b) => b - a);
// console.log(resultSort);
// console.log(arr);

// const toFlatArr = [[1,3,4],[5,6],7];
// const flatArr= toFlatArr.flat();
// console.log(flatArr);

// arr.forEach(el => {
//     console.log(el * 2);
    
// });
// console.log(arr);

// const resultMap = arr.map(el => el * 2);
// console.log(resultMap);
// const flatMapArr = [[2],[3],[6],[7],[8]];;
// const resultFlatMap = flatMapArr.flatMap(el => el * 8);
// console.log(resultFlatMap);
