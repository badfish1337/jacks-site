// Get Random Dice Images
let player1 = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
let player2 = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";

// Change Dice Images
document.querySelectorAll("img")[0].setAttribute("src", player1);
document.querySelectorAll("img")[1].setAttribute("src", player2);

// Change Title
if (player1 > player2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
    document.querySelectorAll(".player-text")[0].innerHTML = "🚩 Player 1 🚩";
} else if (player1 === player2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
    document.querySelectorAll(".player-text")[1].innerHTML = "🚩 Player 2 🚩";
}
