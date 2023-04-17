const quizSelectionContainer = document.querySelector('.quiz-selection-container');
const questionContainer = document.querySelector('.question-container');
const resultContainer = document.querySelector('.result-container');

class Quiz{
    constructor(questions){
        this.questions = questions;
        this.questionNo = 0;
        this.score = 0 ;
    }
    displayQuestion(){
        if (this.questionNo==this.questions.length) {
            this.showResult();
        } else {
            const ques = document.createElement('h3');
            ques.innerHTML = `Q${this.questionNo+1}: ${this.questions[this.questionNo].question}`;
            questionContainer.appendChild(ques);
            Quiz.shuffleQuestions(this.questions[this.questionNo].answers).forEach((q)=>{
                const answerBox = document.createElement('div');
                answerBox.classList = ['answer-box'];
                answerBox.innerHTML = `${q}`;
                questionContainer.appendChild(answerBox);
                answerBox.addEventListener('click',(e)=>{
                    if(this.questionNo<this.questions.length){
                        if(this.questions[this.questionNo].correctAnswer == e.currentTarget.innerHTML){
                            this.score++;
                        }
                        this.questionNo++;
                        questionContainer.innerHTML = '';
                        this.displayQuestion();
                    }
                });
            });
        }
    }

    showResult(){
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'flex';
        resultContainer.innerHTML = 
        `
            <h3>Your Result</h3>
            <h4>Correct answers are: ${this.score} out of ${this.questions.length}</h4>
        `;
        let nextBtn = document.createElement('button');
        nextBtn.classList = ['next-btn'];
        nextBtn.innerHTML = 'Next';
        resultContainer.appendChild(nextBtn);
        nextBtn.addEventListener('click',()=>{
            selectQuiz();
            resultContainer.style.display = 'none';
            quizSelectionContainer.style.display = 'flex';
        });

    }

    static shuffleQuestions(arr){
        return arr.sort(()=> Math.random() - 0.5);
    }

}

const selectQuiz = async () => {

    const res = await fetch('./quizzes.json');
    const data = await res.json();
    quizSelectionContainer.innerHTML = '';
    data.forEach((quiz,i) => {
        let quizBox = document.createElement('div');
        quizBox.classList = ['quiz-box'];
        let h3 = document.createElement('h3');
        h3.innerHTML = `Quiz ${i+1}`;
        quizBox.appendChild(h3);
        quizSelectionContainer.appendChild(quizBox);
        quizBox.addEventListener('click',()=>{
            startQuiz(quiz,i);
        });
    });

    const startQuiz = (questions,quizIndex) => {
        quizSelectionContainer.style.display = 'none' ;
        questionContainer.style.display = 'flex';
        const quiz = new Quiz(Quiz.shuffleQuestions(questions));
        quiz.displayQuestion();
    }

}

selectQuiz();