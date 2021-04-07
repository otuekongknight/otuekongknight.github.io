// Get the elements with class="column"
var elements = document.getElementsByClassName("cards");

// Declare a loop variable
var i;

// List View
function listView() {
    for (i = 0; i < elements.length; i++) {
        document.querySelector(".cards").style.width = "90%";
        document.querySelector(".cards").style.display = "block";


    }
}

// Grid View
function gridView() {
    for (i = 0; i < elements.length; i++) {
        document.querySelector(".cards").style.width = "90%";
        document.querySelector(".cards").style.display = "grid";
        document.querySelector(".cards").style.margin = "20px";

    }


}