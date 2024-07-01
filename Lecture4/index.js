// let obj = {
//     name: "Devendra",
//     age: 23,
//     weight: 85,
//     height: "6ft 1in",

//     //FUNCTION CREATE>>
//     greet: function() {
//         console.log("Hello ji kaise ho");
//     }
// };
// //For-in loop
// for (let key in obj) {
//     console.log(key, " ", obj[key]);
// }
// console.log(obj)
// obj.greet();

//Creation of arrays>>

//Array Litral Form
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

//Array Constructor Form
// let brr = new Array('love', 1, true);
// brr.push('Babbar');
// brr.pop();
// brr.shift();
// brr.unshift("Deva");
// brr.push(20);
// brr.push(30);
// brr.push(40);
// brr.splice(0, 1, "Shimpi BOy");

// console.log(brr.slice(1, 4));
// console.log(brr);


// let arr = [10, 20, 30, 11, 21, 44, 51];
// let evenArray = arr.filter((number) => {


// return number % 2 === 0;



// if (number % 2 == 0) {
//     return true;
// } else {
//     return false;
// }
//})

// console.log(evenArray);

// let arr = [1, 2, 'love', 'Devendra', null];
// //Using Filter
// let ans = arr.filter((value) => {
//     if (typeof(value) == '') {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(ans);

// arr.map((number, index) => {
//         console.log(number);
//         console.log(index);
//     })
// let ans = arr.map((number) => {

//     return number * number
// })
// console.log(ans);

// arr.map((number) => {
//     console.log(number + 1);
// })

// let arr = [10, 20, 30, 40];

// let ans = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);
// console.log(ans);

// let arr = [1, 4, 3, 6, 8, 2, 9];
// //Acending order
// arr.sort();

// //Decending Order
// arr.sort(function(a, b) {
//     return b - a;
// })
// console.log(arr);


//indexof>>
// console.log(arr.indexOf(8));


// let arr = [10, 20, 30];

// //Using Length
// let length = arr.length;
// console.log("length:", length);

// //Traditional loop
// for (let index = 0; index < length; index++) {
//     console.log(arr[index]);
// }





//Using forEach
// arr.forEach((value, index) => {
//     console.log("Number:", value, "Index", index);
// })


//for-off use>>
// let arr = [10, 20, 30, 40];
// for (let value of arr) {
//     console.log(value);
// }

// let fullnam = "Devendra";
// for (let val of fullnam) {
//     console.log(val);
// }

let arr = [10, 20, 30, 40, 50];

let getSum = (arr) => {
    let sum = 0;
    arr.forEach(value => {
        sum = sum + value;
    });
    // let l = arr.length;
    // let sum = 0;
    // for (let i = 0; i < l; i++) {
    //     sum = sum + arr[i];
    // }
    return sum;
}

let totalsum = getSum(arr);
console.log(totalsum);