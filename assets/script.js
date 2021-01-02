// Assignment Code

// All of the global variables

var onlyLowerCase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

var onlyUpperCase = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];

var onlyNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

var onlySpecialChar = ["@", "%",  "+", "\\", ",", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

// function to create a user input using prompts
function getPasswordOptions() {
  var length = parseInt(prompt("How long do you want your password to be?"));

// conditional statement to validate if input is a number or not. Prompt ends if false.
if (isNaN(length) === true) {
  alert("You need to pick a number please");
  return;
}

// conditional statement to check if password is at least 8 characters, prompt ends if false
if (length < 8) {
  alert("Please choose a password with at least 8 characters");
  return;
}

// conditional statement to check if password is no more than 128 characters, prompt ends if false
if (length > 128) {
  alert("Please choose a password with no more than 128 characters");
  return;
}
 
// allow user to choose if they want upper case letters
var includeUpperCase = confirm("Do you want to use uppercase letters?");
// allow user to choose if they want lower case letters
var includeLowerCase = confirm("Do you want to use lowercase letters?");
// allow user to choose if they want numbers
var includeNumeric = confirm("Do you want to include numbers in your password?");
// allow user to choose if they want to use special characters
var includeSpecialChar = confirm("Do you want to include special characters in your password?");

// if the user doesn't choose any of the options, they need to choose at least one character
if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecialChar) {
  alert("Your password must contain at least one special character, numbers, upper case letters or lower case letters");
  return;
}

var passwordOptions = {
  length: length,
  upperCase: includeUpperCase,
  lowerCase: includeLowerCase,
  specialChar: includeSpecialChar,
  numeric: includeNumeric
}
return passwordOptions;
}

// function to generate the password
function generatePassword() {
  var options = getPasswordOptions();
  console.log(options);

  var passwordEntry = [];
  console.log(passwordEntry);

  // a for loop to add upper case characters to the password if the user chooses 
  if (options.upperCase) {
    for (i = 0; i < onlyUpperCase.length; i++) {
      passwordEntry.push(onlyUpperCase[i]);
    }
  }
    // a for loop to add lower case characters to the password if the user chooses 
  if (options.lowerCase) {
    for (i = 0; i < onlyLowerCase.length; i++) {
      passwordEntry.push(onlyLowerCase[i]);
    }
  }  
  // a for loop to add special characters to the password if the user chooses 
  if (options.specialChar) {
    for (i = 0; i < onlySpecialChar.length; i++) {
      passwordEntry.push(onlySpecialChar[i]);
    }
  }
  // a for loop to add numbers to the password if the user chooses 
  if (options.numeric) {
    for (i = 0; i < onlyNumeric.length; i++) {
      passwordEntry.push(onlyNumeric[i]);
    }
  }
var finalPassword = [];

// A for loop that chooses the random password combination based on what the user chose in the confirms
for (let i = 0; i < options.length; i++) {
  var randomPassword = Math.floor(Math.random() * passwordEntry.length);
  finalPassword[i] = passwordEntry[randomPassword]
}

console.log(finalPassword)
return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
