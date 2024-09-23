document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const defaultGridAmount = 16;
    const button = document.getElementById('new-grid-btn');

    const getRandomRGBValue = () => Math.floor(Math.random() * 256);

    const createNewGrids = (gridSize) => {
        container.innerHTML = '';

        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

        for (let i = 0; i < gridSize * gridSize; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.opacity = '0';

            square.addEventListener('mouseenter', () => updateSquareColor(square));

            container.appendChild(square);
        }
    };

    const updateSquareColor = (square) => {
        let currentOpacity = parseFloat(square.dataset.opacity);
        currentOpacity = Math.min(currentOpacity + 0.1, 1);

        const r = getRandomRGBValue();
        const g = getRandomRGBValue();
        const b = getRandomRGBValue();

        square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
        square.dataset.opacity = currentOpacity.toString();
    };

    button.addEventListener('click', () => {
        let value = parseInt(prompt('Choose how many grids (between 3 and 100):'));

        if (isNaN(value) || value < 3 || value > 100) {
            alert('Please enter a valid number between 3 and 100.');
        } else {
            createNewGrids(value);
        }
    });

    createNewGrids(defaultGridAmount);
});
