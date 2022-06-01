// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // Function that we will pass in our given alphabet to check for duplicates.
    const _duplicateChecker = (alphabetString) => {
      //Keeping a record/variable of the alphabet split.
      let checkedAlphabet = alphabetString.split("");
      for (let i = 0; i < alphabetString.length; i++) {
        if (
          //We are filtering to see if the letter occurs more than once in the alphabet.
          checkedAlphabet.filter((letter) => letter === alphabetString[i])
            .length > 1
        ) {
          //The only use for this function is to return false when necassary, so we do not have an else statement or a condition for another possible return.
          return false;
        }
      }
    };
    // Function that handles our encoding, by passing in our values and data/
    const _encode = (input, normAlpha, alteredAlpha) => {
      let lowerInput = input.toLowerCase();
      let encodedResult = "";

      for (let i = 0; i < lowerInput.length; i++) {
        if (lowerInput[i] === " ") encodedResult += " "; // maintaining spaces
        else encodedResult += alteredAlpha[normAlpha.indexOf(lowerInput[i])];
      }
      return encodedResult;
    };
    // Function that handles our decoding, by passing in our values and data/
    const _decode = (input, normAlpha, alteredAlpha) => {
      let decodedResult = "";
      let lowerInput = input.toLowerCase();

      for (let i = 0; i < lowerInput.length; i++) {
        if (lowerInput[i] === " ") decodedResult += " "; // maintaining spaces
        else decodedResult += normAlpha[alteredAlpha.indexOf(lowerInput[i])];
      }
      return decodedResult;
    };
    // Setting our global actual alphabet to reference.
    const actualAlphabet = "abcdefghijklmnopqrstuvwxyz";
    // Opening if statements to early return false for conditions that are invalid, such as the absence of the alphabet, if the length is  not 26, or if there are duplicates.
    if (
      alphabet === undefined ||
      alphabet.length != 26 ||
      _duplicateChecker(alphabet) === false
    )
      return false;
    // This handles which function we enact, and then we pass in our values, and the function will take care of the algorithm and return.
    if (encode) {
      return _encode(input, actualAlphabet, alphabet);
    } else {
      return _decode(input, actualAlphabet, alphabet);
    }
  }

  return {
    substitution,
  };
})();
module.exports = { substitution: substitutionModule.substitution };
