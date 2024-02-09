function capitalizeWord(str){
    let list = str.split("")
    list[0] = list[0].toUpperCase()
    return list.join("")
}


console.log(capitalizeWord("eric"))

function capitalizePhrase(str){
    let phraseList = str.split(" ")
    let newList = []
    for(let i = 0; i < phraseList.length; i++){
        newList.push(capitalizeWord(phraseList[i]))
    }
    return newList.join(" ")
}

console.log(capitalizePhrase("Hello my name is Eric gorza"))