
const navBar = document.getElementById('nav_bar');

window.addEventListener('scroll', () => {

    if (window.scrollY >= 80) {
        navBar.classList.add('scrolled')
    }
    else {
        navBar.classList.remove('scrolled')
    }
})

const links = document.querySelectorAll('nav_links').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        })
    })
})


const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    if(menu.click) {
        navBar.classList.toggle('clicked')
    }
})



