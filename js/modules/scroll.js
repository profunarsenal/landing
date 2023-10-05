export const scrollModule = () => {
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.nav-link');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const HEADER_FIXED_SCREEN_WIDTH = 1022;
            const isHeaderFixed = window.screen.width <= HEADER_FIXED_SCREEN_WIDTH;
            const hasScrollClass = header.classList.contains('scroll');
            const id = link.getAttribute('href');
            const section = document.querySelector(id);

            if (section) {
                const topOffset = hasScrollClass ? header.offsetHeight : header.offsetHeight * 2;
                const sectionPosition = section.getBoundingClientRect().top;
                const offsetPosition = isHeaderFixed ? sectionPosition - topOffset : sectionPosition;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    window.addEventListener('scroll', () => {
        const position = document.body.getBoundingClientRect().top;

        position !== 0 ? header.classList.add('scroll') : header.classList.remove('scroll');
    });
};