// //FUNCTION IS DEFINED
// function Bhai() {
//     console.log("Deva Bhai");
// }

// //FUNCTION IS CALLING
// Bhai();

// function printcounting() {
//     for (let i = 1; i <= 100; i++) {
//         console.log(i);
//     }
// }
// printcounting();

// function printNumeber(num) {
//     console.log("Print Number:", num); {

//     }
// }
// printNumeber(2);

// function getAverage(num1, num2) {
//     let avg = (num1 + num2) / 2;
//     console.log("Average:", avg);
// }
// getAverage(3, 7);


//RETURN FUNCTION

// function getSum(a, b, c) {
//     let sum = a + b + c;
//     return sum;
// }

// let ans = getSum(1, 2, 3);
// console.log("Printing sum:", ans);

// function getName(num1, num2) {
//     let name1 = num1 + " " + num2;


//     //Its unreachable>>
//     return name1;
//     //Its unreachable>>
//     // let a = 10;
//     // let b = 15;
//     // let sum = a + b;
//     // console.log(sum);
// }
// let name1 = getName(7, 7);
// console.log("Your Name is:", name1);

// let squareNumber = function(num) {
//     let ans = num ** 2;
//     return ans;
// }
// let ans = squareNumber(5);
// console.log(ans);


// let getExp = function(x, y) {
//     let ans = x ** y;
//     return ans;

// }

// console.log(getExp(2, 10));

let getExp = (x, y) => {
    let ans = x ** y;
    return ans;

}

console.log(getExp(2, 10));