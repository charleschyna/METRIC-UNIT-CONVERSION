let ButtonEl = document.getElementById("button-el")
ButtonEl.addEventListener("click",function convert(){
    let value = parseFloat(document.getElementById('value').value)
    let lengthResult = lengthConversion(value)
    let volumeResult = volumeConversion(value)
    let massResult = massConversion(value)

document.getElementById('lengthConversion').style.display = 'block';
document.getElementById('lengthConversion').innerText = lengthResult

document.getElementById('volumeCoversion').style.display = 'block'
document.getElementById('volumeConversion').innerText= volumeResult

document.getElementById('massConversion').style.display = 'block'
document.getElementById('massConversion').innerText = massResult
})
function volumeConversion(value){
      let litersToGallons = value * 0.264172
      let gallonsToLitters = value *3.78541
      return `${value} liters = ${litersToGallons.toFixed(3)} gallons | ${value} gallons = ${gallonsToLitters.toFixed(3)} liters `
 
 
}
function lengthConversion(value){
    let metersToFeet = value * 3.28084
    let feetTometers = value / 3.28084
    return `${value} meters = ${metersToFeet.toFixed(2) } feet | ${value} feet = ${feetTometers.toFixed(3)} meters`
    
}
function massConversion(value){
    let kilosToPounds = value *2.204
    let poundsToKilos = value / 2.204
    return `${value} kilos = ${kilosToPounds.toFixed(2)} pounds | ${value} pounds = ${poundsToKilos.toFixed(3)} pounds `
    
    
}