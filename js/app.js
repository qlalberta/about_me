'use strict';
// //define variables
var userName = prompt('Hello! What\'s your name?');
var point = 0;
var count1 = 0;
//console.log('count' + count1);
//check if the user wants to play the game or not
//TODO: include the senerio when user's input is empty string. Probably for every question.
var answer0 = prompt('Welcome to the game, ' + userName + '! Do you want to play a guessing game to get to know me, yes or no?').toLowerCase();
console.log('Check if the user wants to play the game' + answer0);
if (answer0 == 'yes' || answer0 == 'y') {
    alert('Great! Let\'s play the game. You may earn lots of point!');
  } else {
    alert('OK. Welcome to visit my site. Hope you come back soon.');
    throw new Error('The game is over.');
  }
//start the game. The first question.
var answer1 = prompt('Is my favorite animal bear?').toLowerCase();
console.log('Is my favorite animal bear?' + answer1);
  if (answer1 == 'no' || answer1 == 'n') {
    point++;
    count1++;
    console.log('point: '+ point +'. count1: ' +count1 );
    alert('Correct! You point(s) is ' + point + '. Please answer the next question');
  } else {
    point--;
    alert('Oops. Wrong. You point(s) is ' + point + '.');
  }
//The second question.
var answer2 = prompt('Is my favorite color blue?').toLowerCase();
console.log('Is my favorite color blue' + answer2);
  if (answer2 == 'yes' || answer2 == 'y') {
    point++;
    count1++;
    console.log('point: '+ point +'. count1: ' +count1 );
    alert('Correct! You point(s) is ' + point + '. Please answer the next question');
  } else {
    point--;
    console.log('point: '+ point +'. count1: ' +count1 );
    alert('Oops. Wrong. You point(s) is ' + point + '.');
  }
//The third quetion.
var answer3 = prompt('Is my favorite food hotpot?').toLowerCase();
console.log('Is my favorite food hotpot?' + answer3);
  if (answer4 == 'yes' || answer4 == 'y') {
    point++;
    count1++;
    console.log('point: '+ point +'. count1: ' +count1 );
    alert('Correct! You point(s) is ' + point + '. Please answer the next question');
  } else {
    point--;
    console.log('point: '+ point +'. count1: ' +count1 );
    alert('Oops. Wrong. You point(s) is ' + point + '.');
  }
//The forth question.
var answer4 = prompt('Do I like rainy day?').toLowerCase();
console.log('Do I like rainy day?' + answer4);
  if (answer5 == 'yes' || answer5 == 'y') {
    point++;
    count1++;
    console.log('point: '+ point +'. count1: ' +count1 );
    alert('Correct! You point(s) is ' + point + '. Please answer the next question');
  } else {
    point--;
    console.log('point: '+ point +'. count1: ' +count1 );
    alert('Oops. Wrong. You point(s) is ' + point + '.');
  }
//The fifth question.
var answer5 = prompt('Do I like cheese?').toLowerCase();
console.log('Do I like cheese? ' + answer5);
  if (answer5 == 'no' || answer5 === 'n') {
    point++;
    count1++;
    console.log('point: '+ point +'. count1: ' +count1 );
    alert('Correct! You point(s) is ' + point + '.');
  } else {
    point--;
    console.log('point: '+ point +'. count1: ' +count1 );
    alert('Oops. Wrong. You point(s) is ' + point + '. Please answer the next question.');
  }
//The sixth question
// can remind the user the remaining and send to console
var answer7 = prompt('Can you guess my favorite number, between 0 to 10? You have 4 chances. Good luck!');
console.log('My favorite number ' + answer7);
if (answer7 == 7) {
  point++;
  count1++;
  console.log('point: '+ point + '. count1: ' +count1 );
  alert('Correct. Impressive! You are good at this game. You point(s) is ' + point + '.');
  console.log('point after each run: ' + point); }
else {
  for (var i = 0; i < 3; i++) {
    if (answer7 < 7 && answer7 >= 0) {
      answer7 = prompt('Too low. Try again?');
      console.log('answer7: ' + answer7);
      point--;
      console.log('point: ' + point);
    } else if (answer7 > 7 && answer7 <= 10) {
      answer7 = prompt('Too high. Try again?');
      point--;
      console.log('point: ' + point);
    }
    else if (i = 3 && answer7 != 7) {
      alert('You used up all your chances. Sorry. Good luck with the last question. You point(s) is ' + point + '. Continue to the last question.'); }
    else {
      point++;
      count1++;
      console.log('answer7: ' + answer7);
      console.log('point: ' + point);
      console.log('count1: ' + count1);
      alert('Correct! You got it!! You point(s) is ' + point + '. Continue to the last question.');
      break;
    }
  }
}
if (i === 3 && answer7 != 7) {
  alert('You used up all your chances. Sorry. Good luck with the last question. You point(s) is ' + point + '. Continue to the last question.');
}
//The seventh question
var state = ['NY', 'MA', 'LA', 'NV', 'TX', 'CA', 'AZ', 'CT', 'FL'];
var answer8 = prompt('Can you guess a state that I visited before, abbrevation names only?').toUpperCase();
var found = false;
console.log('State I visited ' + answer8);
for (var j = 0; j < state.length; j++) {
  if (answer8 == state[j]) {
    point++;
    count1++;
    alert('Correct! You point(s) is ' + point + '. Here are all the states I\'ve visted: ' + state + '. Thanks for playing the game, ' + userName + '! You got ' + count1 + 'out of 7 questions correct! I hope you enjoyed it.');
    found = true;
    break;
  }
}

if (!found) {
  for (var k = 0; k < 5; k++) {
    answer8 = prompt('Wrong. Keep guessing. Which state?').toUpperCase();
    console.log('answer8' + answer8);
    for (j = 0; j < state.length; j++) {
       if (answer8 == state[k]) {
       alert('Great! You got it!! You point(s) is ' + point + '. Here are all the states I\'ve visted: ' + state + '. Thanks for playi ng the game, ' + userName + '! You got ' + count1 + 'out of 7 questions correct! I hope you enjoyed it.');
          point++;
          count1++;
          found = true;
        }
      }
      if (found) {
        break;
      }
    }
  }
