//Create a file called freightFilter.js in your code folder. Inside this file, create a JavaScript function called scanAndFilter.

//This function should take two arguments - an array of strings, and a string of text to filter out from that array. Your scanAndFilter function should use the array filter function for this purpose. Your function must then return the filtered array.

function scanAndFilter(freightItems, forbiddenString) {
    // This is an array variable you can override with your filtered array
    let filteredItems = [];

    /*
    Replace this comment with your code.
    Use the array filter() function to replace filteredItems with a new array of
    strings that don't include the value of forbiddenString
    */
    return filteredItems = freightItems.filter(item => (forbiddenString !== item));



}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
//const filtered = scanAndFilter(
//  ['dog', 'ray gun', 'cat', 'zippers', 'ray gun'],
 // 'ray gun'
//);
//console.log('Filtered Items');
//console.log(filtered); // should be ['dog', 'cat', 'zippers']
