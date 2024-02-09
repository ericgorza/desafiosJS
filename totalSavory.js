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

function sumSavory(arr){
    let filteredArr = arr
    .filter(i => i.type == "savory")
    console.log(filteredArr)
    const total = filteredArr.reduce((accumulator, item) => {
        return accumulator + item.price
    },0)
    return total
}

console.log(sumSavory(data))