import { Form, Formik } from "formik";
import UiButton from "../helpers/ui-button";
import UiField from "../helpers/ui-field";
import LoginForm from "./ui/login-form";
import LoginLayout from "./ui/login-layout";

const Login = () => {
    const loginFields = [
        <UiField 
            type="text"
            id="login_login"
            name="login"
            label="Логин:"
            placeholder="Введите логин"
        />,
        <UiField 
            type="password"
            id="login_pass"
            name="password"
            label="Пароль:"
            placeholder="Введите пароль"
        />
    ]
    return (
        <LoginLayout>
            <Formik
                initialValues={{login: '', password: ''}}
                onSubmit={(values, submitProps) => {
                    console.log('Отправка формы login')
                }}
                //validate={}
            > 
                {(values) => (
                    <Form clasasName="form">
                        <LoginForm 
                            loginBtn={<UiButton values={values}>Войти</UiButton>} 
                            loginFields={loginFields}
                        />
                    </Form>
                )}
            </Formik>
        </LoginLayout>
    )
}

export default Login;