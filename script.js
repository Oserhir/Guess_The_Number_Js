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

function showYouWon() {
  const text = "Awesome job, you got it!";
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}
