let task = document.getElementById('task')
let playerInput = document.getElementById('playerInput')
let score = document.getElementById('score')
let scoreNum = 0
let taskText
let correctAnswer
let timerInterval
let seconds=60
let time=document.getElementById('time')
let gameSign
function start(event, sign) {
    gameSign=sign
    event.preventDefault()
    startTimer()
    gettask()
    console.log(correctAnswer);
    scoreNum=0
    score.innerHTML= 'Score: ' +0
    playerInput.select()
}
function gettask (){
    if(gameSign=='*'){
        taskText = (Math.floor(Math.random() * 10) + 1 + gameSign + (Math.floor(Math.random() * 100) + 1))
    }
    else if(gameSign=='/'){
        correctAnswer=Math.floor(Math.random() * 10) + 1 
        let secondNumber=Math.floor(Math.random() * 10) + 1 
        let firstNumber=correctAnswer*secondNumber
        taskText=firstNumber+gameSign+secondNumber
    }
    else{

        taskText = (Math.floor(Math.random() * 100) + 1 + gameSign + (Math.floor(Math.random() * 100) + 1))
    }
    correctAnswer = eval(taskText)
    task.innerHTML = 'Task: ' + taskText
    
    
}

submitBtn.onclick = function (event) {
    event.preventDefault();
    console.log(playerInput.value);
    if (playerInput.value == correctAnswer) {
        console.log('yes');
        scoreNum = scoreNum + 1
        score.innerHTML = 'Score: ' + scoreNum
    }
    
    playerInput.select()
    // вызывается функция,которая выводит пример на странице
    gettask()
}
// функция стартТаймер
function startTimer() {
    seconds=60
     // метод для остановки интервала
    clearInterval(timerInterval)
    // время из ХТМЛ= время + секунды
    time.innerHTML= 'Time: ' + seconds
    timerInterval = setInterval(function () {
        seconds=seconds - 1
        time.innerHTML= 'Time: ' + seconds
        if (seconds==0) {
            clearInterval(timerInterval)
        }
    }, 1000)
}
