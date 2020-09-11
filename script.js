//DOM Objects
// we have 2 items in the html that we are concerned with: the button, and the text area
// this is the variable for button
const generateBtn = document.querySelector("#generate");
// this is the variable for textarea
const passwordText = document.querySelector("#password");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbols,

}
// Write password to the #password input
// function writePassword() {
//     var password = generatePassword()

// passwordText is where the password is out put in html


//     passwordText.value = password;

// }

// TODO: create the generatePassword function that returns the final password, all of my code should live inside this function

// 1) click the button 
// Add event listener to generate button
generateBtn.addEventListener("click", () => {
 //2) user is prompted for password requirements   
    // create a prompt to ask pword length 8-128 - assign to a let
    const passwordLength = prompt("How long would you like your password to be? type a number between 8 and 128 to set character length")
    // create a confirm for lowercase - assign to a let
    const passwordLower = confirm("Does your password need to have lowercase letters? ok= yes, cancel= no")
    // create a confirm for uppercase - assign to a let
    const passwordUpper = confirm("does your password need to contain uppercase letters? ok= yes, cancel= no")
    // create a confirm for numbers - assign to a let
    const passwordNumbers = confirm("does your password need to contain numbers? ok= yes, cancel= no")
    // create a confirm for special - assign to a let
    const passwordCharacter = confirm("does your password need to contain special characters? ( !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ) ok= yes, cancel= no")
    // TODO: after the prompts are done, the password needs to be generated

    // Final results from user
    console.log(passwordLower, passwordUpper, passwordNumbers, passwordCharacter, passwordLength)
 
//3 user data is stored 

    // TODO: create new variable that holds chosen characters
    // this holds the users input for each confirm - 
    passwordText.innerText = generatePassword(
        passwordLower, 
        passwordUpper, 
        passwordNumbers, 
        passwordCharacter, 
        passwordLength
        );
}); 
    
////////////////end of button function///////////////////
//4 user data gets turned into a password

// this function generates the password using our 5 variables
function generatePassword(lower, upper, number, symbol, length) {
    
//TODO: initialize password variable
    let generatedPassword = "";
    
    // user data gets turned into an array so the computer can translate to index numbers.
    // create a variable for the user input.
    const typesCount = lower + upper + number + symbol;

    // use this to check for functionality, this should count how many times true was logged
    console.log("typesCount: ", typesCount);

//TODO: filter out false 
    // turn the variable into a useable array, .filter item, gets rid of the false items... the things the user said no to 
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
    (
        item => Object.values(item)[0]
    );
        
        //make sure the array is in the correct order - add curly brackets so console displays all of the object information
        console.log("typesArr; ", typesArr);

        // this is what happens when the user makes no selections
        if(typesCount === 0) {
            return "";
        };
 
//TODO: for loop to pick from the filtered array at random until the length variable has bees reached - calls from the 5 random generators
        // this is the for loop that randomizes the array, represented here by the variable typesCount, note. length is used here as our 5th variable 
        //i+= typesCount increments by the filtered array items i = 1 because of the array, if i=0 you would get an extra item
        for (let i = 1; i< length; i+= typesCount) {
            typesArr.forEach(type => {
                //funcName holds the info from 4 of the 5 arrays upper, lower, number, symbol.
                const funcName = Object.keys(type)[0];

                // you result should be functions with the names lower, upper, number, symbol -- in the amount of characters in the length variable
                console.log("funcName: ", funcName);

                // taking the empty key - generatedPassword-; is a let variable at the top of the parent function that = "", and adding it to the function randomFunc - this assigns the result to the variable randomFunc
                generatedPassword += randomFunc[funcName]();
            });
        }
    }


 //TODO: add final pw to the pw variable and return

        
    //function to hold the generators results
       
     // create 5 arrays - one for each requirement
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


    

    // TODO: create array to hold final results

    // TODO: create a conditional situation that saves the user selection - write the users ticket - make it a let

    // TODO: create randomizers 
        // can use math.floor(math.random()*10)
        // need a for loop that goes the length of the users length variable ( for(let i=0 ; 1<"charactor length prompt" ; i++ ){logic goes here})

    // TODO: add validations to each prompt - at least one tye of character is selected, let user know if none have been selected

    // TODO: add validation to password length



