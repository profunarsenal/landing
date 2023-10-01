export const menuModule = () => {
    const burgerButton = document.querySelector('.burger');
    const navigation = document.querySelector('.navigation');

    burgerButton.addEventListener('click', (e) => {
        burgerButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });
};