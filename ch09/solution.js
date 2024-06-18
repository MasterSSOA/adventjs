function adjustLights(lights) {
  let val = lights[0] === "🟢";
  let r1Math = 0;
  let r2Math = 0;

  lights.filter((el) => {
    if ((el === "🟢") === val) r1Math++;
    else r2Math++;
    val = !val;
  });

  return Math.min(r1Math, r2Math);
}

const n = adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
// //console.log(n);
const n1 = adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
// // console.log(n1);
const n2 = adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]);
// // console.log(n2);
const n3 = adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]);
// // console.log(n3);
const n4 = adjustLights(["🔴", "🔴", "🔴"]);
// console.log(n4);
//const n5 = adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"]);
