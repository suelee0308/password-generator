// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

// Button clicked brings up prompt window
generateBtn.addEventListener("click", writePassword);

// Declare variables as an array of strings
var number = "1234567890".split("")
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var lower = "qwertyuiopasdfghjklzxcvbnm".split("")
var symbol = "!@#$%^&*?.".split("")
console.log(number);
console.log(typeof lower);

// Declare user choices as false, because if true later, then it's "activated"
var numberChoice = false;
var upperChoice = false;
var lowerChoice = false;
var symbolChoice = false;

// Declare password variable to use to display in textbox
var password = [];


function generatePassword() {
// Variable of character length created by user input.
// Loops if user input does not meet 8-128 criteria or is not a number = null.
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
   numberChoice = confirm("Do you want your password to contain NUMBERS?");
      
console.log(length)
console.log(numberChoice)

  upperChoice = confirm("Do you want your password to contain UPPERCASE LETTERS?");

console.log(length)
console.log(upperChoice)

    lowerChoice = confirm( "Do you want your password to contain LOWERCASE LETTERS?");
      
console.log(length)
console.log(lowerChoice)

  symbolChoice = confirm("Do you want your password to contain SPECIAL CHARACTERS/SYMBOLS?");
      
console.log(length)
console.log(symbolChoice)

  // If all choices are false, then make them start over. 
  if (numberChoice === false && upperChoice === false && lowerChoice === false && symbolChoice === false) {
    alert("At least one of the criteria's must be selected. Please start over.")};
    
// Determin length by making length into a value, not a string
  var lengthValue = length * 1;
  console.log(typeof lengthValue);

// Determine all characters that can be used in array placeholder
  var charAvail = [];
  
    if (numberChoice === true) {
      charAvail.concat(number);
      charAvail =  charAvail.concat(number);
    }

    if (upperChoice === true) {
      charAvail.concat(upper);
      charAvail =  charAvail.concat(upper);
    }

    if (lowerChoice === true) {
      charAvail.concat(lower);
      charAvail =  charAvail.concat(lower);
    }

    if(symbolChoice === true) {
      charAvail.concat(lower);
      charAvail =  charAvail.concat(symbol);
    }

  console.log(charAvail)


// password var that is an array placeholder
// Create for loop to insert an available character to each index of the password.
// Set number of indexes in the password with an array using length's value
  
  var password = [];
  function passChar(lengthValue, charAvail) {

// For each index, input one randomly chosen character
    for (var i = 0; i < lengthValue; i++){
    password.push(charAvail[Math.floor(Math.random() * charAvail.length)]);
  }
  }

  // Call function
  passChar(lengthValue, charAvail);

  console.log(password);

// Get rid of commas between the array showing
  password = password.join('');

//Take password generated out of function 
return password;

}

// Result should be a randomly generated password

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}