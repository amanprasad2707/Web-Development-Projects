var randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);
var randomImageSource = "images/dice" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}