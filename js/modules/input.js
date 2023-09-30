export const inputModule = () => {
    const inputs = document.querySelectorAll('.input');

    inputs.forEach((input) => {
        const field = input.querySelector('.input__field');

        field.addEventListener('focus', () => {
            input.classList.add('focused');
        });

        field.addEventListener('blur', () => {
            input.classList.remove('focused');
        });
    });
};