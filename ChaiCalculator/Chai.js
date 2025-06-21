const prompt =require("prompt-sync")()
function calculateChaiIngredients(numberOfCups){
    const waterPerCup = 200
    const milkPerCup = 50
    const teaLeavesMajaniPerCup = 1
    const sugarSukaripercup = 2


return{
    water:waterPerCup *numberOfCups,
    milk:milkPerCup *numberOfCups,
    tealeaves:teaLeavesMajaniPerCup *numberOfCups,
    sugar:sugarSukaripercup *numberOfCups
}
}
let input = prompt("Karibu! How many cups of Chai Bora would you like to make?")
let numberOfCups =Number(input)

if (Number(numberOfCups).isNaN || numberOfCups<=0 ){
console.log("Please input a positive number")
}else{
    const ingredients = calculateChaiIngredients(numberOfCups)
    const output = `To make ${numberOfCups} of Chai you need :
        water: ${ingredients.water}ml
        milk :${ingredients.milk} ml
        tea leaves :${ingredients.tealeaves} tablespoons
        sugar: ${ingredients.sugar} tablespoons
        
        Enjoy your Chai bora !`
        console.log (output)
     
}