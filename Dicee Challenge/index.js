var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImg = 'images/dice' + randomNumber1 +".png"
console.log(randomDiceImg)
var imgOne = document.querySelector('img.img1');
imgOne.setAttribute("src",randomDiceImg);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImg = 'images/dice' + randomNumber2 +".png"
console.log(randomDiceImg)
var imgTwo = document.querySelector('img.img2');
imgTwo.setAttribute("src",randomDiceImg);

var title = document.querySelector('h1.title');

console.log(title);
if(randomNumber1>randomNumber2){
    title.textContent="Player 1 wins";
}else if(randomNumber1<randomNumber2){
    title.textContent="Player 2 wins";
}else{
    title.textContent="draw";
}