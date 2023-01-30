// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function checkUniqueness(alphabet) {
    let checkArr = [];

    for (let i = 0; i < alphabet.length; i++) {
      if (checkArr.includes(alphabet[i])) return false;

      checkArr.push(alphabet[i]);
    }

    return true;
  }

  function createLookupTable(alphabet){
    let lookupTable = {}
    const startOfAlphabet = 97;

    for (let i = 0; i < alphabet.length; i++){
      const letter = alphabet[i];
      lookupTable[String.fromCharCode(startOfAlphabet + i)] = letter;
    }

    return lookupTable;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    if (!alphabet || alphabet.length != 26 || !checkUniqueness(alphabet))
      return false;

    const lookupTable = createLookupTable(alphabet);
    let message = [];


    for (let i = 0; i < input.length; i++){
      const currentLetter = input[i].toLocaleLowerCase();

      if(currentLetter === " ") 
        message.push(" ");
      else {
        if(encode) {
          message.push(lookupTable[currentLetter]);
        } else {
          const decodedLetter = Object.keys(lookupTable).find(
            (letter) => lookupTable[letter] === currentLetter
          );
          message.push(decodedLetter);
        }
      }
    }

    message = message.join("");

    return message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
