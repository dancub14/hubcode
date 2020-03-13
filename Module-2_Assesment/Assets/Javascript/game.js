//declare and initialize the array
var possibleWords = ["july", "president", "firework", "independence", "uncle sam" 
];

//Global variables
var guessedLetters = [];
var guessingWord = [];
var usedGuessingwWords = [];
var wordToMatch;
var numGuess;
var wins = 0;

// This var and setTimout function to not listen for keypress while game resets
var pause = false; 

//Starts game
function initializeGame() {

  // Get a new word
  wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase();

  // Set number of guesses (higher or lower) based on word length
    numGuess = 10;

  // Get underscores for guessingWord from wordToMatch
  for (var i=0; i < wordToMatch.length; i++){
	  
    // Put a space instead of an underscore between multi-word options in possibleWords array
    if (wordToMatch[i] === " ") {
      guessingWord.push(" ");
    } 
    else {
      guessingWord.push(" _ ");
    }
  }
  updateDisplay();
};

//Reset the game
function resetGame() {
  if (usedGuessingwWords.length === possibleWords.length) {
    usedGuessingwWords = [];
    wins = 0;
	
	//prompt to let player know game will restart
    alert("Good job, the game will now reset");
	setTimeout(resetGame, 200); 
	
	//Starts game again
	initializeGame();
 }
  else {
    pause = false;
    // Restores blinking "...get started" message
    document.getElementById('welcome').className = 'blink';
    
    // Get a new word
    wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase();
    console.log(wordToMatch);
	
    // If new word has already been used randomly select another
    if (usedGuessingwWords.includes(wordToMatch) === true) {
      resetGame();
    }
    
    // Set number of guesses (higher or lower) based on word length
      numGuess = 10;
   

    // Reset word arrays
    guessedLetters = [];
    guessingWord = [];

    // Reset the guessed word
    for (var i=0; i < wordToMatch.length; i++){
		
      // Put a space instead of an underscore between multi-word options in possibleWords array
      if (wordToMatch[i] === " ") {
        guessingWord.push(" ");
      } 
      else {
        guessingWord.push(" _ ");
      }
    }
    updateDisplay();
  }
};

// Update the Display
function updateDisplay () {
  document.getElementById("totalWins").innerText = wins;
  document.getElementById("currentWord").innerText = guessingWord.join("");
  document.getElementById("remainingGuesses").innerText = numGuess;
  document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ");
};

// Wait for key press
document.onkeydown = function(event) {
	
  // Make sure key pressed is an alpha character
  if (isLetter(event.key) && pause === false) {
  checkForLetter(event.key.toUpperCase());
  }
  
  // Turn off blinking "...get started" message on keypress
  document.getElementById('welcome').className = 'noBlink';
};

// Check if key pressed is between A-Z or a-z
var isLetter = function(ch){
  return typeof ch === "string" && ch.length === 1
  && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
};

// Check if letter is in word
function checkForLetter(letter) {
  var foundLetter = false;

  // Search string for letter
  for (var i=0; i < wordToMatch.length; i++) {
    if (letter === wordToMatch[i]) {
      guessingWord[i] = letter;
      foundLetter = true;
	  
      // If guessing word matches random word
      if (guessingWord.join("") === wordToMatch) {
		  
        // Increment # of wins and add word to usedGuessingWords
        wins++;
		
        // Add word to usedGuessingWords array to not be repeated
        usedGuessingwWords.push(wordToMatch);
        console.log(usedGuessingwWords);
        pause = true;
        updateDisplay();
        setTimeout(resetGame, 4000);
      }
    }
  }
  if (foundLetter === false) {
	  
    // Check if inccorrect guess is already on the list
    if (guessedLetters.includes(letter) === false) {
		
      // Add incorrect letter to guessed letter list
      guessedLetters.push(letter);
	  
      // Decrement the number of remaining guesses
      numGuess--;
    }
    if (numGuess === 0) {
		
      // Add word to usedGuessingWords array to not be repeated
      usedGuessingwWords.push(wordToMatch);
      console.log(usedGuessingwWords);
	  
      // Display word before reseting game
      guessingWord = wordToMatch.split();
      pause = true;
      setTimeout(resetGame, 4000);
    }
  }
  updateDisplay();
};

initializeGame();
