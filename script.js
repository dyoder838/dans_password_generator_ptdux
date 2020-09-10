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

// TODO: create the generatePassword function that returns the final password, all of my code should live inside this function

// TODO: create a prompt to ask pword length 8-128 - assign to a let

// TODO: create a confirm for lowercase - assign to a let

// TODO: create a confirm for uppercase - assign to a let

// TODO: create a confirm for numbers - assign to a let

// TODO: create a confirm for special - assign to a let

// TODO: after the prompts are done, the password needs to be generated

// TODO: create 5 arrays - one for each requirement

// TODO: create new let that holds chosen characters

// TODO: create a conditional situation that saves the user selection - write the users ticket - make it a let

// TODO: create randomizers 
        // can use math.floor(math.random()*10)
        // need a for loop that goes the length of the users length variable ( for(let i=0 ; 1<"charactor length prompt" ; i++ ){logic goes here})

// TODO: add validations to each prompt - at least one tye of character is selected, let user know if none have been selected

// TODO: add validation to password length
