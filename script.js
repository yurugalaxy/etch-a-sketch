const pixelContainer = document.querySelector(".PixelContainer"),
createBtn = document.querySelector(".CreatePixels");

createBtn.addEventListener("click", () => {
        CreatePixels(16);
})

function CreatePixels(total) {
        let tile = (100 * (1 / total) + 10) + "%";

        for (let i = 0; i < total; i++) {
                let pixel = document.createElement("div");

                pixel.classList.add("Pixel");
                pixel.textContent = i;
                pixel.style.width = tile;
                pixel.style.height = tile;
                pixelContainer.appendChild(pixel);
        };
}