const images = [
    "japan.jpg",
    "japan2.jpg",
    "japan3.jpg"
]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);