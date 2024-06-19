const pixelContainer = document.querySelector(".PixelContainer"),
createBtn = document.querySelector(".CreatePixels"),
winWidth = window.innerWidth,
winHeight = window.innerHeight - 100,
input = document.querySelector(".TotalInput");

let pixClick,
inputTotal;

createBtn.addEventListener("click", () => {
        CreatePixels(inputTotal);
});

input.addEventListener("change", () => {
        inputTotal = parseInt(input.value);
})

function Reset() {
        while (pixelContainer.firstChild) {
                pixelContainer.removeChild(pixelContainer.lastChild);
        }
}

function CreatePixels(total) {
        let biggerLength = winWidth < winHeight ? winWidth : winHeight,
        squareRoot = Math.round(Math.sqrt(total)),
        roundedSquare = Math.pow(squareRoot, 2),
        cubeSize = ((biggerLength / squareRoot) - 1).toFixed(0);

        Reset();

        pixelContainer.style.maxWidth = biggerLength + "px";
        pixelContainer.style.maxHeight = biggerLength + "px";

        for (let i = 0; i < roundedSquare; i++) {
                let pixel = document.createElement("div");

                pixel.classList.add("Pixel");
                pixel.style.width = cubeSize + "px";
                pixel.style.height = cubeSize + "px";
                pixelContainer.appendChild(pixel);
        };
        pixClick = document.querySelectorAll(".Pixel");

pixClick.forEach((pixel) => {
        pixel.addEventListener("mousedown", () => {
                pixel.classList.toggle("mFilled");
        });
});
}