
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  
  passwordText.value = password;

_________________________________________________________
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
___________________________________________________________

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
  function getPasswordOptions() {
    do {
      passLength = Number(prompt("Please enter password length, between 10 and 64 characters:"))
    } while (passLength < 10 || passLength > 64 || isNaN(passLength));
  }
    getPasswordOptions();
    
    
    
    // if (passLength < 10 || passLength > 64) {
      // alert("Length should be between 10 and 64 characters");
      // return null;
      // } else if (isNaN(passLength)) {
        //   alert("Please choose a character length between 10 and 64");
        //   return null;
        // }
        
        
    // Asking to confirm character options
    let passConcat = [];
    function passOptions() {
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
        
      } 
      
      passOptions();
      
    function minCriteria() {
       if (passConcat.length == 0) {
        alert("Please start again and select at least one option")
       }
      return null;
    }

      minCriteria();

  // Function for getting a random element from an array
  let createResult = function () {
    let passResult = [];
    for (let i = 0; i < passLength; i++) {
      passResult.push(passConcat[Math.floor(Math.random() * passConcat.length)]);
    }
    passResult = passResult.join("");
    return passResult;
  }

  return createResult();

}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);