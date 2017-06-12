'use strict';
// //define variables
var userName = prompt('Hello! What\'s your name?');
var point = 0;
var count1 = 0;
console.log('userName: ' + userName);

// when the input is an empty string
userValidation();
function userValidation() {
  while(!userName) {
    userName = prompt('Hey. What\'s your name? We need a name.');
  }
  console.log('userName: ' + userName);
}
//check if the user wants to play the game or not
gameCheck();
function gameCheck() {
  var answer0 = prompt('Welcome to the game, ' + userName + '!  Do you want to play a guessing game to get to know me, yes or no?').toLowerCase();
  console.log('the user wants to play the game: ' + answer0);
  if (answer0 === 'yes' || answer0 === 'y') {
    alert('Great! Let\'s play the game. You may earn lots of points!');
  } else {
    alert('OK. Welcome to visit my site. Hope you come back soon.');
    throw new Error('The game is over.');
  }
}
//start the game. The first question.
firstQuestion();
function firstQuestion() {
  var answer1 = prompt('Is my favorite animal bear?').toLowerCase();
  console.log('Is my favorite animal bear? ' + answer1);
  if (answer1 === 'no' || answer1 === 'n') {
    point++;
    count1++;
    console.log('point: ' + point + ';count1: ' + count1 );
    alert('Correct! You point(s) is ' + point + '. Please answer the next question');
  } else {
    point--;
    console.log('point: ' + point + ';count1: ' + count1 );
    alert('Oops. Wrong. You point(s) is ' + point + '. Please answer the next question');
  }
}

//The second question.
secondQuestion();
function secondQuestion() {
  var answer2 = prompt('Is my favorite color blue?').toLowerCase();
  console.log('Is my favorite color blue? ' + answer2);
  if (answer2 === 'yes' || answer2 === 'y') {
    point++;
    count1++;
    console.log('point: ' + point + ';count1: ' + count1);
    alert('Correct! You point(s) is ' + point + '. Please answer the next question.');
  } else {
    point--;
    console.log('point: ' + point + ';count1: ' + count1);
    alert('Oops. Wrong. You point(s) is ' + point + '.');
  }
}
//The third quetion.
thirdQuestion();
function thirdQuestion() {
  var answer3 = prompt('Is my favorite food hotpot?').toLowerCase();
  console.log('Is my favorite food hotpot? ' + answer3);
  if (answer3 === 'yes' || answer3 === 'y') {
    point++;
    count1++;
    console.log('point: ' + point + ';count1: ' + count1);
    alert('Correct! You point(s) is ' + point + '. Please answer the next question.');
  } else {
    point--;
    console.log('point: ' + point + ';count1: ' + count1);
    alert('Oops. Wrong. You point(s) is ' + point + '.');
  }
}

