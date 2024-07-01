let mydiv = document.querySelector('#mydiv');

let newElement = document.createElement('span');
newElement.textContent = "Deva Bhai"

mydiv.insertAdjacentElement('afterend', newElement);

let parent = document.querySelector("#mydiv");
let child = document.querySelector("#p1");
parent.removeChild(child)