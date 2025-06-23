 // initializing the prompt-sync
 const prompt =require("prompt-sync")()
 function calculateBodaFare(distanceInKm){
    const baseFare = 50
    const perKilometerCharge = 15
    const totalFare =baseFare + (distanceInKm *perKilometerCharge)
    //  return an object with commas separating properties
    return {
        baseFare , 
        perKilometerCharge,
        totalFare
 }
}
// user input
 let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:")
 let distanceInKm = Number(input)

 // validate the input
 if (Number . isNaN(distanceInKm) || distanceInKm <=0){
    console .log ("Please input a positive number")
 } else {
    const payFare = calculateBodaFare(distanceInKm)
  // Use object properties with dot notation inside template literals
    const output = `Uko kwote ? Io ni ${distanceInKm} km:
    Ukikalia Pikipiki : KES ${payFare.baseFare}
    Mpaka uko: ${distanceInKm* payFare.perKilometerCharge}
    Total: ${payFare.totalFare}

    Panda Pikipiki !`
    console.log (output)

    
 }