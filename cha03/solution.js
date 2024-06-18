function cyberReindeer(road, time) {
  let result = [road];
  let lChar = ".";

  for (let i = 1; i < time; i++) {
    if(i === 5) road = road.replaceAll("|", "*");
    const match = road.match(/S[\*\.]/g);
    if (match) {
        road = road.replace(match[0], `${lChar}S`);
        lChar = match[0][1];
    }
    result.push(road);
  }
  return result;
}

const road = "S..|...|..";
const time = 10; // units of time
const result = cyberReindeer(road, time);
console.log(result);
