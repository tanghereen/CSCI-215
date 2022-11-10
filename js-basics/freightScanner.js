// This function should take a single argument - an array of strings. Your scan function must loop through all the strings in this array, and examine each one using boolean logic.
//const freightItems = Number(process.argv[2]);
// If a string in the array is equal to the value contraband, then you should increment a number which would represent the number of times you have found contraband. Once you have looped through the entire array, return the number of times you found the string contraband within the array.


function scan(freightItems) {
    let contrabandCount = 0;
    //Replace this comment with your code.

    //Your code needs to:
    //- Loop through every item in the freightItems array
    freightItems.forEach(function (element) {


     // - if the item is equal to "contraband", increase contrabandCount by one
        if (element == 'contraband') {
            contrabandCount++
        }
    })
    return contrabandCount;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
//const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
//console.log('Number of "contraband": ' + numItems); // should be 2
