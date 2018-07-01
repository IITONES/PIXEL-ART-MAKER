// Select color input


// Select size input
function changeColor() {
    const color = document.getElementById("colorPicker").value;
    this.style.background = color;
	}

// When size is submitted by the user, call makeGrid()
function makeGrid() {
const gridHeight = document.getElementById("inputHeight").value;
const gridWidth = document.getElementById("inputWidth").value;
const pixelCanvas = document.getElementById("pixel_Canvas"); 
pixelCanvas.innerText=""; // empty table   

for (let h=0; h<gridHeight; ++h) {
    const row = pixelCanvas.insertRow(-1); // insert new row
    for (let w=0; w<gridWidth; ++w) {
        const cell = row.insertCell(-1); //insert new cell
        cell.onclick = changeColor;
    }
}
event.preventDefault();


}