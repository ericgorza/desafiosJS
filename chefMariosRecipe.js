/* Chef Mario's Recipe Book
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array
and returns a new array with all the duplicates removed.

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon",
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli",
    "🧀 cheese",
    "🥦 broccoli",
    "🌶️ hot sauce"
]

function removeDupesFromArray(arr){
    let newArr = []
    // Vamos fazer um loop
    // checar se o elemento ja faz parte do array
    // se nao fizer, vamos adicionar
    //retornar a lista nova
    for(let i = 0; i < arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(removeDupesFromArray(eggScrambleRecipe));
console.log(removeDupesFromArray(["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"]));


function removeDupesFromArray(arr){
    // create a new arr to hold unique items 
    // for each item in recipe arr
        // if the item is NOT yet in the unique arr, push it in
        // if it is in the unique arr, move on to the next item (do nothing)
    // return the unique arr 
    
    const uniqueItems = []; 
    
    arr.forEach(item => {
       if(!uniqueItems.includes(item)){
           uniqueItems.push(item);
       }
    });
    return uniqueItems;
}

console.log(removeDupesFromArray(eggScrambleRecipe));

/* Python

eggScrambleRecipe = [lista]

def eggScrambleRecipe(arr):
    newList = []
    for item in arr:
        if item not in newList:
            newList.append(item)
        else:
            print("already in list")
    return newList */
