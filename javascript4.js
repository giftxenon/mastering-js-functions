
//Sum of Array Elements:
//Write a function that takes an array of numbers as input and
//returns the sum of all the elements in the array.

function log() {
  
  const inputString = document.getElementById("numberInput").value;
  const array = inputString.split(',');
  // alert(sum(inputString));
  // alert(sumOfArrayElements(array));
  if (array.some(isNaN)) {
    alert("Please enter only numbers separated by commas.");
    return;
  }
  const sum = sumOfArrayElements(array);
  const resultElement = document.getElementById("result");
  resultElement.textContent = `The sum of the numbers is: ${sum}`;
  console.log(sum);
}

// Function to calculate the sum
function sumOfArrayElements(array) {
  console.log();
  var  sum1 = 0;
    for (let i = 0; i < array.length; i++){ 
      sum1 += parseInt(array[i]);
     } 
    // console. log(sum1);
    return(sum1);
}









    
