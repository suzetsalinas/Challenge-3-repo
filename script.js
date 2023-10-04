// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// *****************************************************************************************************************

// Write password to the #password input
function writePassword() {


  // USER INPUT PASSWORD LENGTH, LOWER CASE LETTERS, UPPER CASE LETTERS, SPECIAL CHARACTERS, NUMERICAL CHARACTERS ------

  var charLength = window.prompt("Length of password?");
  // turned charLength string into number in order to use in for-loop, eg i < charLenght (syntax needs to be researched)
  Number(charLength) ;

  while (charLength < 8 || charLength > 128) {
     charLength = window.prompt("Please enter a password length between 8 and 128.")
    }

  
  var alphaChar = window.confirm("Would you like to include lowercase letters?");

  var upperAlphaChar = window.confirm("Would you like to include uppercase letters?");

  var specChar = window.confirm("Would you like to include special characters?");

  var numChar = window.confirm("Would you like to include numbers?");
    
    
  while (!alphaChar && !upperAlphaChar && !specChar && !numChar) {
    window.alert("You must select at least one of the following criteria.");
    alphaChar = window.confirm("Would you like to include lowercase letters?");

    upperAlphaChar = window.confirm("Would you like to include uppercase letters?");

    specChar = window.confirm("Would you like to include special characters?");

    numChar = window.confirm("Would you like to include numbers?");
  }

    // restructure four prompts together and if checks together, set up a for loop before the if's so that
    // u can meet password length requirement

  // FOR LOOP BASED OFF OF PASSWORD LENGTH -----------------------
      // for (var i = 0, i < Number:charLength, i++ ) { }


  

  // IF STATEMENTS ----------need to add append property------------------------------------------------------------
  // declare constants as an array of each character type
  const alpha = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const upperAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const special = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', '_', '`', '{', '}', '|', '~', ']' ]
  const numerical = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  
  // establishing array so that true booleans in each if statement will be appended to the array
  buildPass = [];

  // making loop that includes if statements
  while (buildPass.length < charLength ) {

   // still have to randomize/pick one character from each if. have to set character type variables so that a random character can be picked from each type
  if (alphaChar) {
    // pick random character from character type and append
    char1 = alpha[(Math.floor(Math.random() * alpha.length))];
    console.log(char1);
    buildPass.push(char1);
    console.log(buildPass);
    } 

  if (upperAlphaChar) {
    char2 = upperAlpha[(Math.floor(Math.random() * upperAlpha.length))];
    console.log(char2);
    buildPass.push(char2);
    console.log(buildPass);
    } 

  if (specChar) {
    char3 = special[(Math.floor(Math.random() * special.length))];
    console.log(char2);
    buildPass.push(char2);
    console.log(buildPass);
    } 

  if (numChar) {
      buildPass.push(numerical[(Math.floor(Math.random() * numerical.length))]);
      console.log(buildPass);
    } 

  }
  // end while loop 
  




// end function with :
  
  var passwordText = document.querySelector("#password");

  passwordText.value = buildPass.join('');
return passwordText;
}

//*************************************************************************************************


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









// my brainstorm

// while (password.length < charLength.length ) {
// generatePassword ()
// }

// ^ provided that if statements will be in the generatePassword function in order for while loop to access them