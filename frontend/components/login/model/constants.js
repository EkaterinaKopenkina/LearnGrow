import UiField from "../../helpers/ui-field";

export const loginFields = [
    <UiField key={1}
        type="text"
        id="login_login"
        name="username"
        label="Логин:"
        placeholder="Введите логин"
    />,
    <UiField key={2}
        type="password"
        id="login_pass"
        name="password"
        label="Пароль:"
        placeholder="Введите пароль"
    />
]

export const loginInitialValues = {
    username: '', 
    password: ''
}