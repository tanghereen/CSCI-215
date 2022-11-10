const firstValue = process.argv[2];
const secondValue = process.argv[3];
const firstValueLower = firstValue.toLowerCase();
const secondValueLower = secondValue.toLowerCase();

if (secondValueLower > firstValueLower) { console.log(-1); }
else if (firstValueLower == secondValueLower) { console.log(0); }
else if (firstValueLower > secondValueLower) { console.log(1); }