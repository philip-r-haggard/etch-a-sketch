const content = document.querySelector('.content');
const container = document.querySelector('.container');

/***** add the title *****/
let title = document.createElement('div');
title.classList.add('title');
title.textContent = 'Welcome to Etch-a-Sketch!';
content.appendChild(title);

/***** add the description *****/
let description = document.createElement('div');
description.classList.add('description');
description.textContent = 'Just hover your mouse over the board to draw with the Etch-a-Sketch! To clear the board just reload the page.';
content.appendChild(description);

let gridSize = 16;
let k = 1;

for (let i = 0; i < gridSize; i++) {

    let rowContainer = document.createElement('div');
    rowContainer.classList.add(`row-${k}`);
    container.appendChild(rowContainer);

    k++;

    for (let j = 0; j < gridSize; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', function () { square.setAttribute('style', 'background-color:blue;'); });
        square.addEventListener('mouseout', function () { square.setAttribute('style', 'background-color:green;'); });
        rowContainer.appendChild(square);
    }
}