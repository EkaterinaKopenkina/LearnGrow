const UiAuthLayout = ({children, title}) => {
    return (
        <section className="auth">
            <div className="container">
                <h1 className="auth__title">{title}</h1>
                {children}
            </div>
        </section>
    )
}

export default UiAuthLayout;