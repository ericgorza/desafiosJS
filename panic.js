const input = "I'm almost out of coffee"
const input1 = "Hello"

// const panicFunction = (str) => {
//     let list = str.split(' ')
//     let phrase = ""
//     if(list.length == 1){
//         phrase += list[0].toUpperCase()
//     }
//     if(list.length > 1){
//         for(let i = 0; i < list.length;i++){
//             if(i == list.length - 1){
//                 phrase += list[i].toUpperCase()
//                 return console.log(phrase)
//             }
//             phrase += list[i].toUpperCase() + " EMOJI "
//         }
//     }
//     return console.log(phrase)
// }

// panicFunction(input)

// Outra forma //
//.join method automaticamente junta uma lista em uma string separada por virgulas, o argumento substitui a virgula por outra coisa.

const panic = (str) => {
    return str.split(" ")
        .join(" emoji ")
        .toUpperCase() + "!"
}

console.log(panic(input))