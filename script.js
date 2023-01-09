
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  passwordText.value = password;
}

//Present a series of prompts for password criteria:

// Length of password:
// At least 10 characters but no more than 64.

// Character types:
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc.)

// Code should validate for each input and at least one character type should be selected.

// Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.

// Function to generate password with user input

function generatePassword() {
  // Array of special characters to be included in password
  let specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];

  // Array of numeric characters to be included in password
  let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Array of lowercase characters to be included in password
  let lowerCasedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // Array of uppercase characters to be included in password
  let upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // Function to prompt user for password length

  let passLength = 0;
  let passConcat = [];
  function getPasswordOptions() {
    passLength = Number(prompt("Please enter password length, between 10 and 64 characters:"));
    parseInt(passLength);
  }

  while (passLength < 10 || passLength > 64) {
    getPasswordOptions("Length should be between 10 and 64 characters");
  }
  // Asking to confirm character options

  if (confirm("Should your password include lower case letters?") == true) {
    passConcat = passConcat.concat(lowerCasedCharacters);
  }

  if (confirm("Should your password include upper case letters?") == true) {
    passConcat = passConcat.concat(upperCasedCharacters);
  }

  if (confirm("Should your password include numeric values?") == true) {
    passConcat = passConcat.concat(numericCharacters);
  }

  if (confirm("Should your password include special characters?") == true) {
    passConcat = passConcat.concat(specialCharacters);
  }

  console.log(passConcat)

  // Function for getting a random element from an array
  var createResult = function () {
    let passResult = [];
    for (var i = 0; i < passLength; i++) {
      passResult.push(passConcat[Math.floor(Math.random() * passConcat.length)]);
    }
    passResult = passResult.join("");
    return passResult;
  };
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);