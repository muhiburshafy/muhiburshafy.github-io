let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scroll Down
        header.style.top = '-100px'; // Adjust this value based on header height
    } else {
        // Scroll Up
        header.style.top = '0';
    }
    lastScrollTop = currentScroll;
});

// Existing menu toggle functionality
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('showing');
});

document.querySelectorAll('.nav-list li a').forEach(anchor => {
    anchor.addEventListener('click', function() {
        document.querySelector('.nav-list').classList.remove('showing');
    });
});

// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const elementsToToggle = [document.body, header, document.querySelector('.nav-list')];

darkModeToggle.addEventListener('click', function() {
    elementsToToggle.forEach(el => el.classList.toggle('dark-mode'));
});
