//DOM Objects
// we have 2 items in the html that we are concerned with: the button, and the text area
// this is the variable for button
const generateBtn = document.querySelector("#generate");

// this is the variable for textarea
const passwordText = document.querySelector("#password");

///////  note: this is not the original order this app was coded in, I felt it important to place it here for conceptual understanding.  ///////////
// This is a practice in "Inception", we are randomizing up to 4 parameters and then randomizing those into a user defined length of characters. 
// "randomFunc" holds 4 functions; our first layer of "Inception", those functions are each associated with a named key.
// "funcName" (defined later) randomizes the selected keys; our second layer of "Inception". 
// "funcName" tells randomFunc how many times to run each of its functions (the user selected password length) in a random order.
// each time a function from randomFunc fires, its value is stored in generatedPassword (defined later).
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbols,
}

///////////////////////////////////////////////////////// functions to generate parameters /////////////////////////////////////////////////

// create 5 functions that return parameters - one for each password parameter

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
    const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbols());

///////////////////////////////////////////////////////////// Collect user data /////////////////////////////////////////////////////////

 
// Add event listener to generate button
generateBtn.addEventListener("click", () => {

    // user is prompted for password requirements  - get user data 

    // create a prompt to ask password length 8-128 - assign to a let
    const passwordLength = prompt("How long would you like your password to be? type a number between 8 and 128 to set character length");
    console.log("if / else from original user prompt", passwordLength)
    //add validation to password length
    if (passwordLength === null) {
        alert("See you next time.")
        return;
    }
    if (passwordLength >= 8) {
        alert(`password length will be" ${passwordLength} "characters long.`);
    }
    if (passwordLength <= 7) {
        alert("Your password is too short, make it between 8 - 128 characters");
        return;
    }

    // create a confirm for lowercase - assign to a const
    const passwordLower = confirm("Does your password need to have lowercase letters? ok= yes, cancel= no");
    // create a confirm for uppercase - assign to a const
    const passwordUpper = confirm("does your password need to contain uppercase letters? ok= yes, cancel= no");
    // create a confirm for numbers - assign to a const
    const passwordNumbers = confirm("does your password need to contain numbers? ok= yes, cancel= no");
    // create a confirm for special - assign to a const
    const passwordCharacter = confirm("does your password need to contain special characters? ( !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ) ok= yes, cancel= no");
    // after the prompts are done, the password needs to be generated

    // Final results from user
    console.log("user data input:", passwordLower, passwordUpper, passwordNumbers, passwordCharacter, passwordLength);

    // user data is stored in the constant variable from line 7, that also displays the text in the HTML
    // create a conditional situation that saves the user selection - in this case, user input is stored as true or false
    // here, we kill two birds with one stone, we store the selections in a function that when called will display the
    // password in the textarea. 
    passwordText.innerText = generatePassword(
        passwordLower,
        passwordUpper,
        passwordNumbers,
        passwordCharacter,
        passwordLength
    );
});


///////////////////////////////////////// User data gets turned into a password ///////////////////////////////////////////

// define the above function "generatePassword"
// this function generates the password using our 5 variable user inputs 
// rename the parameters to the keys from the variable "randomFunc" on line 15 
function generatePassword(lower, upper, number, symbol, length) {

    // initialize password variable - this will be the 2nd to final password. 
    let generatedPassword = "";

    // user data gets turned into an array to narrow down which randomizers to use.

    // an array of objects is needed, that has keys and values associated with them - key being lower, upper ect..
    // and the value being true or false - what the user selected for each parameter

    // Variables the user answered false to need to be removed
    // Filter function is used to remove objects that contain values of 0 - the value of false
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
        (
            item => Object.values(item)[0]
        );

    // What happens if a user answers false to all variables?

    // Create a variable for the user's original inputs - the variable will show how many were marked as true.
    // If the variable reads 0 - the user made no selections.
    const typesCount = lower + upper + number + symbol;

    if (typesCount === 0) {
        alert("you made no password requirement selections, press ok and try again; making selections this time")
        return "";
    };

   
    // use a for loop to pick from the filtered array at random until the length variable has been reached - calls from the 4 random generators
    // this is the for loop that randomizes the array, represented here by the variable typesCount, note. length is used here as our 5th parameter from the user 
    // i+= typesCount increments by the filtered array items 
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            // funcName now holds randomized keys in the amount that the user specified - keys are referred back to line 15 randomFunc, they connect to the randomizing functions on line 27
            const funcName = Object.keys(type)[0];

            // The result should be functions with the names lower, upper, number, symbol -- in the amount of characters in the length variable
            console.log("funcName: ", funcName);

            // randomFunc was created as a constant on line 15 that connects the key properties to the randomizers starting on line 27
            // so, here the keys in funcName are associated back with randomFunc, and added to the variable generatedPassword from line 110 (which = "")
            // meaning: randomFunc holds 4 functions, funcName tells randomFunc how many times to run each of its functions (that the user selected) at random.
            // each time a function from randomFunc fires, its value is stored in generatedPassword. 
            generatedPassword += randomFunc[funcName]();
        });
    }
    // filter generatedPassword for errors
    // this keeps the objects from being added to the length variable
    console.log(generatedPassword.slice(0, length));
    // create the finalPassword from the filtered generatedPassword
    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword
}

















