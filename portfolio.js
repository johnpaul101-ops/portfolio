const menu = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navbar__menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active')
    navLinks.classList.toggle('active')
})

const links = document.querySelectorAll('.nav__links').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        
        // Get the target section ID from the href attribute
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});