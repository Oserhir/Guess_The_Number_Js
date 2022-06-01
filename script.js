let guesses = [];

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  // document.getElementById("restart-game").addEventListener("click", initGame);
};

let getRandomNumber = () => {
  return Math.floor(Math.random() * 101);
};

let correctNumber = getRandomNumber();

function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
}

function displayResult(numberGuess) {
  if (numberGuess > correctNumber) {
    return "too Hight";
  } else if (numberGuess < correctNumber) {
    return "too Low";
  } else {
    return "is correct";
  }
}

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
