window.onload = function(){
    hideNolaFoods();
    hideNolaPlaces();  
    hideDrop();
}

function hideNolaPlaces() {
  var nolaPlace = document.getElementById('nolaplaces');
  nolaPlace.style.display="none";
  document.getElementById("shownolaplaces").innerHTML = "( + ) show me where to go!";
}

function showNolaPlaces() {
  var nolaPlace = document.getElementById('nolaplaces');
  nolaPlace.style.display="block";
  document.getElementById("shownolaplaces").innerHTML = "( - ) I've seen enough for now!";
}

function toggleNolaPlaces() {
  var nola = document.getElementById('nolaplaces');
  if (nola.style.display=="block") {
    hideNolaPlaces();
  }
  else {
    showNolaPlaces();
  }
}

function hideNolaFoods() {
  var nolaFood = document.getElementById('nolafoods');
  nolaFood.style.display="none";
  document.getElementById("shownolafoods").innerHTML = "( + ) show me the food!";
}

function showNolaFoods() {
  var nolaFood = document.getElementById('nolafoods');
  nolaFood.style.display="block";
  document.getElementById("shownolafoods").innerHTML = "( - ) maybe later...";
}

function toggleNolaFoods() {
  var nola = document.getElementById('nolafoods');
  if (nola.style.display=="block") {
    hideNolaFoods();
  }
  else {
    showNolaFoods();
  }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  function hideDrop() {
    var drop = document.getElementById('dropdown-content');
    drop.style.display="none";
    document.getElementById("dropbtn").innerHTML = "MORE! &darr;";
  }
  
  function showDrop() {
    var drop = document.getElementById('dropdown-content');
    drop.style.display="block";
    document.getElementById("dropbtn").innerHTML = "hello";
  }
  
  function toggleDrop() {
    var hello = document.getElementById('dropdown-content');
    if (hello.style.display=="block") {
      hideDrop();
    }
    else {
      showDrop();
    }
  }
  
