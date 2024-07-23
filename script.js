const container = document.querySelector('.container');

let k = 1;

for (let i = 0; i < 16; i++) {

    let rowContainer = document.createElement('div');
    rowContainer.classList.add(`row-${k}`);
    container.appendChild(rowContainer);

    k++;

    for (let j = 0; j < 16; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        rowContainer.appendChild(square);
    }
}