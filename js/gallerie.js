var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Get the screen width
var width = innerWidth;

console.log(width);
// Full-width images
if (width < 426) {
    window.onload = function one() {
        for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "100%";  // IE10
        elements[i].style.flex = "100%";
        console.log("hello there");
        }
      
    }
}

