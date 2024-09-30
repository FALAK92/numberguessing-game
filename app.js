// Variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let guessedNumbers = [];

// DOM elements
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const resultMessage = document.getElementById('resultMessage');
const previousGuesses = document.getElementById('previousGuesses');
const restartGame = document.getElementById('restartGame');

// Function to check the player's guess
function checkGuess() {
    let userGuess = Number(guessInput.value);
    guessedNumbers.push(userGuess);
    guessCount++;
    if (userGuess === randomNumber) {
        resultMessage.textContent = `Congratulations! You guessed it right in ${guessCount} guesses!`;
        resultMessage.style.color = 'purple';
        gameOver();
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Too low! Try again.';
        resultMessage.style.color = 'purple';
    } else {
        resultMessage.textContent = 'Too high! Try again.';
        resultMessage.style.color = 'purple';
    }

    previousGuesses.textContent = `Previous guesses: ${guessedNumbers.join(', ')}`;
    guessInput.value = '';
}

// Function to handle game over
function gameOver() {
    guessInput.disabled = true;
    submitGuess.disabled = true;
    restartGame.classList.remove('hidden');
}

// Function to restart the game
function resetGame() {
    guessCount = 0;
    guessedNumbers = [];
    randomNumber = Math.floor(Math.random() * 100) + 1;

    guessInput.disabled = false;
    submitGuess.disabled = false;
    guessInput.value = '';
    resultMessage.textContent = '';
    previousGuesses.textContent = '';
    restartGame.classList.add('hidden');
}

// Event Listeners
submitGuess.addEventListener('click', checkGuess);
restartGame.addEventListener('click', resetGame);
