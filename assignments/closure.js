// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

/* simple solution nested function closure **/
function car() {
  const name = "Tesla";

  function wheels(num){ 
    const numWheels = num;
    console.log(`${name} has a ${numWheels} of wheels`);
  }

  console.log(`${name} is the car!`);
  wheels(4); 
}

car();

/** advance closure concepts */
/**
   function minus(x) {
    return function(y) {
      return x - y;
    };
  }

  let value = minus(30); // function

  console.log(value(5));

*/


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  
  /** simple solution 
  return function() {
    return counter +=1;
  }
  */

  /** refactored advanced solution*/
  return () => counter += 1;
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;

  console.log(counter);

  let increment = () => counter += 1;
  let decrement = () => counter -= 1;

  let returnObject = {increment, decrement};
  return returnObject;
};

let challengeCounter = counterFactory();
console.log(challengeCounter.increment());
console.log(challengeCounter.decrement());
