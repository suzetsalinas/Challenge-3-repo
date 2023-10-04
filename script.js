// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // gathering user input for password length, lower case letters, upper case letters, special characters, and numbers

  var charLength = window.prompt("Length of password?");

  Number(charLength) ;

  while (charLength < 8 || charLength > 128) {
     charLength = window.prompt("Please enter a password length between 8 and 128.")
    }
  // storing user input into variables
  var alphaChar = window.confirm("Would you like to include lowercase letters?");
  var upperAlphaChar = window.confirm("Would you like to include uppercase letters?");
  var specChar = window.confirm("Would you like to include special characters?");
  var numChar = window.confirm("Would you like to include numbers?");

  // validating user input to ensure at least one criteria was selected
  while (!alphaChar && !upperAlphaChar && !specChar && !numChar) {
    window.alert("You must select at least one of the following criteria.");
    alphaChar = window.confirm("Would you like to include lowercase letters?");
    upperAlphaChar = window.confirm("Would you like to include uppercase letters?");
    specChar = window.confirm("Would you like to include special characters?");
    numChar = window.confirm("Would you like to include numbers?");
  }

  // character type arrays
  const alpha = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const upperAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const special = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', '_', '`', '{', '}', '|', '~', ']' ]
  const numerical = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  
  // array used to build new password; true bool If statements are appended to this array
  buildPass = [];

  // while-loop that includes If statements
  while (buildPass.length < charLength ) {

    if (alphaChar) {
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
      console.log(char3);
      buildPass.push(char3);
      console.log(buildPass);
      } 

    if (numChar) {
      char4 = numerical[(Math.floor(Math.random() * numerical.length))];
      console.log(char4);
      buildPass.push(char4);
      console.log(buildPass);
    } 
  }
  
  var passwordText = document.querySelector("#password");

  passwordText.value = buildPass.join('');
return passwordText;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
