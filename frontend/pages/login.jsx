import Login from "../components/login/login";
import LoginContainer from "../components/login/login-container";

const LoginPage = ({cookie, router}) => {
    return <LoginContainer cookie={cookie} router={router} />
}

export default LoginPage;