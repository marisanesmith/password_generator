// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var passwordLength = prompt("How long do you want your password?");
if (passwordLength < 8) {
  alert("Choose a number greater than 8");
}

if (passwordLength > 128) {
  alert("Choose a number less than 128");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
