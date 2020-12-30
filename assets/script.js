// Assignment Code

// var generatePasswordButton = document.getElementById("generate");

// global variables

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
if (notNumber(length) === true) {
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

if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecialChar) {
  alert("Your password must contain at least one special character, numbers, upper case letters or lower case letters");
  return;
}

var questionOptions = {
  length: length,
  upperCase: includeUpperCase,
  lowerCase: includeLowerCase,
  specialChar: includeSpecialChar,
  numeric: includeNumeric
}
return questionOptions;
}

function generatePassword() {
  var options = generateOptions();
  console.log(options)

  var passwordEntry = [];
  console.log(passwordEntry)

  if (options.upperCase) {
    for (i = 0; i < onlyUpperCase.length; i++) {
      passwordEntry.push(onlyUpperCase[i]);
    }
  }
  if (options.lowerCase) {
    for (i = 0; i < onlyLowerCase.length; i++) {
      passwordEntry.push(onlyLowerCase[i]);
    }
  }
  if (options.specialChar) {
    for (i = 0; i < onlySpecialChar.length; i++) {
      passwordEntry.push(onlySpecialChar[i]);
    }
  }
  if (options.numeric) {
    for (i = 0; i < onlyNumeric.length; i++) {
      passwordEntry.push(onlyNumeric[i]);
    }
  }
var finalPassword = "";

for (let i = 0; i < options.length; i++) {
  var randomPicker = Math.floor(Math.random() * passwordEntry.length);
  finalPassword += passwordEntry[randomPicker]
}

console.log(finalPassword)

document.getElementById("password").value = finalPassword

}

// function createPassword() {
//   var options = getPasswordCriteria();
//   console.log(options);
// }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
document.getElementsById("generate").addEventListener("click", function(){
  document.createPassword();
});

generateBtn.addEventListener("click", writePassword());
