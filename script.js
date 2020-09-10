// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TODO: create the generate password function

// TODO: create a prompt to ask pword length 8-128 - assign to a let

// TODO: create a confirm for lowercase - assign to a let

// TODO: create a confirm for uppercase - assign to a let

// TODO: create a confirm for numbers - assign to a let

// TODO: create a confirm for special - assign to a let
