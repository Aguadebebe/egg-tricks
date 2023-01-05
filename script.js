const questionButton = document.querySelector(".btn")
const offButton = document.querySelector("#offBtn")
const card = document.querySelector(".card")
const cssClasses = ["pulse", "ellipse", "scale", "slide"]

offButton.addEventListener("click", () => {
  card.classList.remove("pulse")
  card.classList.remove("ellipse")
  card.classList.remove("scale")
  card.classList.remove("slide")
 
})

// This loops through an array of css classes that have @keyframes functions. It chooses a random function from the array every time the question button is clicked. the off button stops the animation.
// Math.ceil also works in place of Math.ceil. Math.floor rounds down and ceil rounds up. Both loop through the Array, one goes one direction and the other the opposite.
 

/*questionButton.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
  const randomIndex = Math.floor(Math.random() * cssClasses.length) 
  const selectedClass = cssClasses[randomIndex]
  document.querySelector(".card").classList.toggle(selectedClass)
  }

})*/


// Here you are doing the same thing as the for loop above. But with  using .forEach and pssing it an arrow function called selectedClass... that has everything that was contained in the body of the for loop. .forEach loops through the cssClasses array like the for loop but it doesn't need a number of how many times to run the loop. It will loop over every element contained in the array. 
   
 /*questionButton.addEventListener("click", () => {
  cssClasses.forEach(selectedClass => {
  const randomIndex = Math.floor(Math.random() * cssClasses.length)
  const selectedClasses = cssClasses[randomIndex]
  document.querySelector(".card").classList.toggle(selectedClasses)
  })
})*/

// sets the current index to 0 with the let keyword bbecause the variable will change
  let currentIndex = 0;

questionButton.addEventListener('click', () =>  { // This eventListener connects the questionButton to whatever function is inside the eventListener body whenever the questionButton is clicked.
  // Remove the current class
  card.classList.remove(cssClasses[currentIndex]);

  // Increment the current index, and reset to 0 if necessary
  currentIndex = (currentIndex + 1) % cssClasses.length;    

  // Add the new class
  card.classList.add(cssClasses[currentIndex]);
});

 //This code uses the classList property of the questionButton element to add and remove classes. The add() and remove() methods are used to add and remove classes, respectively. The % operator is used to reset the currentIndex back to 0 when it reaches the end of the cssClasses array.

//This event listener will be triggered each time the questionButton is clicked, and it will loop through the cssClasses array, adding and removing classes as necessary.

//  The % operator, also known as the modulo operator, is a mathematical operator that returns the remainder of dividing two numbers. In JavaScript, it can be used with both integer and floating-point numbers.

//In the code example above, the modulo operator(%) is used to reset the currentIndex back to 0 when it reaches the end of the cssClasses array. This allows the event listener to loop through the array indefinitely. So when the last index of the array is reached, the full length of the array divided by itself returns 0 with no remainder so it rests the array to the 0 index and repeats until it reaches the last index again.
