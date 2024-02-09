/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places. toFixed(num de casas)

Example output: 73.44
*/
const data = [
    {
        item: "🍭",
        price: 2.99,
        type: "sweet",
        onSale: true
    },
    {
        item: "🍫",
        price: 1.99,
        type: "sweet",
        onSale: true
    },
    {
        item: "🥫",
        price: 1.99,
        type: "savory",
        onSale: false
    },
    {
        item: "🍬",
        price: .89,
        type: "sweet",
        onSale: false
    },
    {
        item: "🥦",
        price: 3.99,
        type: "savory",
        onSale: false
    },
    {
        item: "🍖",
        price: 3.99,
        type: "savory",
        onSale: true
    },
]


function total(arr){
    const total = arr.reduce((accumulator, item) =>
        accumulator + item.price
    , 0)
    return total.toFixed(2)
}

console.log(total(data));

/* A função reduce() em JavaScript é utilizada para reduzir um array a um único valor. 
Ela recebe uma função de callback e opcionalmente um valor inicial. 
A função de callback recebe dois parâmetros, o acumulador e o valor atual, 
e retorna o próximo valor do acumulador.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue ITEMS DE UMA LISTA) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 */
