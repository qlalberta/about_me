'use strict';

var userName = prompt('What\'s your name?');
var answer1 = prompt('Welcome to the game, ' + userName + '! Do you want to play an animal game?').toLowerCase();
console.log(answer1);
if (answer1 === 'yes' || answer1 === 'y') {
  alert('Great! Let\'s play the game. Guess my favorite animal!');
}
else {
  alert('OK. Welcome to visit my site. Hope you come back soon.');
  throw new Error('OK. The game is over.');
}

var answer2 = 'no';
while (answer2 != 'yes' && answer2 != 'y') {
  answer2 = prompt('Does it have four legs?').toLowerCase();
  console.log(answer2);
  if (answer2 === 'yes' || answer2 === 'y') {
    alert('Correct! Please answer the next question');
  }
  else {
    alert('Wrong. Try again?');
  }
}

var answer3 = 'no';
while (answer3 != 'yes' && answer3 != 'y') {
  answer3 = prompt('Does it have fur?').toLowerCase();
  console.log(answer3);
  if (answer3 === 'yes' || answer3 === 'y') {
    alert('Correct! Please answer the next question');
  }
  else {
    alert('Wrong. Try again?');
  }
}

var answer4 = 'no';
while (answer4 != 'yes' && answer4 != 'y') {
  answer4 = prompt('Is it domesticated?').toLowerCase();
  console.log(answer4);
  if (answer4 === 'yes' || answer4 === 'y') {
    alert('Correct! Please answer the next question.');
  }
  else {
    alert ('Wrong. Try again?');
  }
}


var answer5 = 'no';
while (answer5 != 'yes' && answer5 != 'y') {
  answer5 = prompt('Does it bark?').toLowerCase();
  console.log(answer5);
  if (answer5 === 'yes' || answer5 === 'y') {
    alert('Aha! You got it. It is a dog!!');
  }
  else {
    alert('Wrong. Try again.');
  }
}
