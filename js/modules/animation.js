export const animationModule = () => {
    window.onload = () => {
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
};