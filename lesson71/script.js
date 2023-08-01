'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
// const width = box.scrollWidth;
// const height = box.scrollHeight;


//const startHeight = box.clientHeight;

// btn.addEventListener('click', () => {
//     if (box.clientHeight == startHeight) {
//         box.style.height = `${box.scrollHeight}px`;
//     } else {
//         box.style.height = `${startHeight}px`;
//     }
// });

box.addEventListener('wheel', () => {
    //box.style.height = `${box.scrollHeight}px`;
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);

document.documentElement.scrollTop = 0;

window.scrollBy(0, 400);
window.scrollTo(0, 400);




