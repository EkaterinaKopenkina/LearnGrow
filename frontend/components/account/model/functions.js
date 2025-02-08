import { patchData } from "../../../api/api";

export const updateAccount  = async(values, submitProps, setStatusMessage, statusMessage, userId, token) => {
    const data = {
        lastname: values.lastname,
        name: values.name,
        email: values.email,
        login: values.login,
    }

    await patchData(`studentsUpdate/${userId}/`, data, setStatusMessage, statusMessage, token);
    submitProps.setSubmitting(false);
}