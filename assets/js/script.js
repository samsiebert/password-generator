// Assignment code here
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numbers = ("0123456789");
var specialChars = ("!#$%&()*+-_./:;<>=?@[]^{}|~");
var finalPassword = "";


  

var generatePassword = function() {

  // location.reload();

  var passwordLength = parseInt(prompt("How many characters long does your password need to be? Please input a number 8-128."));

  var needLower = 
    window.confirm("Select 'OK' if your password requires at least one lowercase letter. If not, select 'Cancel'.");
  var needUpper = 
    window.confirm("Select 'OK' if your password requires at least one uppercase letter. If not, select 'Cancel'."); 
  var needNumber = 
    window.confirm("Select 'OK' if your password requires at least one numeric character. If not, select 'Cancel'.");
  var needSpecial = 
    window.confirm("Select 'OK' if your password requires at least one special character. If not, select 'Cancel'.");

  if (needLower) { 
    finalPassword = finalPassword + lowerCase;
  }
  if (needUpper) {
    finalPassword = finalPassword + upperCase;
  }
  if (needNumber) {
    finalPassword = finalPassword + numbers;
  }
  if (needSpecial) {
    finalPassword = finalPassword + specialChars;
  }



  // for (i = 0; i < passwordLength; i++) {
  // // generate random lowecase letter
  // if (needLower) {
  //   const randomLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  //    finalPassword = finalPassword + randomLowerCase;
  // };
  // //generate random uppercase letter
  // if (needUpper) {
  //   const randomUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
  //   finalPassword = finalPassword + randomUpperCase;
  // };
  //  //generate random number
  // if (needNumber) {
  //   const randomNum = numbers[Math.floor(Math.random() * numbers.length)];
  //   finalPassword = finalPassword + randomNum;
  // };
  //  //generate random special character
  // if (needSpecial) {
  //   const randomSpec = specialChars[Math.floor(Math.random() * specialChars.length)];
  //   finalPassword = finalPassword + randomSpec;
  // };
  // if (finalPassword.length === passwordLength) {
  //   return finalPassword;
  // }
  // };
};

function writePassword() {

var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
