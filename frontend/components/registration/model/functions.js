import UiMField from "../../helpers/ui-field";
import UiDropdownField from "../../helpers/ui-dropdown-field/ui-dropdown-field";
import { postData } from "../../../api/api";
import { scaleAnimation } from "../../../animation/animation";

export const getFields = (classes, setClass) => {
    return [
        <UiMField key={1}
            type="text"
            id="reg_name"
            name="name"
            label="Имя:"
            placeholder="Введите Ваше имя"
            variants={scaleAnimation}
            custom={3}
        />,
        <UiMField key={2}
            type="text"
            id="reg_lastname"
            name="lastname"
            label="Фамилия:"
            placeholder="Введите Вашу фамилию"
            variants={scaleAnimation}
            custom={4}
        />,
        <UiDropdownField key={3}
            type="text"
            id="reg_class"
            name="class_id"
            label="Класс:"
            placeholder="Выберите Ваш класс"
            items={classes}
            setCurrentValue={setClass}
            variants={scaleAnimation}
            custom={5}
        />,
        <UiMField key={4}
            type="email"
            id="reg_email"
            name="email"
            label="Почта:"
            placeholder="Выберите почту"
            variants={scaleAnimation}
            custom={6}
        />,
        <UiMField key={5}
            type="text"
            id="reg_login"
            name="login"
            label="Логин:"
            placeholder="Введите логин"
            variants={scaleAnimation}
            custom={7}
        />,
        <UiMField key={6}
            type="password"
            id="reg_pass"
            name="password"
            label="Пароль:"
            placeholder="Введите пароль"
            variants={scaleAnimation}
            custom={8}
        />
    ]
}

export const getInitialValues = () => {
    return  {
        lastname: '',
        name: '',
        class_id: null,
        email: '',
        login: '',
        password: '',
    }
}

export const registration = async(values, submitProps, setStatusMessage, statusMessage) => {
    const data = {
        lastname: values.lastname,
        name: values.name,
        email: values.email,
        login: values.login,
        password: values.password,
        username: values.login,
        class_id: values.class_id
    }

    await postData('students/', data, setStatusMessage, statusMessage);
    submitProps.setSubmitting(false);
}