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

// Typing Effect (2 Cycles + Stop on "BCA Student")
document.addEventListener("DOMContentLoaded", function () {
    let repeatCount = 0; // Track the number of cycles

    var typed = new Typed("#typing", {
        strings: ["Web Designer", "AI Enthusiast", "Problem Solver", "Bca Student"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        loop: true, // Loop initially
        onStringTyped: function (arrayPos, self) {
            if (arrayPos === 3) { // When "BCA Student" appears
                repeatCount++;
                if (repeatCount === 2) {
                    self.stop(); // Stop after 2 full cycles
                    document.querySelector('.typed-cursor').style.display = 'none'; // Remove cursor
                }
            }
        }
    });
});
