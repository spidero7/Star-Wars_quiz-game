const startButton = document.querySelector('#start-btn')
const questionContainer = document.querySelector('#question-container')

startButton.addEventListener('click', startGame)

let sh

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
        question: 'In The Force Awakens, which character has Darth Vader’s damaged mask?',
        answer: [
            { text: 'Finn', correct: false},
            { text: 'Rey', correct: false},
            { text: 'Kylo Ren', correct: true},
            { text: 'Luke Skywalker', correct: false}
        ]
    }
]