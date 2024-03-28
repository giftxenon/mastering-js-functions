
// Factorial:
// Write a function to calculate the factorial of a given number `n`. 
//The factorial of a non-negative integer `n` is the product of all 
//positive integers less than or equal to `n`.
function log() {
    const input = document.getElementById("inputN");
    const value = input.value;
    const result = recurse(value);
    console.log(result);
    
  }
function recurse(n){

    if(n===0)
     return 1;
else{
    return n*recurse(n-1);
}

}
// let num = 6;
//let result = recurse(num);

// console.log(result);








//function factorial(number){
    
    //for(let i=1; i=>number; i++){
        //if (number >= x ) {

           // console.log("number");
          //} else(i % 5 === 0){
            //console.log("End of factorial");
          //}
          
//}
//}