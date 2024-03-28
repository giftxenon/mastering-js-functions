//3. Palindrome Check: Write a function that takes a string as input and returns `true` 
//if the string is a palindrome (reads the same forwards and backwards), and `false` 
//otherwise. Ignore spaces, punctuation, and capitalization.
function log(){

    const input = document.getElementById("inputStr");
    const str = input.value;
    const result = isPalindrome(str);
    console.log(result);
}

function isPalindrome(str) {
    let j = str.length - 1
   
    for (let a = 0; a < str.length/2; a++){

    if(str[a] != str[j]){
        return false;
    }else{
        j--;
    }
    return true;
}
}


