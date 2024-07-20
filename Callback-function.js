// function displayGreeting(displayName) {
//     console.log("Hello");
//     displayName();
//     console.log("Good Morning!");
//   }
  
//   displayGreeting(function() {
//     console.log("Rahul");
//   });
  


// Passing a function name as an argument

// function displayGreeting(displayName) {
//   console.log("Hello");
//   displayName();
//   console.log("Good Morning!");
// }
// function displayRahul() {
//   console.log("Rahul");
// }
// displayGreeting(displayRahul);




// Passing a function expression as an argument

// function displayGreeting(displayName) {
//   console.log("Hello");
//   displayName();
//   console.log("Good Morning!");
// }
// let displayRam = function() {
//   console.log("Ram");
// };
// displayGreeting(displayRam);



// setInterval() method

// The setInterval() method allows us to run a function at the specified interval of time repeatedly.

// let counter = 0;
//  setInterval(function(){
//     console.log(counter);
//     counter = counter + 1;
//  },1000)



// clearInterval() method
// The clearInterval() method cancels a schedule previously set up by calling setInterval().

// let counter = 0;
// let uniqueId = setInterval(function() {
//   console.log(counter);
//   counter = counter+1;
// }, 4000);

// clearInterval(uniqueId);




//  setTimeout()
// The setTimeout() method executes a function after the specified time.


// let counter = 0;
// setTimeout(function() {
//   console.log(counter);
//   counter = counter + 1;
// }, 1000);



// clearTimeout() method
// We can cancel the setTimeout() before it executes the callback function using the clearTimeout() method.

// let counter = 0;
// let uniqueId = setTimeout(function() {
//   console.log(counter);
//   counter = counter+1;
// }, 1000);

// clearTimeout(uniqueId);

