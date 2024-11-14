const LoginLayout = ({children}) => {
    return (
        <section className="login">
            <div className="container">
                <h1 className="login__title">Вход</h1>
                {children}
            </div>
        </section>
    )
}

export default LoginLayout