import { Form, Formik } from "formik";
import RegistrationForm from "./ui/registration-form";
import RegistrationLayout from "./ui/registration-layout";
import UiField from "../helpers/ui-field";
import UiDropdownField from "../helpers/ui-dropdown-field"
import UiButton from "../helpers/ui-button";

const classes = ['5А', '5Б', '6В', '11', '10', '9А'];

const Registration = () => {
    const regFields = [
        <UiField 
            type="text"
            id="reg_name"
            name="name"
            label="Имя:"
            placeholder="Введите Ваше имя"
        />,
        <UiField 
            type="text"
            id="reg_lastname"
            name="lastname"
            label="Фамилия:"
            placeholder="Введите Вашу фамилию"
        />,
        <UiDropdownField
            type="text"
            id="reg_class"
            name="class"
            label="Класс:"
            placeholder="Выберите Ваш класс"
            items={classes}
        />,
        <UiField 
            type="email"
            id="reg_email"
            name="email"
            label="Почта:"
            placeholder="Выберите почту"
        />,
        <UiField 
            type="text"
            id="reg_login"
            name="login"
            label="Логин:"
            placeholder="Введите логин"
        />,
        <UiField 
            type="password"
            id="reg_pass"
            name="password"
            label="Пароль:"
            placeholder="Введите пароль"
        />
    ]
    return (
        <RegistrationLayout>
            <Formik
                initialValues={{login: '', password: ''}}
                onSubmit={(values, submitProps) => {
                    console.log('Отправка формы reg')
                }}
                //validate={}
            > 
                {(values) => (
                    <Form clasasName="form">
                        <RegistrationForm 
                            regFields={regFields}
                            regBtn={<UiButton values={values}>Зарегистрироваться</UiButton>}
                        />
                    </Form>
                )}
            </Formik>
        </RegistrationLayout>
    )
}

export default Registration;