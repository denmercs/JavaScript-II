// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


/** PROBLEM 1 */
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

  /** SOLUTION */
  getLength(items, function(item) {
    return console.log('normal solution: ' + item)
  });

  /** SOLUTION 2: ARROW FUNCTION */
  getLength(items, (item) => console.log(`arrow function solution ${item}`));

/** --------------------------------------------------------------------------------- */

/** PROBLEM 2 */
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

  /** SOLUTION */
  last(items, function(item) {
    return console.log(`normal solution: ${item}`);
  })

  /** SOLUTION 2: ARROW FUNCTION */
  last(items, item => console.log(`arrow function solution: ${item}`));

/** --------------------------------------------------------------------------------- */

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  
  return cb(x + y);
}

  /** SOLUTION */  
  sumNums(1, 2, function(num) {
    console.log(`Answer is: ${num}`);
  })

  /** SOLUTION 2: ARROW FUNCTION */
  sumNums(4, 5, num => console.log(`Answer in arrow function is: ${num}`));

  /** SORT OF ADVANCE SOLUTION? */
  function displayOutput(answer) {
    console.log(`Answer in another solution is: ${answer}`)
  }

  sumNums(4, 5, num => displayOutput(num));


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
    /** SOLUTION */  
    multiplyNums(1, 2, function(num) {
      console.log(`Answer is: ${num}`);
    })
  
    /** SOLUTION 2: ARROW FUNCTION */
    multiplyNums(4, 5, num => console.log(`Answer in arrow function is: ${num}`));

    /** SORT OF ADVANCE SOLUTION? */
    multiplyNums(10, 20, num => displayOutput(num));


/** --------------------------------------------------------------------------------- */

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

  /** SOLUTION */  
  contains('Pencil', items, function(answer) {
    console.log(`solution: ${answer}`);
  });

  /** SOLUTION 2: ARROW FUNCTION */
  contains('Pencil', items, answer => console.log(`arrow function: ${answer}`));


/** --------------------------------------------------------------------------------- */

/* STRETCH PROBLEM */
const newItems = ['Pencil', 'Notebook', 'Notebook', 'yo-yo', 'Gum'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  cb (array.filter((name1, name2) => array.indexOf(name1) === name2))
}

  removeDuplicates(newItems, item => console.log(item));