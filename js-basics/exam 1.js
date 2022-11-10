let letterArray = prompt("Enter value:").split(",");
const aVals = [];
const bVals = [];
for (let i=0; i<letterArray.length; i++) {
    if (letterArray[i].toLowerCase() === 'a') {
        aVals.push(letterArray[i]);
    } else if (letterArray[i].toLowerCase() === 'b') {
        bVals.push(letterArray[i]);
    }
}