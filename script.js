// JavaScript code for toggling the navigation menu and smooth scrolling

// Toggling the navigation menu
document.getElementById('navToggleBtn').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
});

// Smooth scroll functionality for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Smooth scroll for the booking button
document.querySelector('.column1 button').addEventListener('click', function(e) {
    e.preventDefault();

    const targetElement = document.getElementById('bookingSection'); // Assuming you have an element with id="bookingSection"

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
});
