/*
Palindromes are words that are the same forward or backward. For example,
the words "noon" and "kayak" are a palindromes.

Write a function to check if a lowercased string of letters is a palindrome.
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator"
Example output: true
*/

function reverseString(str){
    let lista = []
    let strList = str.split("")
    for(let i = strList.length - 1; i >= 0; i--){
        lista.push(strList[i])
    }
    return lista.join("")
}

function isPalindrome(str){
    return str === reverseString(str);
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
