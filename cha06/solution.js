function maxDistance(movements) {
  const rght = (movements.match(/>/g) ?? []).length;
  const left = (movements.match(/</g) ?? []).length;
  return movements.length - Math.min(rght, left) * 2;
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
