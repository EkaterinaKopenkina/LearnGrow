import { leftAnimation, rightAnimation } from "../../../animation/animation";
import UiMField from "../../helpers/ui-field";

export const accountFields = [
    <UiMField key={1}
        type="text"
        id="reg_lastname"
        name="lastname"
        label="Фамилия:"
        placeholder="Введите Вашу фамилию"
        variants={leftAnimation}
        custom={4}
    />,
    <UiMField key={2}
        type="email"
        id="reg__email"
        name="email"
        label="Почта:"
        placeholder="Введите Вашу почту"
        variants={rightAnimation}
        custom={4}
    />,
    <UiMField key={3}
        type="text"
        id="reg_name"
        name="name"
        label="Имя:"
        placeholder="Введите Ваше имя"
        variants={leftAnimation}
        custom={5}
    />,
    <UiMField key={4}
        type="text"
        id="reg_login"
        name="login"
        label="Логин:"
        placeholder="Введите Ваш логин"
        variants={rightAnimation}
        custom={5}
    />,
]