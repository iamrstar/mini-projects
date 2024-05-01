let randomNumber =  parseInt(Math.random()*100 +1)
 
const submit = document.querySelector('#subt')
const userInput = document.querySelector('.guessField')   
const guessSlot = document.querySelector('.guesses') 
const remaining = document.querySelector('.lastResult')   
const lowOrHi  = document.querySelector('.lowOrHi')  

const startOver =   document.querySelector('.resultParas')

const p = document.createElement('p')

let prevguess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const Guess = parseInt(userInput.value)
        validateGUess(Guess)
    })
}

/// validating the guess

    function validateGUess(guess) {
if(isNaN(guess)){
    alert('please enter a valid number') 
} else if (guess < 1 || guess > 100) {
    alert('please enter a number between 1 and 100')
}
else{
    prevguess.push(guess)

    if(numGuess===10){
        displayGuess(guess)
        displayMessage(`game over Random number ${randomNumber} guesses`)
        endGame()
    }

    else{
        displayGuess(guess)
        checkGuess(guess)
    }
}

}



/// this is for winninig situatuon
function checkGuess(guess) {
if (guess === randomNumber) {
 displayMessage(`Correct! You got it in ${numGuess} guesses`)
 endGame()
}

else if (guess < randomNumber) {
 displayMessage('Your guess is too low')
}
  else if (guess > randomNumber) {
    displayMessage('Your guess is too high')
  }

  }



// this is for displaying the guess

function displayGuess(guess){  
userInput.value = '' 
guessSlot.innerHTML += ` ${guess} `;
numGuess++;
remaining.innerHTML = ` : ${11 - numGuess}`;
}

function displayMessage(message) {
lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

/// ending the game 

function endGame() {
userInput.value = ''
userInput.setAttribute('disabled' , " ")
p.classList.add('button');
 p.innerHTML = `<h2 id = "newGame">Start New Game</h2> `
startOver.appendChild(p)
playGame = false;
newGame();
}


// restart the gsme ....

function newGame () {
const newGameBtn = document.querySelector('.button')
newGameBtn.addEventListener('click' , (e) => {
randomNumber =  parseInt(Math.random()*100 +1)
prevguess = []

numGuess = 1
guessSlot.innerHTML = ''
remaining.innerHTML = `  ${11 - numGuess} `;
userInput.removeAttribute('disabled')
startOver.removeChild(p) 

    playGame = true
});
} 



