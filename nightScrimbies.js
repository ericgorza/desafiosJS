/* Night at the Scrimbies

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards.

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce().

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array.

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...]

*/


const data = [
    {
        id: 1,
        title: "Scrimba Podcast",
        duration: 50,
        tags: ["education", "jobs", "technology"],
        hosts: ["Alex Booker"],
        rating: 10,
        genre: "education",
        paid: false
    },
    {
        id: 2,
        title: "Crime Fan",
        duration: 150,
        tags: ["crime", "entertainment", "mature"],
        hosts: ["Bob Smith", "Camilla Lambert"],
        genre: "true crime",
        rating: 5,
        paid: true
    },
    {
        id: 3,
        title: "Mythical Creatures",
        duration: 99,
        tags: ["entertainment", "general", "unicorns"],
        hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"],
        genre: "fantasy",
        rating: 8,
        paid: true
    },
    {
        title: "Crime Crime Crime",
        duration: 70,
        tags: ["crime", "entertainment", "mature"],
        hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"],
        genre: "true crime",
        rating: 6,
        paid: true
    },
    {
        title: "Something about Witches",
        duration: 35,
        tags: ["fantasy", "entertainment"],
        hosts: ["Frewin Wyrm", "Evanora Highmore"],
        genre: "fantasy",
        rating: 8,
        paid: false
    },
    {
        title: "Coding Corner",
        duration: 55,
        tags: ["education", "jobs", "technology"],
        hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"],
        genre: "education",
        rating: 9,
        paid: false
    },
]


const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data){
    let flatArray = []
    const flatArr = data.reduce((accumulator, item) => {return(accumulator.concat(item.hosts))},[])
    return flatArr;
}

//A [] é o comeco do acumulator e o retorno é o que entra no acumulator.

function assignAwards(data){
    const flatArray = getHosts(data)
    return flatArray.map((item) => {
        let randIndex = Math.floor(Math.random() * awards.length)
        return `${awards[randIndex]} ${item}`
    })

}


console.log(getHosts(data));
console.log(assignAwards(data));

// a funcao map pega cada item e retorna um item novo que passa por uma funcao.
// voce precisa retornar o resultado final, por isso adicionar o return antes, ou entao atribuir a uma variavel e retornar a variavel.

