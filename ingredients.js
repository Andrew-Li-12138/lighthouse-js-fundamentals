const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
let x = 0; 
while ( x < ingredients.length) { console.log(ingredients[x]); x++ };
// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) { console.log(ingredients[i]); };
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let z = ingredients.length - 1 ; z >= 0; z--) {console.log(ingredients[z]); };
//I understood from previous course that for...of loop is a more poplular way to do this,
//when we need to loop from first element to the last in an array:
for (let ingredient of ingredients){ console.log(ingredient); };
