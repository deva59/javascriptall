// // code1
// const t1 = performance.now()

// for (let i = 1; i <= 100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is Para" + i;
//     document.body.appendChild(para);
// }
// //Timestamp>>
// const t2 = performance.now();

// console.log("total time by code 1:" + (t2 - t1));


// // code2
// const t3 = performance.now();
// let mydiv = document.createElement('div');

// for (let i = 1; i <= 100; i++) {
//     let para = document.createElement('p');
//     para.textContent = 'This is para' + i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);
// const t4 = performance.now();
// console.log("total time by code 1:" + (t4 - t3));


//Best Code

let fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = 'This is para' + i;
    //No Reflow and no repaint for the below line
    fragment.appendChild(para);
}
//The below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);