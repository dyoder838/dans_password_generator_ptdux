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

// this is just turning off these prompts
function meah() {
    // TODO: create a prompt to ask pword length 8-128 - assign to a let
    let passwordLength = prompt("How long would you like your password to be? type a number between 8 and 128 to set character length")
    // TODO: create a confirm for lowercase - assign to a let
    let passwordLower = confirm("Does your password need to have lowercase letters? ok= yes, cancel= no")
    // TODO: create a confirm for uppercase - assign to a let
    let passwordUpper = confirm("does your password need to contain uppercase letters? ok= yes, cancel= no")
    // TODO: create a confirm for numbers - assign to a let
    let passwordNumbers = confirm("does your password need to contain numbers? ok= yes, cancel= no")
    // TODO: create a confirm for special - assign to a let
    let passwordCharacter = confirm("does your password need to contain special characters? ( !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ) ok= yes, cancel= no")
    // TODO: after the prompts are done, the password needs to be generated
}
// TODO: create 5 arrays - one for each requirement
        
    //function to hold the generators
        const randomFunc = {
            lower: getRandomLower,
            upper: getRandomUpper,
            number: getRandomNumber,
            symbol: getRandomSymbols,

        }
        // lowercase generator function... (character map) http://net-comber.com/charset.html 26 is for letters in the alphabet , 97 is the reference to the index of the character code(what the index number of lowercase letters are - this creates a sub section of the existing array)** this list starts at spot 97, and proceeds at random up 26 index numbers(the amount of letters in the alphabet)
        function getRandomLower() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        console.log(getRandomLower());

        // uppercase generator - same as above
        function getRandomUpper() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        }
        console.log(getRandomUpper());

        // numbers generator
        function getRandomNumber() {
            return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        }
        console.log(getRandomNumber());

        // characters generator
        function getRandomSymbols() {
            const symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
            return symbols[Math.floor(Math.random() * symbols.length)];
        }
    console.log(getRandomSymbols());


    // TODO: create new let that holds chosen characters

    // TODO: create array to hold final results

    // TODO: create a conditional situation that saves the user selection - write the users ticket - make it a let

    // TODO: create randomizers 
        // can use math.floor(math.random()*10)
        // need a for loop that goes the length of the users length variable ( for(let i=0 ; 1<"charactor length prompt" ; i++ ){logic goes here})

    // TODO: add validations to each prompt - at least one tye of character is selected, let user know if none have been selected

    // TODO: add validation to password length



