window.onload = function(){
    hideCaliFoods();
    hideCaliPlaces();  
//     hideDrop();
}

function hideCaliPlaces() {
    var caliPlace = document.getElementById('caliplaces');
    caliPlace.style.display="none";
    document.getElementById("showcaliplaces").innerHTML = "( + ) show me where to go!";
}
  
function showCaliPlaces() {
    var caliPlace = document.getElementById('caliplaces');
    caliPlace.style.display="block";
    document.getElementById("showcaliplaces").innerHTML = "( - ) I've seen enough for now!";
}

function toggleCaliPlaces() {
    var cali = document.getElementById('caliplaces');
    if (cali.style.display=="block") {
        hideCaliPlaces();
    }
    else {
        showCaliPlaces();
    }
}

function hideCaliFoods() {
    var caliFood = document.getElementById('califoods');
    caliFood.style.display="none";
    document.getElementById("showcalifoods").innerHTML = "( + ) show me the food!";
}
  
function showCaliFoods() {
    var caliFood = document.getElementById('califoods');
    caliFood.style.display="block";
    document.getElementById("showcalifoods").innerHTML = "( - ) maybe later...";
}

function toggleCaliFoods() {
    var cali = document.getElementById('califoods');
    if (cali.style.display=="block") {
        hideCaliFoods();
    }
    else {
        showCaliFoods();
    }
}

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

// function hideDrop() {
//     var drop = document.getElementById('dropdown-content');
//     drop.style.display="none";
//     document.getElementById("dropbtn").innerHTML = "MORE! &darr;";
// }

// function showDrop() {
//     var drop = document.getElementById('dropdown-content');
//     drop.style.display="block";
//     document.getElementById("dropbtn").innerHTML = "hello";
// }

// function toggleDrop() {
//     var hello = document.getElementById('dropdown-content');
//     if (hello.style.display=="block") {
//         hideDrop();
//     }
//     else {
//         showDrop();
//     }
// }
