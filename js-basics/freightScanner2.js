// This function should take a single argument - an array of strings. Your scan function must loop through all the strings in this array, and examine each one using boolean logic.
//const numberInput = Number(process.argv[2]);

// If a string in the input array is equal to the value contraband, add the index of that item to an output array. When you have finished scanning the entire input array, return the output array, which should contain all the indexes of suspicious items in the array.

function scan() {

}

function scan(freightItems) {
    let contrabandIndexes = [];
    // for each turn of the loop scan the array and find the word contraband
    // if word contraband is detected then output the position of it it the log 
    //Replace this comment with your code.
    //Your code needs to:
    //- Loop through every item in the freightItems array
    freightItems.forEach(function (element, index) {

        // - if the item is equal to "contraband", add the current index of the item to contrabandIndexes - hint: use the array "push()" method
        if (element == "contraband") {

            contrabandIndexes.push(index);
        }

    })

    return contrabandIndexes;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]