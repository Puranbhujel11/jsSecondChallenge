let tomHeight = 9;
let tomMass = 8;
let jerryHeight = 10;
let jerryMass = 45;

let tomBMI = tomMass / tomHeight ** 2;
let jerryBMI = jerryMass / ( jerryHeight * jerryHeight);
console.log(tomBMI, jerryBMI);


let tomjerryBMI = tomBMI > jerryBMI
if (tomjerryBMI) {
    console.log("Tom has higher BMI then Jerry");
} 
else{
    console.log("Jerry has higher BMI than Tom");
}
