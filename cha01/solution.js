function findFirstRepeated(gifts) {
  let id = -1;
  const arr = [];
  for (const el of gifts) {
    if (arr.find((a) => a === el)) {
      id = el;
      break;
    } else {
      arr.push(el);
    }
  }
  return id;
}

/* ------------------------------- */

const giftIds = [2, 1, 3, 4, 5, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId);
