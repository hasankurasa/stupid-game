let message1 = document.getElementById('message1');
let message2 = document.getElementById('message2');
let gameScreen = document.getElementById('game-screen');
let secondScreen = document.getElementById('second-screen');

function moveMessage() {
    let randomX = Math.random() * 200 - 100; // Moves between -100px to 100px
    let randomY = Math.random() * 200 - 100;
    message1.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function showHeart() {
    // Hide the first screen and show the second screen
    gameScreen.style.display = "none";
    secondScreen.style.display = "flex";
}
