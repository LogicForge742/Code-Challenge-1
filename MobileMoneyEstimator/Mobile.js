 const prompt = require("prompt-sync")()
 function estimateTransactionFee(amountToSend){
 const transactionFeeRate = 0.015
 const miniFee = 10 
 const maxfee = 70
  const calculatedFee = transactionFeeRate * amountToSend
 if (calculatedFee < miniFee){
     return miniFee
 }else if ( calculatedFee > maxfee){
     return maxfee
 }else {
   return calculatedFee
 }
}
 //user input
 let input = prompt("Unatuma Ngapi?:")
 let amountToSend = Number (input)
  //validate the input
 if (Number . isNaN(amountToSend) || amountToSend <=0){
    console .log ("Please input a positive number")
 } else {
 const fee = estimateTransactionFee(amountToSend)
 const totalAmount = amountToSend + fee
 const output = `To send  KES ${amountToSend}:
 Calculated Transaction Fee : ${fee.toFixed(2)}
 Total amount to be debited: KES ${totalAmount.toFixed(2)}
  
  Send Money Securely!`
  console.log (output)
 }
