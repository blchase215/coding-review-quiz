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

// player score

// high score

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
// var timeInterval = setInterval(function () {

//     timeLeft--;
//     // PRINT the seconds remaining
//     timerEl.textContent = timeLeft + " seconds remaining"

//     if (timeLeft <= 0) {
//       clearInterval(timeInterval);
//       // CALL displayMessage
//       displayMessage();
//       // ?? HIDE countdown text
//       timerEl.textContent = "";
//     }
//   }, 1000);
// }