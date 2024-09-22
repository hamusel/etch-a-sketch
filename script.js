const container = document.querySelector('#container');
const colors = ["blue", "green", "purple", "pink", "yellow", "black"];
const defaultGridAmount = 16;

function getRandomColor() {
    const colorNumber = Math.floor(Math.random() * colors.length);
    return colors[colorNumber];
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
                square.style.backgroundColor = "black";
            })

            container.appendChild(square);
        }
    }
}


for (let i = 0; i < defaultGridAmount; i++) {
    for (let j = 0; j < defaultGridAmount; j++) {
        const square = document.createElement("div");
        square.style.height = "58px" // 960 : defaultGridAmount - 2
        square.style.width = "58px"
        square.style.margin = "0px";
        square.style.padding = "0px";
        square.style.boxSizing = "border-box";
        square.style.display = "inline-block";

        if (i === 15) {
            square.style.borderBottom = "1px solid black";
        }
        if (j === 0) {
            square.style.borderLeft = "1px solid black";
        }

        square.style.borderTop = "1px solid black"
        square.style.borderRight = "1px solid black"

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        })

        container.appendChild(square);
    }
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    const value = parseInt(prompt("Choose how many grids: "));
    if (value > 100) {
        alert("This is too big!")
    } else {
        createNewGrids(value)
    }
})
