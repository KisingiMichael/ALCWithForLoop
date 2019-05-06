//javascript code for highlighting active clicked menus

var menuContainer = document.getElementById("menu");

var menus = menuContainer.getElementsByClassName("menus");

// Loop through the menu and add the active class to the current/clicked menu
for (var i = 0; i < menus.length; i++) {
  menus[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 