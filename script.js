const pixelContainer = document.querySelector(".PixelContainer"),
createBtn = document.querySelector(".CreatePixels"),
winWidth = window.innerWidth,
winHeight = window.innerHeight - 250,
input = document.querySelector(".TotalInput"),
gridSize = document.querySelector(".GridSize");

createBtn.addEventListener("click", () => {
        CreatePixels(parseInt(input.value));
});

CreatePixels(16);

function Reset() {
        while (pixelContainer.firstChild) {
                pixelContainer.removeChild(pixelContainer.lastChild);
        }
}

function CreatePixels(size) {
        let biggerLength = winWidth < winHeight ? winWidth : winHeight,
        roundedSquare = Math.pow(size, 2),
        cubeSize = Math.floor(biggerLength / size);

        Reset();

        pixelContainer.style.maxWidth = biggerLength + "px";
        pixelContainer.style.maxHeight = biggerLength + "px";

        gridSize.textContent =
        `Current grid: ${size} x ${size}`;

        for (let i = 0; i < roundedSquare; i++) {
                let pixel = document.createElement("div");

                pixel.classList.add("Pixel");
                pixel.style.width = cubeSize + "px";
                pixel.style.height = cubeSize + "px";
                pixel.addEventListener("mousedown", Start);
                pixel.addEventListener("click", Paint);
                pixel.addEventListener("mouseup", Stop);
                pixelContainer.appendChild(pixel);
        };

};

function Paint(event) {
        event.target.style.backgroundColor = "#ff0000";
}

function Start() {
        pixelContainer.addEventListener("mousemove", Paint);
}

function Stop() {
        pixelContainer.removeEventListener("mousemove", Paint);

}