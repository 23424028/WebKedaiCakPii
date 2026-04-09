// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.classList.remove('bg-stone-900/90');
        navbar.classList.add('bg-stone-900');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.add('bg-stone-900/90');
        navbar.classList.remove('bg-stone-900');
    }
});