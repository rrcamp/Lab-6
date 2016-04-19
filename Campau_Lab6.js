var temp;
var converted;
var unit="farenheight";
var unit="celcius";

//How do I make a multi step prompt?!?!

function convertTemp (temp){
var unit= prompt("Are you starting out in farenheight or celcius?", "");
if (unit===farenheight) {
 //prompt ("convertFToC(temp)", "Enter Temperature Here";

} else {
convertCtoF (temp);

}
document.getElementById("demo").innerHTML =
      "It's" + converted + "degrees out!";
}



 function convertFToC (temp) {
  converted = ( (temp-32) / 1.8 ) ;
}

  function convertCTOF (temp) {
  converted = ( (1.8 * temp) + 32);
}
