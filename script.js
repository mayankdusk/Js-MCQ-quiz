const quizDB = [
{
  question: "Q1: What is the full form of HTML?",
  a: "Hello To My Lord",
  b: "Hyper Text Markup Language",
  c: "Hyper Text Makeup Language",
  d: "Hey Text Markup Language",
  ans: "ans2"
},
{
    question: "Q2: What is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Castaking Style Sheets",
    c: "Cascading Slide Sheets",
    d: "Cascading style shadow",
    ans: "ans1" 
},
{
    question: "Q3: Which of these are not the properties of flexbox?",
    a: "justify-content",
    b: "align-items",
    c: "space-bound",
    d: "flex-direction",
    ans: "ans3",
},
{
    question:"Q4: What is the full form of HTTP",
    a: "Hypertext Tranfer Product",
    b: "Hypertext Test Protocal",
    c: "Hey Transfer Protocol",
    d: "Hypertext Transfer Protocol",
    ans: "ans4"
}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answer = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();
const getCheckAnswer = () => {
    let ans;
    console.log(answer);
     answer.forEach((curAnsElem) =>{
         if(curAnsElem.checked){
          ans = curAnsElem.id;
         }
     });
     return ans;

};

const deselectAll = () =>{
    answer.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    console.log(quizDB[questionCount]);

    if (checkedAnswer === quizDB[questionCount].ans){
       score++;
};

questionCount++;

deselectAll();

if(questionCount < quizDB.length){
    loadQuestion();
}else{

    showScore.innerHTML = `
       <h3> Your Score ${score}/${quizDB.length} </h3>
       <button class="btn" onclick="location.reload()">Play Again</button>

    `;
    showScore.classList.remove('scoreArea');

}

});