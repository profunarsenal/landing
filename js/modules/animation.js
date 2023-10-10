export const animationModule = () => {
    const spinner = document.querySelector('.spinner');
    const buttonsWithArrow = document.querySelectorAll('.icon-right');

    window.onload = () => {
        spinner.style.display = 'none';

        const startedScreenElements = document.querySelectorAll('.home .anim');
        const targetElements = document.querySelectorAll('.anim');
    
        const options = {
            root: null,
            rootMargin: '5px',
            threshold: 0.5,
            delay: 300,
        };

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        targetElements.forEach(elem => observer.observe(elem));
        startedScreenElements.forEach(elem => elem.classList.add('animated'));
    };

    buttonsWithArrow.forEach((button) => {
        const icon = button.querySelector('svg');

        button.addEventListener('mouseover', () => {
            icon.classList.add('shake-in');
            icon.classList.remove('shake-out');
        });

        button.addEventListener('mouseout', () => {
            icon.classList.remove('shake-in');
            icon.classList.add('shake-out');
        });
    });
};