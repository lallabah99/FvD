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


// favorieten
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

//favorieten

// the hunger games
var favKnopHunger = document.querySelector('#star1');
var listElementHunger = document.querySelector('li:nth-child(1)')

favKnopHunger.addEventListener('change', toggleGeelHunger );

function toggleGeelHunger() {
	listElementHunger.classList.toggle('geel');
}

// Catch me if you can
var favKnopCatch = document.querySelector('#star2');
var listElementCatch = document.querySelector('li:nth-child(2)')

favKnopCatch.addEventListener('change', toggleGeelCatch );

function toggleGeelCatch() {
	listElementCatch.classList.toggle('geel');
}

//the conjuring
var favKnopCon = document.querySelector('#star3');
var listElementCon = document.querySelector('li:nth-child(3)')

favKnopCon.addEventListener('change', toggleGeelCon );

function toggleGeelCon() {
	listElementCon.classList.toggle('geel');
}

// godzilla
var favKnopGod = document.querySelector('#star4');
var listElementGod = document.querySelector('li:nth-child(4)')

favKnopGod.addEventListener('change', toggleGeelGod );

function toggleGeelGod() {
	listElementGod.classList.toggle('geel');
}

// millers
var favKnopMil = document.querySelector('#star5');
var listElementMil = document.querySelector('li:nth-child(5)')

favKnopMil.addEventListener('change', toggleGeelMil );

function toggleGeelMil() {
	listElementMil.classList.toggle('geel');
}


// titanic

var favKnopTit = document.querySelector('#star6');
var listElementTit = document.querySelector('li:nth-child(6)')

favKnopTit.addEventListener('change', toggleGeelTit );

function toggleGeelTit() {
	listElementTit.classList.toggle('geel');
}

// zombieland
var favKnopZom = document.querySelector('#star7');
var listElementZom = document.querySelector('li:nth-child(7)')

favKnopZom.addEventListener('change', toggleGeelZom );

function toggleGeelZom() {
	listElementZom.classList.toggle('geel');
}



