export const scrollModule = () => {
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.nav-link');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const id = link.getAttribute('href');
            const section = document.querySelector(id);
            const burgerButton = document.querySelector('.burger');
            const navigation = document.querySelector('.navigation');

            if (section) {
                const sectionPosition = section.getBoundingClientRect().top;
                const offsetPosition = sectionPosition - header.offsetHeight;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                burgerButton.classList.remove('open');
                navigation.classList.remove('open');
            }
        });
    });


    window.addEventListener('scroll', () => {
        const position = document.body.getBoundingClientRect().top;

        position !== 0 ? header.classList.add('scroll') : header.classList.remove('scroll');
    });
};