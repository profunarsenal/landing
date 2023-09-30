export const tabsModule = () => {
    const tabsBlock = document.querySelector('.example__tabs');

    tabsBlock.addEventListener('click', (e) => {
        const tabsButtons = tabsBlock.querySelectorAll('.example__tab');

        if (!e.target.classList.contains('active')) {
            tabsButtons.forEach((tabsButton) => {
                tabsButton.classList.remove('active');
            });

            e.target.classList.add('active');
        }
    });
};