import { postData } from "../../../api/api";

export const login = async(values, submitProps, setStatusMessage, statusMessage, cookie, router) => {
    const data = {
        username: values.username,
        password: values.password,
    }
    
    const result = await postData('token/', data, setStatusMessage, statusMessage);
    if (result) {
        const token = result.access;
        const userId = result.user;

        if (cookie.cookies.login) {
            cookie.removeCookie('login');
            cookie.removeCookie('id');
        }
        cookie.setCookie('login', token, { path: '/' });
        cookie.setCookie('id', userId, { path: '/' });
        router.push(`/account/${userId}`)
    }

    submitProps.setSubmitting(false);
}