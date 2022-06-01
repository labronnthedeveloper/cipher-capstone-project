// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    // Grid object array that represents the rows in the Polybius Table. -- Below
    const rowObject = {
      1: ["A", "B", "C", "D", "E"],
      2: ["F", "G", "H", "I/J", "K"],
      3: ["L", "M", "N", "O", "P"],
      4: ["Q", "R", "S", "T", "U"],
      5: ["V", "W", "X", "Y", "Z"],
    };
    // Grid object array that represents the columns in the Polybius Table. -- Below
    const columnObject = {
      1: ["A", "F", "L", "Q", "V"],
      2: ["B", "G", "M", "R", "W"],
      3: ["C", "H", "N", "S", "X"],
      4: ["D", "I/J", "O", "T", "Y"],
      5: ["E", "K", "P", "U", "Z"],
    };
    // Conversion of the inputted string, to the corresponding numbers. -- Below
    const polybiusTable = (strings) => {
      let aChar = strings.replace(/a/g, "11");
      let bChar = aChar.replace(/b/g, "21");
      let cChar = bChar.split("c").join("31");
      let dChar = cChar.split("d").join("41");
      let eChar = dChar.split("e").join("51");
      let fChar = eChar.split("f").join("12");
      let gChar = fChar.split("g").join("22");
      let hChar = gChar.split("h").join("32");
      let iChar = hChar.split("i").join("42");
      let jChar = iChar.split("j").join("42");
      let kChar = jChar.split("k").join("52");
      let lChar = kChar.split("l").join("13");
      let mChar = lChar.split("m").join("23");
      let nChar = mChar.split("n").join("33");
      let oChar = nChar.split("o").join("43");
      let pChar = oChar.split("p").join("53");
      let qChar = pChar.split("q").join("14");
      let rChar = qChar.split("r").join("24");
      let sChar = rChar.split("s").join("34");
      let tChar = sChar.split("t").join("44");
      let uChar = tChar.split("u").join("54");
      let vChar = uChar.split("v").join("15");
      let wChar = vChar.split("w").join("25");
      let xChar = wChar.split("x").join("35");
      let yChar = xChar.split("y").join("45");
      let zChar = yChar.split("z").join("55");

      return zChar;
    };
    // Ensures that spaces are not counted in length of input, especially for when determing if it's odd lengthed.
    const ignoreSpacing = (input) => {
      let myString = input;
      let remText = myString.replace(/ /g, "");
      let length = remText.length;

      let remainderVal = length % 2;
      return remainderVal;
    };

    // Sets our input to lowercase and represents what we will work form as opposed to the input directly.
    const lower = input.toLowerCase();

    if (encode) {
      return polybiusTable(lower); //calling our polybiusTable conversion function with our lowercased input.
    } else {
      if (ignoreSpacing(lower) === 1) return false; // calling our ignoreSpacing to check our remainder (checking even or odd), returning false if odd.
      let result = ""; // Holding our final string in a result variable.
      for (let i = 0; i < input.length; i += 2) {
        // looping through our input, and incrementing by 2, since each pair of numbers represents a letter.
        if (input[i] === " ") {
          result += " "; // preserves our spaces, we are joining a space with our result whenever we encounter one before we make the changes in our else.
          i--;
        } else if (`${input[i]}${input[i + 1]}` === "42") {
          result += "(i/j)"; //hard-coding what we should join our string with (i/j)
        } else {
          let numValue = columnObject[input[i]]; //Using our index searching for value in columnobject
          let numValue2 = rowObject[input[i + 1]]; // Using our index searching for value in columnobject

          let foundVal = numValue.find((num) => numValue2.includes(num)); // using find to hold our num value, and check if it's included in our secondary value. (numValue2)
          result += foundVal; // Join the findings.
        }
      }
      return result.toLowerCase(); // takes the result to lowercase at the end while returned. 
    }
  }

  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };
