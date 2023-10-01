export const tabsModule = () => {
    const tabsButtons = document.querySelectorAll('.example__tab-button');

    tabsButtons.forEach((tabButton) => {
        tabButton.addEventListener('click', () => {
            tabsButtons.forEach((button) => {
                button.parentElement.classList.remove('active');
            });

            tabButton.parentElement.classList.add('active');
        });
    });
};