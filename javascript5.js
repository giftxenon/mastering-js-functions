//5. Reverse a String:
//Write a function that takes a string as input and
//returns a new string with the characters in reverse order.
function log(){

    const input = document.getElementById("inputStr");
    const value = input.value;
    const result = reverseString(value);

    console.log(result);
    
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
