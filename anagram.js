// Anagrams are groups of words that can be spelled with the same letters.
// For example, the letters in "pea" can be rearrange to spell "ape", and
// the letters in "allergy" can be rearranged to spell "gallery."

// Write a function to check if two strings of lowercase letters are anagrams.
// Return true if the word is an anagram. Return false if it isn't.

// Example input: "allergy", "gallery"
// Example output: true

// Example input: "rainbow", "crossbow"
// Example output: false

//

function isAnagram(str1, str2){
    let str1Lower = str1.toLowerCase()
    let str2Lower = str2.toLowerCase()
    if(str1Lower.length !== str2Lower.length){
        return false;
    }
    let list1 = str1Lower.split("").sort().join()
    let list2 = str2Lower.split("").sort().join()

    return list1 === list2;
}


console.log(isAnagram("allergy", "gallery")); // true
console.log(isAnagram("rainbow", "crossbow")); // false

// Medir o tamanho, transformar as duas em listas, ordenar as listas e transformar em string denovo.