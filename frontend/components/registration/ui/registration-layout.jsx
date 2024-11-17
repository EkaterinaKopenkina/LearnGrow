const RegistrationLayout = ({children}) => {
    return (
        <section className="registration">
            <div className="container">
                <h1 className="registration__title">Регистрация</h1>
            
                {children}
            </div>
        </section>
    )
}

export default RegistrationLayout;