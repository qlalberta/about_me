'use strict';

var userName = prompt('Hello! What\'s your name?');
var point = 0;
var answer1 = prompt('Welcome to the game, ' + userName + '! Do you want to play a guessing game to get to know me?').toLowerCase();
console.log('Does the user want to play the game?' + answer1);
if (answer1 === 'yes' || answer1 === 'y') {
  alert('Great! Let\'s play the game. You may earn lots of point!');}
else {
  alert('OK. Welcome to visit my site. Hope you come back soon.');
  throw new Error('The game is over.');
}

var answer2 = prompt('Is my favorite animal bear?').toLowerCase();
console.log('Is my favorite animal bear?' + answer2);
if (answer2 === 'no' || answer2 === 'n') {
  point++;
  alert('Correct! You point(s) is ' + point + '. Please answer the next question');}
else {
  point--;
  alert('Oops. Wrong. You point(s) is ' + point + '.');
}

var answer3 = prompt('Is my favorite color blue?').toLowerCase();
console.log('Is my favorite color blue' + answer3);
if (answer3 === 'yes' || answer3 === 'y') {
  point++;
  alert('Correct! You point(s) is ' + point + '. Please answer the next question');}
else {
  point--;
  alert('Oops. Wrong. You point(s) is ' + point + '.');
}

var answer4 = prompt('Is my favorite food hotpot?').toLowerCase();
console.log('Is my favorite food hotpot?' + answer4);
if (answer4 === 'yes' || answer4 === 'y') {
  point++;
  alert('Correct! You point(s) is ' + point + '. Please answer the next question');}
else {
  point--;
  alert('Oops. Wrong. You point(s) is ' + point + '.');
}

var answer5 = prompt('Do I like rainy day?').toLowerCase();
console.log('Do I like rainy day?' + answer5);
if (answer5 === 'yes' || answer5 === 'y') {
  point++;
  alert('Correct! You point(s) is ' + point + '. Please answer the next question');}
else {
  point--;
  alert('Oops. Wrong. You point(s) is ' + point + '.');
}

var answer6 = prompt('Do I like cheese?').toLowerCase();
console.log('Do I like cheese?' + answer6);
if (answer6 === 'no' || answer6 === 'n') {
  point++;
  alert('Correct! You point(s) is ' + point + '. Thanks for playing the game. I hope you enjoyed it.');}
else {
  point--;
  alert('Oops. Wrong. You point(s) is ' + point + '. Thanks for playing the game. Give it another try.');
}
