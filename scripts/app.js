'use strict';
// var userName =  prompt('Welcome to Olive and Martini! What is your name?');
// console.log('We have a new vistor named ' + userName + '.');
// confirm('Thank you for coming over ' + userName + ' !');
// console.log('Thank you for coming over ' + userName + ' !.');
// // //Question 6
// // //numeric guessing game
// // //they get 4 tries have to say if they are too high or too low
// function question6() {
//   var number = 7;
//   var tries = 4;
//   var isWrong = true;
//   while (tries > 0){
//     var answer = parseInt(prompt('Guess how old Olive, the brown boston is. You have four tries.'));
//     if (answer === number) {
//       alert('Great Guess! You are correct. She is seven and Martini is 4.');
//       console.log('Our friend ' + userName + ' thinks Olive is ' + answer + ' years old.');
//       tries = 0;
//       isWrong = false;
//       rightAnswer++;
//     } else if (answer < number){
//       alert('Your number is too low!');
//       console.log(userName + ' guessed that Olive was ' + answer + ' years old.');
//       tries--;
//     } else if (answer > number){
//       alert('Your number is too high!');
//       console.log(userName + ' guessed that Olive was ' + answer + ' years old.');
//       tries--;
//     } else {
//       alert('Sorry, try again.');
//       console.log(userName + ' may be drinking with their answer of' + answer + '.');
//       tries--;
//     }
//   }
//   if (isWrong === true){
//     alert('Sorry you ran out of guesses. Olive is seven and Martini is four.');
//     console.log(userName + ' has ran oput of guesses.');
//   }
// }
// //
// var tries = 0;
// var rightAnswer = 0;
// // // question 1
// // function question1() {
// //   var dogCat = prompt('Lets play a game about a subject i like, ME! Do you think i am a cat guy?').toUpperCase();
// //   if (dogCat === 'YES' || dogCat === 'Y'){
// //     alert('I am generally a dog guy but i do have an elderly kitty at home.');
// //     console.log('I am generally a dog guy but i do have an elderly kitty at home.');
// //   } else if (dogCat === 'NO' || dogCat === 'N'){
// //     alert('You are right! Although i do have a cat at home');
// //     console.log('You are right! Although i do have a cat at home');
// //     rightAnswer++;
// //   } else {
// //     alert('Sorry i didn\'t understand');
// //   }
// // }
// //
// // //Question 2
// // function question2() {
// //   var likeGames = prompt('Do you think i like video games?').toUpperCase();
// //   if (likeGames === 'YES' || likeGames === 'Y'){
// //     alert('I Loooooooove video games!');
// //     console.log('I Loooooooove video games!');
// //     rightAnswer++;
// //   } else if (likeGames === 'NO' || likeGames === 'N'){
// //     alert('Nope, i am an avid gamer.');
// //     console.log('Nope, i am an avid gamer.');
// //   } else {
// //     alert('Sorry i didn\'t understand');
// //   }
// // }
// //
// // //Question 3
// // function question3() {
// //   var favColor = prompt('Do i like the color green?').toUpperCase();
// //   if (favColor === 'YES' || favColor === 'Y'){
// //     alert('Your are correct! Especially love it in a plaid or flannel');
// //     console.log('Your are correct! Especially love it in a plaid or flannel');
// //     rightAnswer++;
// //   } else if (favColor === 'NO' || favColor === 'N'){
// //     alert('Nope, it is one of my favorite colors.');
// //     console.log('Nope, it is one of my favorite colors.');
// //   } else {
// //     alert('Sorry i didn\'t understand');
// //   }
// // }
// //
// // //Question 4
// // function question4() {
// //   var vileFruit = prompt('Do you think i am a fan of the tomatoe?').toUpperCase();
// //   if (vileFruit === 'YES' || vileFruit === 'Y'){
// //     alert('Ye Gads no.... I don\'t touch the vile fruit!');
// //     console.log('Ye Gads no.... I don\'t touch the vile fruit!');
// //   } else if (vileFruit === 'NO' || vileFruit === 'N'){
// //     alert('You are correct!! I truly hates them');
// //     console.log('You are correct!! I truly hates them');
// //     rightAnswer++;
// //   } else {
// //     alert('Sorry i didn\'t understand');
// //   }
// // }
// //
// // //Question 5
// // function question5() {
// //   var goodCode = prompt('Do you think i will make a good coder?').toUpperCase();
// //   if (goodCode === 'YES' || goodCode === 'Y'){
// //     alert('Thank You!! I appreciate your support!');
// //     console.log('Thank You!! I appreciate your support!');
// //     rightAnswer++;
// //   } else if (goodCode === 'NO' || goodCode === 'N'){
// //     alert('I am making you a batch of frowny brownies');
// //     console.log('I am making you a batch of frowny brownies');
// //   } else {
// //     alert('Sorry i didn\'t understand');
// //   }
// // }
// //
//
// // //Question 7
// // // How many states have i lived in game
// // // they get six tries
// // // upon losing or getting correct display all answers
// // function question7() {
// //   var statesLived = ['california', 'nevada'];
// //   tries = 6;
// //   while (tries > 0){
// //     var potatoe = prompt('Can you name a state i have lived in other than Washington?').toLowerCase();
// //     for (var i = 0; i < statesLived.length; i++) {
// //       if (potatoe === statesLived[i]) {
// //         alert('Wow your good! I have lived in California, Nevada and Washington');
// //         i = statesLived.length;
// //         tries = 0;
// //         rightAnswer++;
// //       }
// //     }
// //     if (tries === 0){
// //       alert('The answers were California and Nevada');
// //     } else {
// //       alert('Oops try again');
// //       tries--;
// //     }
// //   }
// // }
// //
// // question1();
// // question2();
// // question3();
// // question4();
// // question5();
// question6();
// // question7();
// //
// // // Return number of write answers
// alert('You got ' + rightAnswer + ' out of 7');
