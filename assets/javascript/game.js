//game.js


//variables
var wins = 0;
var losses = 0;
var guessesLeft = 11;
var yourGuesses = [] ;
var wordLetters = [];

var computerChoices = ["Frodo", "Bilbo", "Gandalf", "Smaug", "Shire", "Legolas", "Pippin", "Sauron"]


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

var s = computerGuess;
    for (var i = 0; i < s.length; i++) {
    wordLetters = (s.charAt(i));
    }  
 
document.onkeyup = function(event) {

     
  var userGuess = event.key;

  // writes to array to track guesses
  
  yourGuesses.push(userGuess);

  // need to write code to display spaces instead of word
  // need to write code to identify when letters selected display in word
  // need to write code to track wins/loss
  // need to write code to reset game  

  // logic to determine score
    if (userGuess === computerGuess)  {
      wins++;
      guessesLeft = 11;
      yourGuesses = [];
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 

    } else  {
      guessesLeft--;
    };
    
    if (guessesLeft === 0) {
      losses ++;
      guessesLeft = 11;
      yourGuesses = [];
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }; 


    

    // html variable
    var html =
      "<p>You chose: " + userGuess + "</p>" +
      "<p>The computer chose: " + computerGuess + "</p>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>Losses: " + losses + "</p>" +
      "<p>Guesses Left: " + guessesLeft + "</p>" +
      "<p>Word: " + wordLetters + "</p>" +
      "<p>Your Guesses: " + yourGuesses + "</p>" ;

    
    document.querySelector("#game").innerHTML = html;
  }