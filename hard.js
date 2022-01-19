let tomHeight = 9;
let tomMass = 8;
let jerryHeight = 9;
let jerryMass = 8;

let bmiTom = tomMass/tomHeight ** 2;
let bmiJerry = jerryMass / (jerryHeight * jerryHeight);
console.log(bmiTom, jerryMass);

let higherBmi = jerryMass > bmiTom;
console.log(higherBmi);

console.log(`Is Jerry's BMI higher than Jerry's: ${higherBmi}.`)