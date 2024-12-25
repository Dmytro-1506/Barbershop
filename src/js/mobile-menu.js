export default function mobileMenu() {
    const openMenuBtn = document.querySelector("js-open-menu");
    const closeMenuBtn = document.querySelector("js-close-menu");
    const mobileMunuContainer = document.querySelector("js-menu-container");

    const menuIsOpen = document.querySelector('is-open');
    if (!menuIsOpen) {
        console.log('is-close');
    }

    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMunuContainer.classList.toggle('is-open');
    }

    openMenuBtn.addEventListener('click', ()=>{console.log('click openBtn');
    });
    closeMenuBtn.addEventListener('click', ()=>{console.log('click closeBtn');
    });
}