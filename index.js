function randomColor() {
    const randomRGB = () => Math.floor(Math.random() * 256);
    const r = randomRGB();
    const g = randomRGB();
    const b = randomRGB();
    return `rgb(${r}, ${g}, ${b})`;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColor();
}

setInterval(changeBackgroundColor, 10000); // Change color every 10 seconds
changeBackgroundColor(); // Initialize with a random color
feather.replace();

const smoke = document.createElement('div');
smoke.classList.add('smoke');
document.body.appendChild(smoke);
