import { Form, Formik } from "formik";
import UiAuthLayout from "../helpers/ui-auth-layout"
import UiButton from "../helpers/ui-button";
import { getFields, getInitialValues, registration } from "./model/functions";
import { useState } from "react";
import { validateReg } from "./model/validator";
import UiForm from "../helpers/ui-form";

const Registration = ({classes}) => {
    const [statusMessage, setStatusMessage] = useState({error: null, success: null});

    return (
        <UiAuthLayout title='Регистрация'>
            <Formik
                initialValues={getInitialValues()}
                validate={validateReg}
                onSubmit={(values, submitProps) => {
                    registration(values, submitProps, setStatusMessage, statusMessage);
                }}
                
            > 
                {(values) => {
                    return (
                    <Form clasasName="form">
                        <UiForm 
                            fields={getFields(classes, values.setFieldValue)}
                            success={statusMessage.success}
                            error={statusMessage.error}
                            btn={<UiButton values={values}>Зарегистрироваться</UiButton>}
                            hrefLink='/login'
                            textLink='Войди'
                            hint='Создал аккаунт?'
                            gridCount={3}
                        />
                    </Form>)
                }}
            </Formik>
        </UiAuthLayout>
    )
}

export default Registration;