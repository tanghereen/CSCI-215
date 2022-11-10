const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

// Write your if statement below here!
if (treeLifeStatus == 0) { console.log('alive'); }
if (treeLifeStatus == 1) { console.log('flowering'); }
if (treeLifeStatus == 2) { console.log('shedding'); }
if (treeLifeStatus == 3) { console.log('other'); }