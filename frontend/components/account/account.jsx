import { Form, Formik } from "formik";
import UiAccountLayout from "../helpers/ui-account-layout";
import { accountFields } from "./model/constants";
import AccountForm from "./ui/account-form";
import UiButton from "../helpers/ui-button";
import { validateAccount } from "./model/validator";
import { updateAccount } from "./model/functions";
import { useState } from "react";

const Account = ({data, userId, token}) => {
    const [statusMessage, setStatusMessage] = useState({error: null, success: null});

    return (
        <UiAccountLayout title="Личный кабинет">
            <Formik
                initialValues={{
                    lastname: data.lastname,
                    name: data.name,
                    email: data.email,
                    login: data.login,
                }}
                validate={validateAccount}
                onSubmit={(values, submitProps) => {
                    updateAccount(values, submitProps, setStatusMessage, statusMessage, userId, token);
                }}
            > 
                {(values) => (
                    <Form className="form">
                        <AccountForm 
                            fields={accountFields}
                            btn={<UiButton values={values}>Сохранить</UiButton>}
                            success={statusMessage.success}
                            error={statusMessage.error}
                            custom={6}
                        />
                    </Form>
                )}
            </Formik>
        </UiAccountLayout>
    )
}

export default Account;