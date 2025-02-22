import { leftAnimation, rightAnimation } from "../../../animation/animation";
import UiMField from "../../helpers/ui-field";

export const loginFields = [
    <UiMField key={1}
        type="text"
        id="login_login"
        name="username"
        label="Логин:"
        placeholder="Введите логин"
        variants={leftAnimation}
        custom={2}
    />,
    <UiMField key={2}
        type="password"
        id="login_pass"
        name="password"
        label="Пароль:"
        placeholder="Введите пароль"
        variants={rightAnimation}
        custom={3}
    />
]

export const loginInitialValues = {
    username: '', 
    password: ''
}