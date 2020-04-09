window.onload = function(){
  hide();
  hideFoods();
  hidePlaces();
  hideDrop();
}

function hide() {
  var fbphoto1 = document.getElementById('fbphoto1');
  var fbphoto2 = document.getElementById('fbphoto2');
  fbphoto1.style.display="none";
  fbphoto2.style.display="none";
  document.getElementById("showmorephotosfacebook").innerHTML = "( + ) show more Facebook campus photos!";
}

function show() {
  var fbphoto1 = document.getElementById('fbphoto1');
  var fbphoto2 = document.getElementById('fbphoto2');
  fbphoto1.style.display="block";
  fbphoto2.style.display="block";
  document.getElementById("showmorephotosfacebook").innerHTML = "( - ) hide these photos!";
}

function toggleImages() {
  var yes = document.getElementById('fbphoto1');
  var yes2 = document.getElementById('fbphoto2');
  if (yes.style.display=="block" && yes2.style.display=="block") {
    hide();
  }
  else {
    show();
  }
}

function hidePlaces() {
  var place = document.getElementById('places');
  place.style.display="none";
  document.getElementById("showplaces").innerHTML = "( + ) show me where to go!";
}

function showPlaces() {
  var place = document.getElementById('places');
  place.style.display="block";
  document.getElementById("showplaces").innerHTML = "( - ) I've seen enough for now!";
}

function togglePlaces() {
  var okay = document.getElementById('places');
  if (okay.style.display=="block") {
    hidePlaces();
  }
  else {
    showPlaces();
  }
}

function hideFoods() {
  var food = document.getElementById('foods');
  food.style.display="none";
  document.getElementById("showfoods").innerHTML = "( + ) show me the food!";
}

function showFoods() {
  var food = document.getElementById('foods');
  food.style.display="block";
  document.getElementById("showfoods").innerHTML = "( - ) maybe later...";
}

function toggleFoods() {
  var okay = document.getElementById('foods');
  if (okay.style.display=="block") {
    hideFoods();
  }
  else {
    showFoods();
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
  document.getElementById("dropbtn").innerHTML = "lmfao;";
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

// function darkMode() {
//   var darkModeButton = document.body;
//   darkModeButton.classList.toggle("darkmode");
// }

// var mybutton = document.getElementById("myBtn");

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
