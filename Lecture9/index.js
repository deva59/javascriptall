// console.log("Devendra");
//
let src = {
    age: 12,
    wt: 33,
    ht: 124
};

let dest = {};
//cloning using iteration
for (let key in src) {
    let newKEY = key;
    let newValue = src[key];
    //insert newKey and value in dest and create a clone
    dest[newKEY] = newValue;
}

src.age = 56;
console.log("src:", src);
console.log("dest", dest);

// let src2 = {
//     value: 101,
//     name: "Devendra"
// }

//assign Method
// let dest = Object.assign({}, src, src2);

// src.age = 42;

// console.log("src:", src);
// console.log("dest", dest);

//Spread Object
// let dest = {...src };

// src.age = 72;
// console.log("src:", src);
// console.log("dest", dest);

// console.log(obj);
// obj.color = "white";
// console.log(obj);