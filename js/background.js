const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

const backgroundDiv = document.getElementById("background");

backgroundDiv.style.backgroundImage = `url(img/${chosenImage})`;
backgroundDiv.classList.add('fade-out');
    
setTimeout(() => {
    backgroundDiv.style.backgroundImage = `url(img/${chosenImage})`;
    backgroundDiv.classList.remove('fade-out');
}, 500);