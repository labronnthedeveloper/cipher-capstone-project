// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let result = "";
    if (shift === 0 || shift > 25 || shift < -25 || !shift) return false;
    let newShift = shift; // holding our shift in a variable so we can more freely customize it. 
    encode ? newShift : newShift *= -1 // this will inverse the given shift based on if we are encoding, or decoding.

    let message = input.toLowerCase() // setting our input to lowercase immediately, since uppercase letters will have different charCodes.

    for(let i = 0; i < message.length; i++) {
    let newMessage = message[i].charCodeAt() // storing a variable that will hold a reference to the charCode while looping at index.
    let numCode = (newMessage + newShift) // storing a variable that has the charCode + the shift that the user inputted.
    if(newMessage < 97 || newMessage > 122) { 
      // using the unaltered charcode, we are checking for characters outside of the 97-122 bounds, so that way we keep them as is. 
      result += String.fromCharCode(newMessage)
    } else if ((numCode) < 97) {
      numCode += 26 // this will increase our position to get our character back in the a-z alphabetical range where it should fall. 
      result += String.fromCharCode(numCode)
    } else if ((numCode) > 122) {
      numCode -= 26 // this will decrease our position to get our character back in the a-z alphabetical range where it should fall. 
      result += String.fromCharCode(numCode)
    } else if (numCode >= 97 && numCode <= 122){
      // we will keep all shifted values that are between 97-122 as they should not be problematic.
      result += String.fromCharCode(numCode)
    }
    } 
    return result
  }

  return {
    caesar,
  };
})();

console.log(caesarModule.caesar("Thoughtful", 3, true))

module.exports = { caesar: caesarModule.caesar };
