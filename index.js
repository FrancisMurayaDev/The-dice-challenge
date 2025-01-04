let randomNumber = Math.random();
randomNumber = (Math.floor(randomNumber * 6)) + 1;
console.log(randomNumber);
if (randomNumber === 1) {
  document.querySelector(".img1").setAttribute('src', './images/dice1.png');
} else if (randomNumber === 2) {
  document.querySelector(".img1").setAttribute('src', './images/dice2.png');
} else if (randomNumber === 3) {
  document.querySelector(".img1").setAttribute('src', './images/dice3.png');
} else if (randomNumber === 4) {
  document.querySelector(".img1").setAttribute('src', './images/dice4.png');
} else if (randomNumber === 5) {

} else if (randomNumber === 6) {
  document.querySelector(".img1").setAttribute('src', './images/dice5.png');
}

let randomNumber2 = Math.random();
randomNumber2 = (Math.floor(randomNumber2 * 6)) + 1;
console.log(randomNumber2);
if (randomNumber2 === 1) {
  document.querySelector(".img2").setAttribute('src', './images/dice1.png');
} else if (randomNumber2 === 2) {
  document.querySelector(".img2").setAttribute('src', './images/dice2.png');
} else if (randomNumber2 === 3) {
  document.querySelector(".img2").setAttribute('src', './images/dice3.png');
} else if (randomNumber2 === 4) {
  document.querySelector(".img2").setAttribute('src', './images/dice4.png');
} else if (randomNumber2 === 5) {

} else if (randomNumber2 === 6) {
  document.querySelector(".img2").setAttribute('src', './images/dice5.png');
}


if (randomNumber > randomNumber2) {
  document.querySelector('h1').textContent = 'Player 1 Wins';
} else if (randomNumber2 > randomNumber) {
  document.querySelector('h1').textContent = 'Player 2 Wins';
} else if (randomNumber === randomNumber2) {
  document.querySelector('h1').textContent = 'A Draw';
}