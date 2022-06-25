
// Buttons
const clearBtn = document.getElementById("clear");
const rainbowBtn = document.getElementById("rainbow");
const eraserBtn = document.getElementById("eraser");
const downloadBtn = document.getElementById("download");

// Grid Container
const sketchContainer = document.getElementById("sketch");

// Color Input
let colorInput = document.getElementById("color");
let colorInputValue = colorInput.value;

// Size Input
let sizeInput = document.getElementById("size");
let sizeInputValue = sizeInput.value;
let sizeDisplay = document.getElementById("sizeDisplay");

sizeDisplay.innerText = `${sizeInputValue}x${sizeInputValue}`;

sizeInput.addEventListener("input", (e) => {
	sizeInputValue = e.target.value;
	sketchContainer.innerHTML = "";
	createGrid(sizeInputValue, sketchContainer);
	// console.log(e.target.value)
	sizeDisplay.innerText = `${sizeInputValue}x${sizeInputValue}`;
});

const createGrid = (size, container) => {
	container.style.display = "grid";
	container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	for (let i = 0; i < size * size; i++) {
		let div = document.createElement("div");
		div.style.background = "yellow";
		div.addEventListener("mousedown", () => {
			div.style.background = "black";
		});
		div.style.border = "1px solid black";
		container.appendChild(div);
	}
};
createGrid(sizeInputValue, sketchContainer);

// Eraser Button

// Clear Btn
const clearGrid = () => {
    sketchContainer.innerHTML = ''
    sketchContainer.style.display = ''
    createGrid(sizeInputValue, sketchContainer)
};
clearBtn.addEventListener('click', clearGrid)

// Download Btn
let takeScrn = () => {
	html2canvas(
		document.querySelector('#sketch')).then((canvas) => {
            canvas.style.display = "none";
            document.body.appendChild(canvas);
            const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            const a = document.createElement("a");
            a.setAttribute("download", `yourImage.png`);
            a.setAttribute("href", image);
            a.click();
		})
};

downloadBtn.addEventListener("click", takeScrn);
