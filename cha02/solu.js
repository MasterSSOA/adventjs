function findNaughtyStep(original, modified) {
    if (original === modified) return "";
    else {
      let mArr = original.split("");
      let sArr = modified.split("");
      let letter = "";
  
      if (sArr.length > mArr.length) {
        mArr = sArr;
        sArr = original.split("");
      }
  
      for (let i = 0; i < mArr.length; i++) {
        if (mArr[i] !== sArr[i]) {
          letter = mArr[i];
          break;
        }
      }
  
      return letter;
    }
  }

const original = 'abcd'
const modified = 'abcde'
let el = findNaughtyStep(original, modified);
console.log(el);
