// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const startOfAlphabet = 97;
    let lookupTable = {};
    let codes = [];
    let message = [];

    for (let i = 0; i < 5; i++) {
      const codeValue1 = i + 1;

      for (let j = 0; j < 5; j++) {
        const codeValue2 = j + 1;
        const code = codeValue2.toString() + codeValue1.toString();
        codes.push(code);
      }
    }

    for (let i = 0; i < 25; i++) {
      if (i < 8)
        lookupTable[String.fromCharCode(startOfAlphabet + i)] = codes[i];

      if (i === 8) lookupTable["i/j"] = codes[i];

      if (i > 8) {
        if (i === 9)
          lookupTable[String.fromCharCode(startOfAlphabet + i + 1)] = codes[i];
        else
          lookupTable[String.fromCharCode(startOfAlphabet + i + 1)] = codes[i];
      }
    }

    for (let i = 0; i < input.length; i++){
      
      if (encode){
        const letter = input[i];
        
        if(letter === " ")
          message += " ";
        else if(letter === "i" || letter === "j")
          message += lookupTable["i/j"];
        else
          message += lookupTable[letter];
      }
    }
    

    return message;

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
