// Welkom naam

var formulier = document.querySelector('#naamformulier')
var naamGebruiker = document.querySelector('#gebruikersnaam')

function geefNaam (event) {
    event.preventDefault()

    var naam = formulier.elements['naam'].value ;

    var naamZeggen = ' ' + 'Welkom' + ' ' + naam + '!';

    naamGebruiker.textContent = naamZeggen ;
}

formulier.addEventListener('submit', geefNaam);

// Input value verwijderen 

var text = document.getElementById('naam');
text.onclick = function() {
    text.value = '';
}

// Naam aan favorieten

var formulier = document.querySelector('#naamformulier')
var favorietenLabel = document.querySelector('#favorietenLabel')

function favorietenNaamGeven (event) {
    event.preventDefault()

    var naam = formulier.elements['naam'].value ;

    var naamZeggenFavorieten =   naam + "'s "+ ' ' + "favorieten";

    favorietenLabel.textContent = naamZeggenFavorieten ;
}

formulier.addEventListener('submit', favorietenNaamGeven);


//checkboxes
var scifiCheckbox = document.querySelector("#sci-fi");

scifiCheckbox.addEventListener("change",scifiFilter); 

function scifiFilter() {
    var movieList = document.querySelector("ul.movieList");
    movieList.classList.toggle("sci-fi");
    
} 

var misdaadCheckbox = document.querySelector("#misdaad");

misdaadCheckbox.addEventListener("change",misdaadFilter); 

function misdaadFilter() {
    var movieList = document.querySelector("ul.movieList");
    movieList.classList.toggle("misdaad");
    
} 

var horrorCheckbox = document.querySelector("#horror");

horrorCheckbox.addEventListener("change",horrorFilter); 

function horrorFilter() {
    var movieList = document.querySelector("ul.movieList");
    movieList.classList.toggle("horror");
    
} 

var comedyCheckbox = document.querySelector("#comedy");

comedyCheckbox.addEventListener("change",comedyFilter); 

function comedyFilter() {
    var movieList = document.querySelector("ul.movieList");
    movieList.classList.toggle("comedy");
    
} 

var dramaCheckbox = document.querySelector("#drama");

dramaCheckbox.addEventListener("change",dramaFilter); 

function dramaFilter() {
    var movieList = document.querySelector("ul.movieList");
    movieList.classList.toggle("drama");
    
} 


//favorieten
var favorietenCheckbox = document.querySelector("#favoriet");

favorietenCheckbox.addEventListener("click",favorietenFilter); 

function favorietenFilter() {
    var movieList = document.querySelector("ul.movieList");
    movieList.classList.add("geel");
    
} 

var allesCheckbox = document.querySelector("#alles");

allesCheckbox.addEventListener("change",allesFilter); 

function allesFilter() {
    var movieList = document.querySelector("ul.movieList");
    movieList.classList.remove("geel");
} 



// per list item favorieten (met hulp van Sam Slotemaker)

var alleFavorietenKnoppen = document.querySelectorAll('.star')

function toggleFavoriet(event) {
    event.target.parentNode.classList.toggle('geel')
}

alleFavorietenKnoppen.forEach(favoriet => {
    favoriet.addEventListener('click', toggleFavoriet)
})



// save value

document.getElementById("naam").value = getSavedValue("naam"); 
 // input om de value te geven


function saveValue(e){
    var id = e.id;  // id verkrijgen om het naar op te slaan  
    var val = e.value; // value ophalen 
    localStorage.setItem(id, val);// overschrijven als er iets nieuws wordt ingevoerd
}

//de opgeslagen value ophalen
function getSavedValue  (v){
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v);
}


// Random film generator

let btnRandom = document.querySelector(".randomButton");
let result = document.querySelector(".resultaat");

let users= ['The hunger games','The Conjuring','Godzilla','It','The Joker','The Mask',"We're the Millers",'Honest Thief', 'The Terminal','Titanic','Zombieland'];

function getRandomNumber(min, max) {

    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    
    return result
}

btnRandom.addEventListener('dblclick', () => {
    let index = getRandomNumber(0, users.length-1);
    result.innerText = users[index];

});


