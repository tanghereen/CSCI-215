// specifically, there is a function that takes an array of strings as an argument, and returns a new string which is the result of sticking the first and last items of the array together.

function addFirstToLast(inputArray) {
    let firstAndLast = '';

    // Only execute this code if the array has items in it
    if (inputArray.length > 0) {
        // Change the line below! What should it be?
        firstAndLast = inputArray[0] + inputArray.pop();
    }

    return firstAndLast;
}

// The lines of code below will test your function when you run it from the
// command line with Node.js
console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));