var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name? ');
console.log('Welcome '+userName+' How well do you know Amish?')
console.log('note:all answers are in lower case')
score =0;
var questions=[{
  question: "what is my favorite passtime hobby ",
  answer: "gaming"
  },{
  question: "Do i like pets ",
  answer: "yse"
  },{
  question: "What do i like more, tea or coffee ",
  answer: "coffee"
  },{
  question: "Which is your favorite TV show? ",
  answer: "friends"
  },{
  question: "Do i like travelling? ",
  answer: "yes"
  }];
function play(question,answer)
{
  var userasnwer=readlineSync.question(question);
  if(userasnwer===answer)
  {
    score+=2;
    console.log('correct')
  }
  else{
    score--;
    console.log('wrong')
  }
}


for(let i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log('Well done, you socred '+ score)