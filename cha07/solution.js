function drawGift(size, symbol) {
    const mSize = size * 2 - 1;
    const fSize = size - 2;
    const gift = [];
  
    const dLine = (nLine) => {
      let rtn = "#";
  
      if (nLine === 1) {
        rtn += "#".repeat(fSize);
      } else if (nLine === size) {
        rtn += `${"#".repeat(fSize + 1)}${symbol.repeat(fSize)}`;
      } else {
        rtn += `${symbol.repeat(fSize)}#${symbol.repeat(nLine - 2)}`;
      }
      rtn += "#";
      return `${rtn}`;
    };
  
    if (size === 1) {
      gift.push("#\n");
    } else {
      let bttm = [];
      for (let i = 1; i < size; i++) {
        gift.push(`${dLine(i).padStart(mSize, " ")}\n`);
        bttm.push(`${dLine(i)}\n`);
      }
      const mLine = `${dLine(size)}\n`;
      bttm = [...bttm].reverse();
      gift.push(mLine, ...bttm);
    }
  
    return gift.join("");
  }
  

let gift = drawGift(4, ".");
console.log(gift);
