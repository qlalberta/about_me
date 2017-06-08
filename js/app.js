'use strict';
//define variables
var userName = prompt('Hello! What\'s your name?');
var point = 0;
var answer1 = prompt('Welcome to the game, ' + userName + '! Do you want to play a guessing game to get to know me?').toLowerCase();
console.log('Does the user want to play the game?' + answer1);

//check if the user wants to play the game or not
if (answer1 === 'yes' || answer1 === 'y')
{
  alert('Great! Let\'s play the game. You may earn lots of point!');
}
else {
  alert('OK. Welcome to visit my site. Hope you come back soon.');
  throw new Error('The game is over.');
}
//start the game. The first question.
var answer2 = prompt('Is my favorite animal bear?').toLowerCase();
console.log('Is my favorite animal bear?' + answer2);
if (answer2 === 'no' || answer2 === 'n') {
  point++;
  alert('Correct! You point(s) is ' + point + '. Please answer the next question');}
else {
  point--;
  alert('Oops. Wrong. You point(s) is ' + point + '.');
}
//The second question.
var answer3 = prompt('Is my favorite color blue?').toLowerCase();
console.log('Is my favorite color blue' + answer3);
if (answer3 === 'yes' || answer3 === 'y') {
  point++;
  alert('Correct! You point(s) is ' + point + '. Please answer the next question');}
else {
  point--;
  alert('Oops. Wrong. You point(s) is ' + point + '.');
}
//The third quetion.
var answer4 = prompt('Is my favorite food hotpot?').toLowerCase();
console.log('Is my favorite food hotpot?' + answer4);
if (answer4 === 'yes' || answer4 === 'y') {
  point++;
  alert('Correct! You point(s) is ' + point + '. Please answer the next question');}
else {
  point--;
  alert('Oops. Wrong. You point(s) is ' + point + '.');
}
//The forth question.
var answer5 = prompt('Do I like rainy day?').toLowerCase();
console.log('Do I like rainy day?' + answer5);
if (answer5 === 'yes' || answer5 === 'y') {
  point++;
  alert('Correct! You point(s) is ' + point + '. Please answer the next question');}
else {
  point--;
  alert('Oops. Wrong. You point(s) is ' + point + '.');
}
//The fifth question.
var answer6 = prompt('Do I like cheese?').toLowerCase();
console.log('Do I like cheese?' + answer6);
if (answer6 === 'no' || answer6 === 'n') {
  point++;
  alert('Correct! You point(s) is ' + point + '. Thanks for playing the game. I hope you enjoyed it.');}
else {
  point--;
  alert('Oops. Wrong. You point(s) is ' + point + '. Please answer the next question.');
}
  // Thanks for playing the game. Give it another try.');

//The sixth question
var answer7 = prompt('Can you guess my favorite number, between 0 to 10?');
console.log('My favorite number' + answer7);

if (answer7 === 7) {
  alert('Correct. Impressive! You are good at this game.');
}
else {
  for (var i = 0; i < 3; i++) {
    if (answer7 < 7 && answer7 >= 0) {
      answer7 = prompt('Too low. Try again?');
    }
    else if (answer7 > 7 && answer7 <= 10) {
      answer7 = prompt('Too high. Try again?');
    }
    else {
      alert('Correct! You got it!! Continue to the last question.');
      break;
    }
  }
  if (answer7 != 7) {
    alert('You used up all your chances. Sorry. Good luck with the last question.');
  }
}
