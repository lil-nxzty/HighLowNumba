let randomnumba = Math.floor(Math.random() * 10) + 1;
let numbaOfGuesses = 0;
let Guess = Number(prompt("I'm thinking of a number between 1 and 10. What number am i thinking of??"));
 
while (Guess !== randomnumba) {
 
  if (Guess === 999) {
    alert(`You quit the game. The number was   ${randomnumba} .`);
    break;
  }
 
  else if (isNaN(Guess)) {
    Guess = Number(prompt("Please enter a number between 1 and 10."));
  }
 
  else if (Guess < randomnumba) {
    numbaOfGuesses = numbaOfGuesses + 1;
    Guess = Number(prompt("Too low, guess again"));
  }
 
  else if (Guess > randomnumba) {
    numbaOfGuesses = numbaOfGuesses + 1;
    Guess = Number(prompt("Too high, guess again"));
  }
}
 
if (Guess === randomnumba) {
  numbaOfGuesses = numbaOfGuesses + 1;
  alert("Congratulations youve guessed it in " + numbaOfGuesses + " tries!");
}