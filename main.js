document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-bar');

    hamburger.addEventListener('click', function () {
        navBar.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-bar ul li a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navBar.classList.remove('active');
        });
    });
});
//  function changeColor(){
//     var elmnt = document.lu;
//     elmnt.style.backgroundColor = "white";
//      elmnt.style.color = "blue";
//  }
// function stickyColorChanges(sticky){
//     var element = document.li;
//     element.style.backgroundColor = "whitee";
//     element.style.color = "blue"
// }

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
     header.classList.toggle("sticky", window.scrollY > 0);
})