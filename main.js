document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-bar');

    hamburger.addEventListener('click', function () {
        navBar.classList.toggle('active');
    });
    // Close the navigation menu when a menu item is clicked (optional)
    const navLinks = document.querySelectorAll('.nav-bar ul li a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navBar.classList.remove('active');
        });
    });
});
 function changeColor(){
    var elmnt = document.lu;
    elmnt.style.backgroundColor = "white";
     elmnt.style.color = "blue";
 }