// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function checkIfLetter(char) {
    return char > 96 && char < 123 ? true : false;
  }

  function shiftChar(charValue, shiftValue, add = true){
    const startOfAlphabet = 97;
    const endOfAlphabet = 122;

    add ? charValue += shiftValue : charValue -= shiftValue;
    
    if (charValue > endOfAlphabet )
      charValue = charValue - 26; 
    else if(charValue < startOfAlphabet )
      charValue = charValue + 26
    
    return charValue;
  }

  function caesar(input, shift, encode = true) {
    // your solution code here

    if(!shift || shift === 0 || shift < -25 || shift > 25){
      console.log(`error bad input`)
      return false;
    }

    let message = [];

    //go through each letter and add/subtract the value of shift
    for (let i = 0; i < input.length; i++) {
      //find the char code of the letter
      let charCode = input.toLowerCase().charCodeAt(i);
      
      //add or subtract value from char code value

      if (checkIfLetter(charCode)) {
        charCode = shiftChar(charCode, shift, encode)
      }
      //place a new char in the array
      message.push(String.fromCharCode(charCode));
    }

    message = message.join("");

    console.log(`****input was: ${input} encoding:${encode} with shift value: ${ shift} gave: ${message}****`)

    return message;
  }


  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
