const container = document.querySelector('#container');
const defaultGridAmount = 16;


function getRandomRGBValue() {
    return Math.floor(Math.random() * 255);
}


function createNewGrids(value) {
    const parent = document.querySelector('#container');
    while(parent.firstChild) {
        parent.firstChild.remove();
    }
    const newGridSize = 960 / value;
    for (let i = 0; i < value; i++) {
        for (let j = 0; j < value; j++) {
            const square = document.createElement("div");
            square.style.height = newGridSize.toString() + "px";
            square.style.width = newGridSize.toString() + "px";
            square.style.margin = "0px";
            square.style.padding = "0px";
            square.style.boxSizing = "border-box";
            square.style.display = "inline-block";

            if (i === value - 1) {
                square.style.borderBottom = "1px solid black";
            }
            if (j === 0) {
                square.style.borderLeft = "1px solid black";
            }

            square.style.borderTop = "1px solid black"
            square.style.borderRight = "1px solid black"

            square.addEventListener("mouseenter", () => {
                let currentOpacity = parseFloat(square.dataset.opacity);

                if (isNaN(currentOpacity)) {
                    currentOpacity = 0.1;
                }

                if (currentOpacity < 1) {
                    currentOpacity += 0.1;
                } else {
                    currentOpacity = 1;
                }

                square.dataset.opacity = currentOpacity.toString();

                const r = getRandomRGBValue();
                const g = getRandomRGBValue();
                const b = getRandomRGBValue();
                square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
            });


            container.appendChild(square);
        }
    }
}

createNewGrids(defaultGridAmount);


const button = document.querySelector("button");
button.addEventListener("click", () => {
    const value = parseInt(prompt("Choose how many grids: "));
    if (!Number.isInteger(value)) {
        alert("Choose a number!")
    }
    if (value > 100) {
        alert("Choose a smaller number!")
    }
    else if (value < 3) {
        alert("Choose a bigger number!")
    }
    else {
        createNewGrids(value)
    }
})
