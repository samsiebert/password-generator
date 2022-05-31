// Assignment code here
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numbers = ("0123456789");
var specialChars = ("!#$%&()*+-_./:;<>=?@[]^{}|~");
var finalPassword = "";
var usableChars = "";


  

var generatePassword = function() {
  var passwordLength = "";
  var needLower = "";
  var needUpper = "";
  var needNumber = "";
  var needSpecial = "";
  var finalPassword = "";
  usableChars = "";

  //get required password length
  passwordLength = parseInt(prompt("How many characters long does your password need to be? Please input a number 8-128."));

  //get password criteria
  needLower = 
    window.confirm("Select 'OK' if your password requires at least one lowercase letter. If not, select 'Cancel'.");
  needUpper = 
    window.confirm("Select 'OK' if your password requires at least one uppercase letter. If not, select 'Cancel'."); 
  needNumber = 
    window.confirm("Select 'OK' if your password requires at least one numeric character. If not, select 'Cancel'.");
  needSpecial = 
    window.confirm("Select 'OK' if your password requires at least one special character. If not, select 'Cancel'.");


  //based on entered password criteria, put elligible chracters in a string of usable characters
  if (needLower) { 
    usableChars = usableChars + lowerCase;
  }
  if (needUpper) {
    usableChars = usableChars + upperCase;
  }
  if (needNumber) {
    usableChars = usableChars + numbers;
  }
  if (needSpecial) {
    usableChars = usableChars + specialChars;
  }

//for entered password length, generate random chracter from usable characters
for (i=0; i < passwordLength; i++) {

  var randomChar = usableChars[Math.floor(Math.random() * usableChars.length)];
  finalPassword = finalPassword += randomChar;
}
return finalPassword;

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
