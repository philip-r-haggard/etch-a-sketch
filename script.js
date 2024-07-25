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

/***** add the change size button *****/
let button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Change the granularity!';
button.addEventListener('click', changeGridSize);
content.appendChild(button);

const DEFAULT_GRID_SIZE = 16;
const DEFAULT_CONTAINER_SIZE = 450;

let gridSize = DEFAULT_GRID_SIZE;
let k;
let isDrawing = false; // Variable to track the mouse click state

setupGrid();

// Function to set drawing state
function startDrawing() {
    isDrawing = true;
}

function stopDrawing() {
    isDrawing = false;
}

function changeGridSize() {
    let size;
    do {
        size = prompt('Please enter the number of squares per row (16 - 100):');
    } while (size < 16 || size > 100);

    gridSize = size;
    removeGrid();
    setupGrid();
}

function setupGrid() {
    k = 1;
    let squareSize = (DEFAULT_CONTAINER_SIZE / gridSize) - 2;

    for (let i = 0; i < gridSize; i++) {

        let rowContainer = document.createElement('div');
        rowContainer.classList.add(`row-${k}`);
        rowContainer.style.display = 'flex';
        rowContainer.style.flex = '1 1 0';
        container.appendChild(rowContainer);
    
        k++;
    
        for (let j = 0; j < gridSize; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
    
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
}

function removeGrid() {
    container.innerHTML = '';
}

// Set up global event listeners to handle drawing state
document.addEventListener('mousedown', startDrawing);
document.addEventListener('mouseup', stopDrawing);
document.addEventListener('mouseleave', stopDrawing);