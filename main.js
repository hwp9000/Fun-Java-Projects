// enter your name here!
let userName = '';
//------------------------//
// If the user enters a name continue, if they didn't ask them to submit their question.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello,');
// enter your question here!
let userQuestion = '';
//------------------------//
if(userQuestion === '') {
  console.log('Please Ask a Question.');
}
else {
//console states user question.
console.log(`${userQuestion}`)
// Generate a random number from 0-7
const randomNumber = Math.floor(Math.random() * 8);
// eight ball set to ''
let eightBall = "";
// numbers 0-7's answers!
switch(randomNumber) {
case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
console.log(`The 8Ball states:${eightBall}`); 
}