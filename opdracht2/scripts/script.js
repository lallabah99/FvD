// JavaScript Document
console.log("howdy");

//checkboxes

function scifiGenre() {

  var checkBox = document.querySelector("#myScifi");
  var movieScifi = document.querySelector(".sci-fi");

  if (checkBox.checked == true){
    movieScifi.style.display = "block";
  } else {
    movieScifi.style.display = "none";
  }
}


function horrorGenre() {

    var checkBox = document.querySelector("#myHorror");
    var movieHorror = document.querySelector(".horror");
  
    if (checkBox.checked == true){
      movieHorror.style.display = "block";
    } else {
      movieHorror.style.display = "none";
    }
  }

