let tooglelogo = document.querySelector('.toogle-logo');
let menu = document.querySelector('.menu');
let menuLinks = document.querySelectorAll('.menu a');
let header = document.querySelector('header'); // Select the header

// Toggle menu on click of the logo
tooglelogo.addEventListener('click', function () {
    menu.classList.toggle('is-active');
});

// Close menu when any menu link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menu.classList.remove('is-active');
    });
});




