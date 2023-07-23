let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

sidebar.onmouseover = function() {
    sidebar.classList.toggle("active");
};

sidebar.onmouseout = function() {
    sidebar.classList.toggle("active");
};
