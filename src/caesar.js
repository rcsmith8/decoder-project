// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
   function toUnicode(array) {
    return array.map((character) => {
      const unicode = character.toLowerCase().charCodeAt();
      return unicode >= 97 && unicode <= 122 ? unicode : character;
    });
  }
  
  
  // you can add any code you want within this function scope
/* 1. Convert alphabet to numeric values for shifting
2. Make sure the only characters susceptible to shifting are a-z (lowercase)
3. Make sure that if the shift sends the letter past z (or a) that it loops to the other side of the alphabet
4. Make sure that the function returns the message as encoded or decoded depending on the state of encode (True/false)
*/
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift < -25 || shift > 25 || !shift) {
      return false;
  }
 if (encode === false) {
      shift = shift * -1;
    }
    
  let inputArray = input.split("");
    let inputNumbers = toUnicode(inputArray);
    
     let shiftedNumbers = inputNumbers.map((number) => {
      return typeof number === "number" ? number + shift : number;
    });
    
     let loopCorrectedNumbers = shiftedNumbers.map((number) => {
      if (typeof number === "number") {
        if (number < 97) {
          return number + 26;
        }
        if (number > 122) {
          return number - 26;
        }
      }
      return number;
    });
    
     let outputArray = loopCorrectedNumbers.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return outputArray.join("");
  }

    
  return {
    caesar,
  };
})();
 module.exports = { caesar: caesarModule.caesar };