//The forth question.
forthQuestion();
function forthQuestion() {
  var answer4 = prompt('Do I like rainy day?').toLowerCase();
  console.log('Do I like rainy day? ' + answer4);
  if (answer4 === 'yes' || answer4 === 'y') {
    point++;
    count1++;
    console.log('point: ' + point + ';count1: ' + count1);
    alert('Correct! You point(s) is ' + point + '. Please answer the next question');
  } else {
    point--;
    console.log('point: ' + point + ';count1: ' + count1);
    alert('Oops. Wrong. You point(s) is ' + point + '.');
  }
}
//The fifth question.
fifthQuestion();
function fifthQuestion() {
  var answer5 = prompt('Do I like cheese?').toLowerCase();
  console.log('Do I like cheese? ' + answer5);
  if (answer5 === 'no' || answer5 === 'n') {
    point++;
    count1++;
    console.log('point: ' + point + ';count1: ' + count1);
    alert('Correct! You point(s) is ' + point + '.');
  } else {
    point--;
    console.log('point: ' + point + '. count1: ' + count1);
    alert('Oops. Wrong. You point(s) is ' + point + '. Please answer the next question.');
  }
}
//The sixth question
// sixthQuestion();
// function sixthQuestion() {
var answer6 = prompt('Can you guess my favorite number, between 0 to 10? You have 4 chances in total. Good luck!');
var remainingAttempts = 4;
var i = 0;
// var numberCheck = false;
while (isNaN(answer6)) {
  answer6 = prompt('Please give me a number between 0 to 10.');
  console.log('My favorite number: ' + answer6);
}
sixthQuestion();
function sixthQuestion() {
  if (answer6 == 7) {
    point++;
    count1++;
    remainingAttempts--;
    console.log('point: ' + point + ';count1: ' + count1 + ';remainingAttempts: ' + remainingAttempts);
    alert('Correct. Impressive! You are good at this game. You point(s) is ' + point + '.');
  } else {
    for (i = 0; i < 4; i++) {
      if (answer6 < 7 && answer6 >= 0) {
        point--;
        remainingAttempts--;
        alert('Too low. Try again?' + 'You have ' + remainingAttempts + ' attemps left.');
        console.log('answer6: ' + answer6 + ';point: ' + point + ';remainingAttempts: ' + remainingAttempts);
        console.log(i);
      } else if (answer6 > 7 && answer6 <= 10) {
        point--;
        remainingAttempts--;
        alert('Too high. Try again?' + 'You have ' + remainingAttempts + ' attemps left.');
        console.log('answer6: ' + answer6 + ';point: ' + point + ';remainingAttempts: ' + remainingAttempts);
        console.log(i);
      } else {
        point++;
        count1++;
        console.log('answer6: ' + answer6 + ';point: ' + point + 'count1: ' + count1 + ';remainingAttempts: ' + remainingAttempts);
        console.log(i);
        alert('Correct! You got it!! You point(s) is ' + point + '. Continue to the last question.');
        break;
      }
      if(i != 3) {
        answer6 = prompt('Guess again.');
      }
    }
  }
}
if (i == 3 && answer7 != 7) {
  point--;
  remainingAttempts--;
  console.log('answer6: ' + answer6 + ';point: ' + point + ';remainingAttempts: ' + remainingAttempts);
  console.log(i);
  alert('You used up all your chances. Sorry. Good luck with the last question. You point(s) is ' + point + '. Continue to the last question.');
}
if (i == 3 && answer7 == 7) {
  point++;
  remainingAttempts--;
  console.log('answer6: ' + answer6 + ';point: ' + point + ';remainingAttempts: ' + remainingAttempts);
  console.log(i);
  alert('Correct! You got it!! You point(s) is ' + point + '. Continue to the last question.');
}
// The seventh question
// seventhQuestion();
// function seventhQuestion() {
remainingAttempts = 6;
var state = ['NY', 'MA', 'LA', 'NV', 'TX', 'CA', 'AZ', 'CT', 'FL'];
var answer7 = prompt('Can you guess a state that I visited before, abbrevation names only?').toUpperCase();
var found = false;
var j = 0;
var k = 0;
var m = 0;

console.log('State I visited: ' + answer7);
for (j = 0; j < state.length; j++) {
  if (answer7 == state[j]) {
    point++;
    count1++;
    remainingAttempts--;
    console.log('answer7: ' + answer7 + ';point: ' + point + 'count1: ' + count1 + ';remainingAttempts: ' + remainingAttempts);
    alert('Correct! You point(s) is ' + point + '.Here are all the states I\'ve visted: ' + state.join() + '. Thanks for playing the game, ' + userName + '! You got ' + count1 + 'out of 7 questions correct! I hope you enjoyed it.');
    found = true;
  }
}
seventhQuestion();
function seventhQuestion() {

  if (!found) {
    for (k = 0; k < 5; k++) {
      answer7 = prompt('Wrong. Keep guessing. Which state? You have ' + remainingAttempts + ' remaining attempts').toUpperCase();
      remainingAttempts--;
      console.log('answer7' + answer7 + ';remainingAttempts:' + remainingAttempts);
      for (m = 0; m < state.length; m++) {
        if (answer7 == state[m]) {
          count1++;
          point++;
          console.log('answer6: ' + answer6 + ';point: ' + point + ';count1: ' + count1 + ';remainingAttempts: ' + remainingAttempts);
          alert('Great! You got it!! You point(s) is ' + point + '. Here are all the states I\'ve visted: ' + state.join() + '. Thanks for playing the game, ' + userName + '! You got ' + count1 + ' out of 7 questions correct! I hope you enjoyed it.');
          found = true;
        }
      }
      if (found) {
        break;
      }
    }
  }
}
