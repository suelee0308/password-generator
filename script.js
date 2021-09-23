// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// var generatePassword = function() {

//   return;
// }


// Add event listener to generate button
generateBtn.addEventListener("click", generate);

// Declare variables as strings
var number = ['1', '2', '3', '4', 567890];
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lower = "qwertyuiopasdfghjklzxcvbnm"
var symbol = "!@#$%^&*?.";

// Declare user choices as false, because if true later, then it's "activated"
var numberChoice = false;
var upperChoice = false;
var lowerChoice = false;
var symbolChoice = false;


// Button clicked brings up prompt window
var chosenLength = ""
function generate() {
// Variable of character length created by user input after parameters are set. Loops if user input does not meet 8-128 criteria.
  var length = ""
    while (isNaN(length) || length < 8 || length > 128) {
      length = prompt ("Choose a number between 8-128 for the length of your password.");
      if (length === null){
        break ;
      }
    }
      console.log (length);
      console.log (typeof length);
// Change user choice variables if user selects them to be in their password
    if (length) {
      if (confirm("Do you want your password to contain NUMBERS?")){
        numberChoice = true;
      }

      if (confirm("Do you want your password to contain UPPERCASE LETTERS?")){
        upperChoice = true;
      }

      if (confirm("Do you want your password to contain LOWERCASE LETTERS?")){
        lowerChoice = true;
      }

      if (confirm("Do you want your password to contain SPECIAL CHARACTERS/SYMBOLS?")){
        symbolChoice = true;
      }

      if (numberChoice === false && upperChoice === false && lowerChoice === false && symbolChoice === false){
        alert("At least one of the criteria's must be selected. Please start over.")
      }
    }
}

// Make length into a value, not a string
var lengthValue = chosenLength * 1;
console.log(typeof lengthValue);

// Set number of indexes in the password with an array

// For each index, input one randomi chosen character

// Result should be a random password



// var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
// console.log (upper)