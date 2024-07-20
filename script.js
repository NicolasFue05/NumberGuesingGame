// Number guessing game

//scoreboard
const tries = document.getElementById('tries');
const score = document.getElementById('score');

// Words inputs and display message
const wordInput = document.getElementById('wordInput');
const wordMessage = document.getElementById('messageError');
const displayWord = document.getElementById('word');
const displayTopic = document.getElementById('topic')

// try Again/play again button
const button = document.getElementById('buttongame')


let topics = ["animals", "countries", "fruits"]
// create an array of animals
let animals = [
    "Leon",
    "Tigre",
    "Elefante",
    "Jirafa",
    "Canguro",
    "Zorro",
    "Cebra",
    "Oso",
    "Halcon",
    "Delfin"
];
// create an array of cities
let countries = [
    "Argentina",
    "Brasil",
    "Canada",
    "Dinamarca",
    "Egipto",
    "Francia",
    "Grecia",
    "Italia",
    "Japon",
    "Kenia"
];
// creat an array of fruits
let fruits = [
    "Manzana",
    "Banana",
    "Naranja",
    "Fresa",
    "Kiwi",
    "Uva",
    "Pera",
    "Sandia",
    "Melon",
    "Cereza"
];



// make a arrow function that capitalizes the first element of the charactes
const capitalizeFirstLetter = (char) => {
    element = String(char)
    element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

// make a arrow function that takes an array and return one random element
let randomElement = (ar) => {
    element = Math.floor(Math.random() * ar.length)
    return ar[element]
}

// hacer la funcion principal del juego
function validateWord(word){

    word = word.value
    console.log(word)
    // convertir el primer caracter de la palabra en mayusculas
    let wordCapitalize = capitalizeFirstLetter(word)
    // tomar un tema aleatorio
    let topic = randomElement(topics)
    console.log("The world is capitalized")

    //si el tema es de animales
    
}

button.onclic = function(word){
    if(topic == "animals"){
        console.log("Animales")
        displayTopic.innerText = "Animales"

        // tomar un elemento random de la lista de animales y compararlo
        randomAnimal = randomElement(animals);
        console.log(randomAnimal)
        if(randomAnimal == wordCapitalize){
            wordMessage.innerText = "Felicidades, Has Acertado la Palabra!"
            // mostrar la palabra que era
            displayWord.innerText = randomAnimal;
        } else{

        }
    // si el tema es de paises:
    } else if(topic == "countries"){
        console.log("Paises")
        displayTopic.innerText = "Paises"

        //tomar un elemento random de la lista de paises y compararlo
        randomCountry = randomElement(countries)
        console.log(randomCountry)

        if(randomCountry == wordCapitalize){
            wordMessage.innerText = "Felicidades, Has Acertado la Palabra!"
            // mostrar la palabra que era
            displayWord.innerText = randomCountry;
        }
    // si el tema es de frutas:
    } else if(topic == "fruits"){
        console.log("Frutas")
        displayTopic.innerText = "Frutas"

        // tomar un elemento random de la lista de frutas y compararlo
        randomFruit = randomElement(fruits)
        console.log(randomFruit)

        if(randomFruit == wordCapitalize){
            wordMessage.innerText = "Felicidades, Has Acertado la Palabra!"
            // mostrar la palabra que era
            displayWord.innerText = randomFruit;
        }
    } else{
        console.log("No hay topics iguales")
    }
}