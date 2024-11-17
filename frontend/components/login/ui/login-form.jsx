import Link from "next/link";

const LoginForm = ({loginBtn, loginFields}) => {
    return (
        <>
            <div className="login__fields">{loginFields}</div>

            <div className="login__reg">
                Нет аккаунта?  
                <Link href="/registration" className="login__link">Зарегистрируйся</Link>
            </div>

            <div className="login__btn">{loginBtn}</div>
        </>
    )
}

export default LoginForm;