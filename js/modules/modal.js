export const modalModule = () => {
    const header = document.querySelector('.header');
    const buttonsLogin = document.querySelectorAll('.login');
    const modalAuth = document.querySelector('.modal-auth');
    const navigation = document.querySelector('.navigation');
    const burgerButton = document.querySelector('.burger');
    const modalAuthOverlay = document.querySelector('.modal-auth .modal__overlay');
    const buttonClose = document.querySelector('.modal-auth .modal__close');
    const buttonCloseInner = document.querySelector('.modal-auth .modal__close-inner');

    const closeElements = [modalAuthOverlay, buttonClose, buttonCloseInner];

    const setPaddings = (needClear = false) => {
        const scrollbarSize = window.innerWidth - document.documentElement.clientWidth;
        const headerStyle = window.getComputedStyle(header);
        const headerPaggingRight = parseInt(headerStyle.getPropertyValue('padding-right'));

        if (needClear) {
            document.body.style.paddingRight = '0px';
            header.style.paddingRight = `${headerPaggingRight - scrollbarSize}px`;

            return;
        }

        document.body.style.paddingRight = `${scrollbarSize}px`;
        header.style.paddingRight = `${headerPaggingRight + scrollbarSize}px`;
    };

    const clearInputs = () => {
        const inputs = modalAuth.querySelectorAll('.modal-input__field');
        inputs.forEach(input => input.value = '');
    };

    buttonsLogin.forEach((button) => {
        button.addEventListener('click', () => {
            modalAuth.classList.add('open');
            navigation.classList.remove('open');
            burgerButton.classList.remove('open');

            setPaddings();
            document.body.classList.add('hidden');
        });
    });

    closeElements.forEach((elem) => {
        elem.addEventListener('click', () => {
            modalAuth.classList.remove('open');
            document.body.classList.remove('hidden');

            setPaddings(true);
            clearInputs();
        });
    });
};