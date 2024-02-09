/* Pizza Night?
It's the weekend and you and your friends can't agree on
what to order for dinner, so you put it to a vote.

Write a function to find the food with the highest number of votes.

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with
how many votes it received.

Example input: {"🐈 cats": 19, "🐕 dogs": 17}
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
    "🍕 pizza": 3,
    "🌮 tacos": 10,
    "🥗 salads": 7,
    "🍝 pasta": 5,
    "🍝 burritop": 15
}

function findTheWinner(obj){
    // criar duas constantes para key e value
    let keySave = ""
    let valueSave = 0
    //fazer um for loop no dicionario
    for(item in obj){
        if(obj[item] > valueSave){
            valueSave = obj[item]
            keySave = item
        }
    }
    return `The winner is ${keySave} with ${valueSave} votes!`
}

console.log(findTheWinner(gameNightFood));