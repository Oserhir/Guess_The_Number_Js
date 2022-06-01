window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
};

let guesses = [];

let saveGuessHistory = (guess) => {
  guesses.push(guess);
  return guesses;
};

// Generate a random number 1 to 100
let getRandomNumber = () => {
  return Math.floor(Math.random() * 101);
};

let correctNumber = getRandomNumber();

function playGame() {
  // Get user value from input
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

function initGame() {
  // Reset the correctNumber
  correctNumber = getRandomNumber();
  // Reset the input value
  document.getElementById("number-guess").value = "";
  // Reset the guesses array
  guesses = [];
  // Reset the guesses Result disply
  resetResultContent();
  // Reset the guesses History disply
  resetHistoryContent();
}

// Reset the guesses History disply
function resetHistoryContent() {
  document.getElementById("result").innerHTML = "";
}

// Reset the guesses Result disply
function resetResultContent() {
  document.getElementById("history").innerHTML = "";
}

// Check whether the guess is too high, too low, or is correct
function displayResult(numberGuess) {
  if (numberGuess > correctNumber) {
    showNumberAbove();
  } else if (numberGuess < correctNumber) {
    showNumberBelow();
  } else {
    showYouWon();
  }
}

// Display guess history to user
function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";

  while (index >= 0) {
    list += `<li class='list-group-item'>You guessed ${guesses[index]} </li> `;
    index--;
  }

  list += "</ul>";

  document.getElementById("history").innerHTML = list;
}

// display the correct dialog
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
