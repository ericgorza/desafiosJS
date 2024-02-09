/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

const whisper = (str) => {
    let list = str.split(" ");
    list.unshift("shh...")
    let string = list.join(" ").toLowerCase()
    if(string.endsWith("!")){
        let newString = string.slice(0 ,string.length - 1)
        return console.log(newString)
    } else {
    return console.log(string)
}
}

whisper("HELLO MY NQME IW RIDDDD")