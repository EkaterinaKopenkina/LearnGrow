import { Form, Formik } from "formik";
import UiButton from "../helpers/ui-button";
import { loginFields, loginInitialValues } from "./model/constants";
import { validateLogin } from "./model/validator";
import { useState } from "react";
import UiForm from "../helpers/ui-form";
import UiAuthLayout from "../helpers/ui-auth-layout";

const Login = ({cookie, router, login}) => {
    const [statusMessage, setStatusMessage] = useState({error: null, success: null});

    return (
        <UiAuthLayout title='Вход'>
            <Formik
                initialValues={loginInitialValues}
                validate={validateLogin}
                onSubmit={(values, submitProps) => {
                    login(values, submitProps, setStatusMessage, statusMessage, cookie, router);
                }}
            > 
                {(values) => (
                    <Form className="form">
                        <UiForm 
                            fields={loginFields}
                            success={statusMessage.success}
                            error={statusMessage.error}
                            btn={<UiButton values={values}>Войти</UiButton>} 
                            hrefLink='/registration'
                            textLink='Зарегистрируйся'
                            hint='Нет аккаунта?'
                            gridCount={2}
                            customBtn={5}
                            customHint={4}
                        />
                    </Form>
                )}
            </Formik>
        </UiAuthLayout>
    )
}

export default Login;