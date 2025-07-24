let numbers = [5, 12, 25, 8, 19, 30];
let userInput = prompt();
let num = Number(userInput);
let found = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > num) {
    console.log("numder less than " + num + "for " + numbers[i]);
    found = true;
    break; 
  }
}

if (!found) {
  console.log("not found");
}