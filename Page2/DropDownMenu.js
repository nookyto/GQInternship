let selectBox = document.querySelector(".selectBox");
let dropDown = document.querySelector(".selectSelect");

dropDown.onmouseenter = function() {
    dropDown.classList.add("active");
};

dropDown.onmouseleave = function() {
    dropDown.classList.remove("active");
};