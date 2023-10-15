export const inputModule = () => {
    const setInputState = (inputClass, fieldClass, isFilled) => {
        const inputs = document.querySelectorAll(inputClass);

        inputs.forEach((input) => {
            const field = input.querySelector(fieldClass);

            field.addEventListener('focus', () => {
                input.classList.add('focused');
            });

            field.addEventListener('blur', (e) => {
                if (isFilled && e.target.value) {
                    return;
                }

                input.classList.remove('focused');
            });
        });
    };

    setInputState('.input', '.input__field');
    setInputState('.modal-input', '.modal-input__field', true);

    
};