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
description.textContent = 'Click and hover your mouse over the board to draw with the Etch-a-Sketch! To clear the board just reload the page.';
content.appendChild(description);

let gridSize = 16;
let k = 1;
let isDrawing = false; // Variable to track the mouse click state

// Function to set drawing state
function startDrawing() {
    isDrawing = true;
}

function stopDrawing() {
    isDrawing = false;
}

for (let i = 0; i < gridSize; i++) {

    let rowContainer = document.createElement('div');
    rowContainer.classList.add(`row-${k}`);
    container.appendChild(rowContainer);

    k++;

    for (let j = 0; j < gridSize; j++) {
        let square = document.createElement('div');
        square.classList.add('square');

        // Set up event listeners
        square.addEventListener('mouseover', function () {
            if (isDrawing) {
                square.setAttribute('style', 'background-color:white;');
            }
        });

        // Make sure that initial click also draws
        square.addEventListener('mousedown', function () {
            isDrawing = true;
            square.setAttribute('style', 'background-color:white;');
        });

        rowContainer.appendChild(square);
    }
}

// Set up global event listeners to handle drawing state
document.addEventListener('mousedown', startDrawing);
document.addEventListener('mouseup', stopDrawing);
document.addEventListener('mouseleave', stopDrawing);