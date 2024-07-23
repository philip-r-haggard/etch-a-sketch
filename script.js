const content = document.querySelector('.content');
const container = document.querySelector('.container');

let title = document.createElement('div');
title.classList.add('title');
title.textContent = 'Welcome to Etch-a-Sketch!';
content.appendChild(title);

let k = 1;

for (let i = 0; i < 16; i++) {

    let rowContainer = document.createElement('div');
    rowContainer.classList.add(`row-${k}`);
    container.appendChild(rowContainer);

    k++;

    for (let j = 0; j < 16; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', function () { square.setAttribute('style', 'background-color:blue;'); }, false);
        square.addEventListener('mouseout', function () { square.setAttribute('style', 'background-color:green;'); }, false);
        rowContainer.appendChild(square);
    }
}