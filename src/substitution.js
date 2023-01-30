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

  function createLookupTable(alphabet, encode) {
    let lookupTable = {};
    const startOfAlphabet = 97;

    //if encode create a look up where regular alphabet is keys and given alphabet is values
    if (encode) {
      for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i];
        lookupTable[String.fromCharCode(startOfAlphabet + i)] = letter;
      }
    }
    //if !encode create a look up where given alphabet is keys and regular alphabet is values
    else {
      for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i];
        lookupTable[letter] = String.fromCharCode(startOfAlphabet + i);
      }
    }
    return lookupTable;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    if (!alphabet || alphabet.length != 26 || !checkUniqueness(alphabet))
      return false;

    const lookupTable = createLookupTable(alphabet, encode);
    let message = [];

    for (let i = 0; i < input.length; i++) {
      const currentLetter = input[i].toLocaleLowerCase();

      currentLetter === " "
        ? message.push(" ")
        : message.push(lookupTable[currentLetter]);
    }

    message = message.join("");

    return message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
