window.onload = function(){
  hideDrop();
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

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } 
  
//   else {
//     x.className = "topnav";
//   }
// }
