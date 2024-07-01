// class human {
//     //Properties
//     age; //public
//     wt; //private
//     ht = 123;

//     constructor(newAge, Height, wt) {
//         this.age = newAge;
//         this.ht = Height;


//     }

//     //behaviour

//     walking() {
//         console.log("I am Walking", this.wt);
//     }
//     running() {
//         console.log("I am Running");
//     }
//     get fetchWeight() {
//         return this.wt;
//     }
//     set modifyWeight(val) {
//         this.wt = val;
//     }

// }
// let obj = new human(21, 170);
// console.log(obj.ht);
// obj.walking();



// function sayName(Myname, Lname) {
//     console.log("My Name Is:", Myname, " ", Lname);
// }

// function sayName(Myname = "Devendra", Lname = Myname.toUpperCase()) {
//     console.log("My Name Is:", Myname, " ", Lname);
// }
//1st Priroty
// sayName();


// function solve(value = 13) {
//     console.log("Hello Ji", value);
// }

// function solve(value = { age: 15, wt: 90, ht: 190 })
// function solve(value = ["Deva", " Bhau", "Shimpi"]) {
//     console.log("Hello Ji", value);
// }

// function solve(value = "Devendra") {
//     console.log("Hello ji -> ", value);
// }
// // solve(null);
// solve(undefined);

function getAge() {
    return 190;
}

function utility(name = "Deva", age = getAge()) {
    console.log(name, " ", age);
}
utility("Devendra");