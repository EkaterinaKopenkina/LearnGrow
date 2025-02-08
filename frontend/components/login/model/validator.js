export const validateLogin = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Пустое поле';
    }
    if (!values.password) {
        errors.password = 'Пустое поле';
    } else if (values.password.length < 4) {
        errors.password = 'Пароль не должен быть короче 4 символов';
    }

    return errors;
}