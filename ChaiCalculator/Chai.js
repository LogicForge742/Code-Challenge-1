//initialize the prompt -sync
const prompt =require("prompt-sync")()
//function that calcultes to the total number of ingredients
function calculateChaiIngredients(numberOfCups){
    const waterPerCup = 200
    const milkPerCup = 50
    const teaLeavesMajaniPerCup = 1
    const sugarSukaripercup = 2
//returns the object with total amount of the ingredients
return{
    water:waterPerCup *numberOfCups,
    milk:milkPerCup *numberOfCups,
    tealeaves:teaLeavesMajaniPerCup *numberOfCups,
    sugar:sugarSukaripercup *numberOfCups
}
}
//user input
let input = prompt("Karibu! How many cups of Chai Bora would you like to make?")
let numberOfCups =Number(input)
 //validate the input/number
if (Number(numberOfCups).isNaN || numberOfCups<=0 ){
console.log("Please input a positive number")
}else{
    const ingredients = calculateChaiIngredients(numberOfCups)
       // Use a template literal (enclosed in backticks ``) to create a multi-line string output
    const output = `To make ${numberOfCups} of Chai you need :
        water: ${ingredients.water}ml
        milk :${ingredients.milk} ml
        tea leaves :${ingredients.tealeaves} tablespoons
        sugar: ${ingredients.sugar} tablespoons
        
        Enjoy your Chai bora !`
        //Display the formatted output to the user 
        console.log (output)
     
}