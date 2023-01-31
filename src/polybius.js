// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function isCodeOdd(code){
    if (!code.includes(" ")) {
      if (code.length % 2 != 0) return true;
    }

    let codeNoSpaces = code.split(" ");
    codeNoSpaces = codeNoSpaces.join("");

    if (codeNoSpaces.length % 2 != 0) return true;
    else
      return false;
  }

  function createLookup() {
    const startOfAlphabet = 97;
    let codes = [];
    let lookupTable = {};
    
    //create a code for every letter of the alphabet
    for (let i = 0; i < 5; i++) {
      const codeValue1 = i + 1;

      for (let j = 0; j < 5; j++) {
        const codeValue2 = j + 1;
        const code = codeValue2.toString() + codeValue1.toString();
        codes.push(code);
      }
    }

    //create a key that is a letter of the alphabet and give it a value from the codes array
    for (let i = 0; i < 25; i++) {
      if (i < 8)
        lookupTable[String.fromCharCode(startOfAlphabet + i)] = codes[i];

      if (i === 8) lookupTable["i/j"] = codes[i];

      if (i > 8)
        lookupTable[String.fromCharCode(startOfAlphabet + i + 1)] = codes[i];
    }

    return lookupTable;
  }

  function polybius(input, encode = true) {
    // your solution code here

    if (!encode) {
      if (isCodeOdd(input)) return false;
    }

  
    let lookupTable = createLookup();
    let message = [];
     

    if (encode) {
      for (let i = 0; i < input.length; i++) {
        const letter = input[i];

        if (letter === " ") message += " ";
        else if (letter === "i" || letter === "j")
          message += lookupTable["i/j"];
        else message += lookupTable[letter];
      }
    } else {
  
      let index = 0;

      for (const number of input) {
        if (input[index] === " ") {
          message += " ";
          index++;
        } else {
          const code = input[index] + input[index + 1];
          message += Object.keys(lookupTable).find(
            (letter) => lookupTable[letter] === code
          );
          index += 2;
        }

        if (index >= input.length) break;
      }
    }

    return message;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
