import UiField from "../../helpers/ui-field";

export const accountFields = [
    <UiField key={1}
        type="text"
        id="reg_lastname"
        name="lastname"
        label="Фамилия:"
        placeholder="Введите Вашу фамилию"
    />,
    <UiField key={2}
        type="email"
        id="reg__email"
        name="email"
        label="Почта:"
        placeholder="Введите Вашу почту"
    />,
    <UiField key={3}
        type="text"
        id="reg_name"
        name="name"
        label="Имя:"
        placeholder="Введите Ваше имя"
    />,
    <UiField key={4}
        type="text"
        id="reg_login"
        name="login"
        label="Логин:"
        placeholder="Введите Ваш логин"
    />,
]