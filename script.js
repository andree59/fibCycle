
function fibonacciSequence(){
  var firstnumber = 0;
  var secondnumber = 1;
  var result;
  for (var i = 1; i < 21; i++){
    console.log(result);
    result = firstnumber + secondnumber;
    firstnumber = secondnumber;
    secondnumber = result;
  }
}
//document.getElementById('button onclick').addEventListener("click", fibonacciSequence);
