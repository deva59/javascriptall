//  for (let i = 1; i <= 10; i++) {
//      console.log('Devendra');
//  }

// for (let i = 5; i > 0; i--) {
//     console.log(i);
// }

// for (let i = 1; i <= 6; i++) {
//     if (i == 4) {
//         break;
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 4; i++) {
//     if (i == 3)
//         continue;
//     else
//         console.log(i);

// }

// let i = 1;
// while (i <= 10) {
//     console.log("Devendra");
//     i++;
// }

// let firstname = "Devendra"
// let lastname = "Shimpi"


// let name = `Devendra 
// Shimpi `

// console.log(name);

// let name = new String("Devendra Shimpi");
// console.log(name);

// let op1 = "Computer ";
// let op2 = "English ";

// let ans = op1 + op2;
// console.log(ans);

// let op1 = "Computer ";
// let op2 = "English ";

// console.log(op2.length);

// let ans = `${op1}  ${op2}`;
// console.log(ans);

// console.log(op2.toUpperCase());
// console.log(op1.toLocaleLowerCase());

// let str = "Devendra";
// console.log(str.substring(2, 5));
//SPLIT Function >>
// let s = "Devendra Shimpi";
// let w = s.split(' ');
// console.log(w);

let sen = "Devendra \\Ekanth \\Shimpi";
let words = sen.split('\\');
console.log(words);
console.log(words.join(','));