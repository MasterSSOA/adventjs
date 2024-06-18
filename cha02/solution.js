function decode(message) {
  let arr = [];
  let result = "";

  for (const char of message) {
    switch (char) {
      default:
        result += char;
        break;
      case "(":
        arr.push(result);
        result = "";
        break;
      case ")":
        result = arr.pop() + [...result].reverse().join("");
        break;
    }
  }
  return result !== "" ? result : arr.pop();
}

const a = decode("hola (odnum) (odnum) hola(.) sda(");
console.log(a); // hola mundo
