//game.js


//variables
var wins = 0;
var losses = 0;
var guessesLeft = 11;
var yourGuesses = [];
var wordLetters = [];
var wordDisplay = [];



var computerChoices = ["frodo", "bilbo", "gandalf", "smaug", "shire", "legolas", "pippin", "sauron"]


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
 
var s = computerGuess;
    for (var i = 0; i < s.length; i++) {
    wordLetters.push(s.charAt(i));
    }  

//identify characters for if else

 var firstChar = (wordLetters[0]);
 var secondChar = (wordLetters[1]);
 var thirdChar = (wordLetters[2]);
 var fourthChar = (wordLetters[3]);
 var fifthChar = (wordLetters[4]);
 var sixthChar = (wordLetters[5]);
 var seventhChar = (wordLetters[6]);

//  var wordTrigger = (firstChar + secondChar + thirdChar + fourthChar + fifthChar + sixthChar + seventhChar);

 
document.onkeyup = function(event) {

     
  var userGuess = event.key;

  // writes to array to track guesses
  
  yourGuesses.push(userGuess);

  // need to write code to display the correct number of spaces for the word  
  

  // logic to track guesses and display letters in word as they are guessed correctly
   
    if (userGuess === firstChar) {  
      wordDisplay[0] = userGuess;
      
    }
    if (userGuess === secondChar){
      wordDisplay[1] = userGuess;
       
    }
    if (userGuess === thirdChar){
      wordDisplay[2] = userGuess;
       
    }
     if (userGuess === fourthChar){
      wordDisplay[3] = userGuess;
      
    }
    if (userGuess === fifthChar){
      wordDisplay[4] = userGuess;
       
    }
    if (userGuess === sixthChar){
      wordDisplay[5] = userGuess;
       
    }

    if (userGuess === seventhChar){
      wordDisplay[6] = userGuess;
       
    }

   
    else  {
      guessesLeft--;
    };

   
    // logic to reset game if won
    if (JSON.stringify(wordLetters) === JSON.stringify(wordDisplay)) {
        wins ++;
        yourGuesses = [];
        guessesLeft = 11;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        wordDisplay = [];
        wordLetters = [];
        s = computerGuess;
            for (var i = 0; i < s.length; i++) {
            wordLetters.push(s.charAt(i));
            }
        firstChar = (wordLetters[0]);
        secondChar = (wordLetters[1]);
        thirdChar = (wordLetters[2]);
        fourthChar = (wordLetters[3]);
        fifthChar = (wordLetters[4]);
        sixthChar = (wordLetters[5]);
        seventhChar = (wordLetters[6]);    
      
    }
    
    
    // logic to reset game if guesses are exhausted
    if (guessesLeft === 0) {
      losses ++;
      guessesLeft = 11;
      yourGuesses = [];
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      wordDisplay = [];
      wordLetters = [];
      s = computerGuess;
      for (var i = 0; i < s.length; i++) {
         wordLetters.push(s.charAt(i));
         }
      firstChar = (wordLetters[0]);
      secondChar = (wordLetters[1]);
      thirdChar = (wordLetters[2]);
      fourthChar = (wordLetters[3]);
      fifthChar = (wordLetters[4]);
      sixthChar = (wordLetters[5]);
      seventhChar = (wordLetters[6]); 
                
    }; 


    

    // html variable
    var html =
      "<p>You chose: " + userGuess + "</p>" +
      "<p>wordDisplay: " + wordDisplay + "</p>" +
      // "<p>The computer chose: " + computerGuess + "</p>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>Losses: " + losses + "</p>" +
      "<p>Guesses Left: " + guessesLeft + "</p>" +
      // "<p>wordLetters: " + wordLetters + "</p>" + 
      // "<p>wordTrigger: " + wordTrigger + "</p>" +
      // "<p>Word: " + firstChar + "</p>" +
      // "<p>Word: " + secondChar + "</p>" +
      // "<p>Word: " + thirdChar + "</p>" +
      // "<p>Word: " + fourthChar + "</p>" +
      // "<p>Word: " + fifthChar + "</p>" +
      // "<p>Word: " + sixthChar + "</p>" +
      // "<p>Word: " + seventhChar + "</p>" +
      "<p>Your Guesses: " + yourGuesses + "</p>" ;

    
    document.querySelector("#game").innerHTML = html;
  }