const backButton = document.querySelector('.backButton-js');
const forwardButton = document.querySelector('.forwardButton-js');

export default function clickOnButton() {
    const viewHeight = window.innerHeight;

    function scrollPage(viewHeight) {
        let scrollPosition = document.documentElement.scrollTop;
        window.scroll({
            top: scrollPosition + viewHeight,
            behavior: "smooth",
        });
    }

    backButton.addEventListener('click', (e) => {
        e.preventDefault();
        scrollPage((0 - viewHeight));
    });
    
    forwardButton.addEventListener('click', (e) => {
        e.preventDefault();
        scrollPage(viewHeight);
    });
};

