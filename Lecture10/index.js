// //compile time error

// //Syntax error
// // console.log(1;

// //Runtime error
// //Reference Error
// // console.log(x);

// try {
//     console.log("try block start here");
//     //error -> Reference Error
//     console.log(x);
//     console.log("try block ends here");

//     //a

//     //b

//     //c

// } catch (e) {
//     //define krte h, error ke sath aap kya karna chahte he
//     //mene kaha retry logic
//     //fallback mechanism
//     //custom error
//     //logging
//     console.log("I am inside in cathcn block");
//     console.log("your error is here", e);

// } finally {
//     console.log("I Will run everytime, as i am finally block ");
// }

//let's create a custom error

try {
    //Reference error
    console.log(x);
} catch (err) {
    throw new Error("First Declare after Print Msg")
}