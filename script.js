// Open/close offcanvas menu with burger animation
document.getElementById('menuToggle').addEventListener('click', function() {
    const offcanvasMenu = document.getElementById('offcanvasMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    if (offcanvasMenu.classList.contains('show')) {
        offcanvasMenu.classList.remove('show');
        menuToggle.classList.remove('open');
    } else {
        offcanvasMenu.classList.add('show');
        menuToggle.classList.add('open');
    }
});

// Close menu with the close button
document.getElementById('closeBtn').addEventListener('click', function() {
    const offcanvasMenu = document.getElementById('offcanvasMenu');
    offcanvasMenu.classList.remove('show');
});

// Scroll to Top Button functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});