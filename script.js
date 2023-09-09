let input = document.getElementById("input");

let btn = document.getElementById("btn");

let wrng = document.querySelector(".wrng");

let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100 + 1);

let numGuesses = 0;

btn.addEventListener("click", () => {
  guessNumber();
});

function guessNumber() {
  if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
    wrng.innerHTML = "Enter between 1 to 100";
  } 
  
  else {
    numGuesses++;
    guesses.innerHTML = "Number of Guesses :" + numGuesses;

    if (input.value > answer) {
      wrng.innerHTML = "You guessed to high";
      input.value = "";
    } else if (input.value < answer) {
      wrng.innerHTML = "You guessed to low";
      input.value = "";
    }

    else {
      wrng.innerHTML = "Congratulations you guess the correct answer";

      setTimeout(() => {
        resetGame();
      }, 3000);
    }
  }
}

function resetGame() {
  numGuesses = 0;
  answer = Math.floor(Math.random() * 100 + 1);
  input.value = "";
  guesses.innerHTML = "Number of Guesses :0 ";
  wrng.innerHTML = "";
}
