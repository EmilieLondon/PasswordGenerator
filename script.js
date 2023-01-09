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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to generate password with user input 

function generatePassword() {
  let passLength = 0;
  passLength = Number(
    prompt("Please enter password length, between 10 and 64 characters:")
  );

  if (passLength < 10 || passLength > 64) {
    alert("Length should be between 10 and 64 characters");
    return null;
  } else if (isNaN(passLength)) {
    alert("Please choose a character length between 10 and 64");
    return null;
  }

  // Asking to confirm character options, ensuring that at least 1 of each character type selected will be present in the result 
  // and also that the user picks at least 1 of the character types
  
  let passConcat = [];
  let passResult = [];

  if (confirm("Should your password include lower case letters?") == true) {
    passConcat = passConcat.concat(lowerCasedCharacters);
    passResult.push(lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)]);
  }

  if (confirm("Should your password include upper case letters?") == true) {
    passConcat = passConcat.concat(upperCasedCharacters);
    passResult.push(upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)]);
  }

  if (confirm("Should your password include numeric values?") == true) {
    passConcat = passConcat.concat(numericCharacters);
    passResult.push(numericCharacters[Math.floor(Math.random() * numericCharacters.length)]);
  }

  if (confirm("Should your password include special characters?") == true) {
    passConcat = passConcat.concat(specialCharacters);
    passResult.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
  }

  if (passConcat.length == 0) {
    alert("Please start again and select at least one option");
    return null;
  }
  
  // getting a random element from an array
  for (let i = passResult.length; i < passLength; i++) {
    passResult.push(passConcat[Math.floor(Math.random() * passConcat.length)]);
  }
  passResult = passResult.join("");
  return passResult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
