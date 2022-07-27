
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

      //  'Correct Answer' is index 0
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
      
// functions
var createTestButtons = function() {



      var question = document.createElement('h1');
      var ansBox = document.createElement('ol');
      var ansBtn0 = document.createElement('li');
      var ansBtn1 = document.createElement('li');
      var ansBtn2 = document.createElement('li');
      var ansBtn3 = document.createElement('li');
      var ansBtn4 = document.createElement('li');
      //hiding the correct answer
      ansBtn0.textContent = questionTemplate2.answers[0];
      ansBtn0.setAttribute('style', 'display:none');
      
      question.textContent = questionTemplate2.question;
      ansBtn1.textContent = questionTemplate2.answers[1];
      ansBtn2.textContent = questionTemplate2.answers[2];
      ansBtn3.textContent = questionTemplate2.answers[3];
      ansBtn4.textContent = questionTemplate2.answers[4];
      
      ansBtn1.textContent = questionTemplate2.answers[1];
      ansBtn2.textContent = questionTemplate2.answers[2];
      ansBtn3.textContent = questionTemplate2.answers[3];
      ansBtn4.textContent = questionTemplate2.answers[4];
      
      console.log(ansBox);
      console.log(ansBtn0);
      ansBox.appendChild(ansBtn0);
      ansBox.appendChild(ansBtn1);
      ansBox.appendChild(ansBtn2);
      ansBox.appendChild(ansBtn3);
      ansBox.appendChild(ansBtn4);

}



var startTest = function(event) {
      event.preventDefault();
      createTestButtons;
      
}
// Target variables
// -----
// getters
var testArea = document.getElementById('#testArea');
var welcome = document.getElementById('#welcome')
var inputArea = document.getElementById('#inputArea');
var startBtn = document.getElementById('#start');
var highScoresBtn = document.getElementById('#highScores');
var begin = startBtn.addEventListener('click', startTest);