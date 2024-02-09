/* Find Free Podcasts usiing filter() and map() functions.

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only
objects containing only the podcast title, rating, and whether or
not it is paid.

Expected output:
[
    {title: "Scrimba Podcast", rating: 10, paid: false},
    {title: "Something about Witches", rating: 8, paid: false},
    {title: "Coding Corner", rating: 9, paid: false}
]
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

function getFreePodcasts(podcasts){
    return podcasts
        .filter(podcast => !podcast.paid)
        .map(({title,rating,paid}) => ({title,rating,paid} ))
}

console.log(getFreePodcasts(data))

// map() Function:

// O método .map() é utilizado em arrays para iterar sobre cada elemento do array e criar um novo array com base nas transformações aplicadas a cada elemento.
// ({ title, rating, paid }) => ({ title, rating, paid }):

// Esta é uma forma de desestruturação e reestruturação de objetos em JavaScript.
// No contexto da função map, o argumento da função é um objeto representando cada elemento do array original.
// A parte { title, rating, paid } antes da => é chamada de desestruturação. Ela extrai as propriedades title, rating e paid do objeto original.
// A parte ({ title, rating, paid }) => ({ title, rating, paid }) após a => reestrutura essas propriedades em um novo objeto. Isso cria um novo objeto com as mesmas propriedades.
// Explicação detalhada:

// A função .map() itera sobre cada objeto do array podcasts.
// Para cada objeto, a desestruturação { title, rating, paid } extrai as propriedades title, rating e paid.
// A reestruturação ({ title, rating, paid }) => ({ title, rating, paid }) cria um novo objeto contendo essas propriedades.
// O novo array resultante conterá objetos com a estrutura { title, rating, paid }, que é exatamente o que você deseja.

// SOLUTION //

function getFreePodcasts(data){
    // filter list by paid prop
    // use map to create a new array of objects with only the specified properties 
    return data
        .filter(item => item.paid === false)
        .map(podcast => {
            return {
                title: podcast.title,
                rating: podcast.rating,
                paid: podcast.paid
            }
        });
}