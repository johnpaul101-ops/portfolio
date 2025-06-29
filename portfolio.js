const menu = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navbar__menu');

function toggleNavbar() {
    menu.addEventListener('click', () => {
        menu.classList.toggle('is-active')
        navLinks.classList.toggle('active')
    })

    links.forEach(links => {
        links.addEventListener('click', () => {
            menu.classList.remove('is-active'); 
            navLinks.classList.remove('active'); 
        });
    });
}
toggleNavbar();

const links = document.querySelectorAll('.nav__links').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});