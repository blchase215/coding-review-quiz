
// Question Variable Templates

// Option 1:
// Template is an array.

// index[0] an object that contains the question.
// index[1-4] are each objects that correspond to answers 1-4.

      // 'question' is a key with a value of the question in string form.

// each answer is an object and has two keys.

      // 'answer' is a key with a value of the answer in string form.

      // 'correct' is a key with a boolean value,
      // where the correct answer has the value of true.

      
      
      var questionTemplate = [
            
            {
                  question: "Question 1",
            },
            
            {
                  answer: 'Answer1', 
                  correct: false,
            },
            
            {
                  answer: 'Answer2', 
                  correct: false,
            },
            
            {
                  answer: 'Answer3', 
                  correct: true,
            },
            
            {
                  answer: 'Answer4', 
                  correct: false,
            }
      ];
      
// Testing
      // Question
      var thisQuestion = questionTemplate[0].question;
      console.log(thisQuestion);
      
      console.log(questionTemplate[3].correct);
      // Answer1
      var answer1 = questionTemplate[1].answer;
      console.log(answer1);
      
      // Answer2
      var answer2 = questionTemplate[2].answer;
      console.log(answer2);
      
      // Answer3
      var answer3 = questionTemplate[3].answer;
      console.log(answer3);
     
      // Answer4
      var answer4 = questionTemplate[4].answer;
      console.log(answer4);
      
      // test if correct
      var userPickTest1 = questionTemplate[3];
      console.log(userPickTest1.answer);
      console.log(userPickTest1.correct);
      var userPick1 = userPickTest1.correct;
      var correctCheck1 = questionTemplate[3].correct;

      if (correctCheck1 === true) {
      console.log('correct this way too');
      }


      // Option 2
// Template is an object.

      // 'question' is a key with a value of the question in string form.

      // 'answers' is an array.
            // index[0] is the correct answer in string form.
            // index[1, 2, 3, 4] each a string that correspond to answers 1-4.

var questionTemplate2 = {

      question: "Question 2",
      
      answers: [

      //  'Correct Answer'
      'Answer3',
      
      'Answer1',

      'Answer2',

      'Answer3',

      'Answer4',

      ] 
};

// New Question Testing
//-----
      // Question
      var thisQuestion = questionTemplate2.question;
      console.log(thisQuestion);
      
      // Answer1
      var answer1 = questionTemplate2.answers[1];
      console.log(answer1);
      
      // Answer2
      var answer2 = questionTemplate2.answers[2];
      console.log(answer2);
      
      // Answer3
      var answer3 = questionTemplate2.answers[3];
      console.log(answer3);
      
      // Answer4
      var answer4 = questionTemplate2.answers[4];
      console.log(answer4);

      // test if correct
      var userPick2 = questionTemplate2.answers[3];
      var correctCheck2 = questionTemplate2.answers[0];
      if (userPick2 === correctCheck2) {
            console.log('correct');
      }
      



function startTest(event) {
      event.preventDefault();
      console.log('I\'m in');
}

// Target variables
// -----
var startButton = document.querySelector('#start');
var highScoresbtn = document.querySelector('#highScores');

startButton.addEventListener('click', startTest);

// Psuedocode
// 
// At some point in your journey to become a full-stack
// web developer, you’ll likely be asked to complete a
//  coding assessment&mdash;perhaps as part of an interview 
//  process. A typical coding assessment includes both 
//  multiple-choice questions and interactive coding challenges. 
//  To help familiarize you with these tests and allow you 
//  to use the skills covered in this module, this Challenge 
//  invites you to build a timed coding quiz with multiple-choice 
//  questions. This app will run in the browser and will feature 
//  dynamically updated HTML and CSS powered by JavaScript code 
//  that you write. It will have a clean, polished, and responsive 
//  user interface. This week’s coursework will equip you with 
//  all the skills you need to succeed in this assignment.

// Variables
// 
// timer

// questions/answers
      //I talked this out with Jake, but I will try to lay it out here.
      
      // Idea for Q&A variable:  an array of objects.
      
      // the master list variable looks like:
      // qaList = [qaItem1[], qaitem2[], qaitem3[], ...]; and so on, for however many questions we have.
      
      // each question is an array of one string and 4 objects and looks like:
      // qaItem ["The Question", answer1, answer2, answer3, answer4];
      // each answer will look like:
            //answer1 {
            //    answer: "answer text here.",
            //   correct: true or false
            //};
      // If we use this structure, then
            // index 0 of each item will always be the question
            // index 1-4 will always be the answers
            // therefor, it will be easy and intuitive to assign each question to the li
            // correct answer baked into object, no need for extra variable
            // ability to structure entire quiz function as a nested loop where each
            // time the loop runs is the next question
            // to illustrate with psuedocode:
                  // click start begins loop, first Q and As populate, timer starts
                  // click on an answer, tells loop to increment counter and advance.
      // I am sure it could be broken down further, but I think that illustrates the concept I am going for.
      // let me know, if I missed anything


// click start begins quiz and timer
// 
// 
// remove h1 and add h2 "question"
// add list item buttons for answers
// 
   // Choosing answers //
// 
// when correct answer is chosen, load next question
      // if user answer === correct
      // then load next question
// wrong answer subtracts time
      // else if question is === to other answer
      // then timer is decremented
// 
// list with 4 buttons/answers for each question
    // set text of each button to an answer for current question
    // use <ol>
    // make <li> elements a button
    // potential style: correct answer turns button green onClick
//                    incorrect answer turns button red onClick
// 
// 
// 
// either all questions answered or timer = 0 ends quiz
//      timer ends, display message and go back to homepage
// 
// at game ends with time, high score and initials can be entered
//      store remaining time in score variable
//      place to enter initials
//      submit button
//          checks for valid text entry
//          if the entry is valid
//          then stores initials and score in local storage
// upon submission, goto highscores page // does local storage persist if we move pages // should be a yes
//      display top high score(s)     
// 
// button to go back to quiz
//      link to opening page
// button to clear highscores
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 