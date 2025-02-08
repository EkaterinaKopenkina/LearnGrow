export const validateAccount = (values) => {
    const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const errors = {};

    if (!values.name) {
        errors.name = 'Пустое поле';
    }
    if (!values.lastname) {
        errors.lastname = 'Пустое поле';
    }
    if (!values.email) {
        errors.email = 'Пустое поле';
    } else if (!rEmail.test(values.email)) {
        errors.email = 'Введено некорректное значение';
    }
    if (!values.login) {
        errors.login = 'Пустое поле';
    }

    return errors;
}