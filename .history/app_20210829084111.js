const startButton = document.querySelector('#start-btn')
const questionContainer = document.querySelector('#question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    setQuestion();
}

function setQuestion() {

}

function selectAnswer() {

}


const questions = [
    {
        question: 'In The Force Awakens, which character has Darth Vader’s damaged mask?'
        answer: 
    }
]