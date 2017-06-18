'use strict';
// define variables
var userName = prompt('Hello! What\'s your name?');
var point = 0;
var count1 = 0;
var remainingAttempts1 = 4;
var remainingAttempts2 = 5;
var state = ['NY', 'MA', 'LA', 'NV', 'TX', 'CA', 'AZ', 'CT', 'FL'];
console.log('userName: ' + userName);

// validate the input
inputValidation();
function inputValidation() {
  while(!userName) {
    userName = prompt('Hey. What\'s your name? We need a name.');
  }
  console.log('userName: ' + userName);
}

// check if the user wants to play the game or not
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
var answer6 = prompt('Can you guess my favorite number, between 0 to 10? You have 4 chances in total. Good luck!');

// validate the input;
inputNumberValidation();
function inputNumberValidation() {
  while (isNaN(answer6)) {
    answer6 = prompt('Please give me a number between 0 to 10.');
    console.log('My favorite number: ' + answer6);
  }
}

sixthQuestion();
function sixthQuestion () {
  if (answer6 == 7) {
    point++;
    count1++;
    remainingAttempts1--;
    console.log(answer6);
    console.log('point: ' + point + ';count1: ' + count1 + ';remainingAttempts: ' + remainingAttempts1);
    alert('Correct. Impressive! You are good at this game. You point(s) is ' + point + '. Continue to the next question.');
  } else {
    for (var i = 0; i < 4; i++) {
      if (answer6 < 7 && answer6 >= 0) {
        point--;
        remainingAttempts1--;
        alert('Too low. You have ' + remainingAttempts1 + ' attemps left.');
        console.log('answer6: ' + answer6 + ';point: ' + point + ';remainingAttempts: ' + remainingAttempts1);
        console.log(i);
      } else if (answer6 > 7 && answer6 <= 10) {
        point--;
        remainingAttempts1--;
        alert('Too high. You have ' + remainingAttempts1 + ' attemps left.');
        console.log('answer6: ' + answer6 + ';point: ' + point + ';remainingAttempts: ' + remainingAttempts1);
        console.log(i);
      } else {
        point++;
        count1++;
        console.log('answer6: ' + answer6 + ';point: ' + point + 'count1: ' + count1 + ';remainingAttempts: ' + remainingAttempts1);
        console.log(i);
        alert('Correct! You got it!! You point(s) is ' + point + '. Continue to the last question.');
        break;
      }
      if(i != 3) {
        console.log(answer6);
        answer6 = prompt('Guess again.');
      }
      if(i == 3) {
        console.log(answer6);
        break;
      }
    }

    if (i == 3 && answer6 != 7) {
      point--;
      remainingAttempts1--;
      console.log('answer6: ' + answer6 + ';point: ' + point + ';remainingAttempts: ' + remainingAttempts1);
      console.log(i);
      alert('You used up all your chances. Sorry. Good luck with the last question. You point(s) is ' + point + '. Continue to the last question.');
    }
  }
}

// The seventh question
seventhQuestion();
function seventhQuestion() {
  var answer7 = prompt('Can you guess a state that I visited before, abbrevation names only?').toUpperCase();
  var found = false;
  console.log('State I visited: ' + answer7);
  for (var j = 0; j < state.length; j++) {
    if (answer7 == state[j]) {
      point++;
      count1++;
      remainingAttempts2--;
      console.log('answer7: ' + answer7 + ';point: ' + point + 'count1: ' + count1 + ';remainingAttempts: ' + remainingAttempts2);
      alert('Correct! You point(s) is ' + point + '.Here are all the states I\'ve visted: ' + state.join() + '. Thanks for playing the game, ' + userName + '! You got ' + count1 + 'out of 7 questions correct! I hope you enjoyed it.');
      found = true;
    }
  }

  if (!found) {
    for (var k = 0; k < 5; k++) {
      if (found)
        break;
      answer7 = prompt('Wrong. Keep guessing. Which state? You have ' + remainingAttempts2 + ' remaining attempts').toUpperCase();
      remainingAttempts2--;
      console.log('answer7' + answer7 + ';remainingAttempts:' + remainingAttempts2);
      for (j = 0; j < state.length; j++) {
        if (answer7 == state[j]) {
          count1++;
          point++;
          console.log('answer7: ' + answer7 + ';point: ' + point + ';count1: ' + count1 + ';remainingAttempts: ' + remainingAttempts2);
          alert('Great! You got it!! You point(s) is ' + point + '. Here are all the states I\'ve visted: ' + state.join() + '. Thanks for playing the game, ' + userName + '! You got ' + count1 + ' out of 7 questions correct! I hope you enjoyed it.');
          found = true;
        }
        if (found)
          break;
      }
    }
  }

  if (answer7 != state[j] && k == 5) {
    alert('You used up all your chances. Here are all the states I\'ve visted: ' + state.join() + '. Thanks for playing the game, ' + userName + '! You got ' + count1 + ' out of 7 questions correct. I hope you enjoyed it.');
  }
}
