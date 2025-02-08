const UiSection = ({children, title, color, subtitle = null, className = null}) => {
    return (
        <section className={`${className || ''} ${'section'} section--${color}`}>
            <div className="container">
                <div className="section__title-container">
                    <h2 className="section__title">{title}</h2>
                    <p className="section__subtitle">{subtitle}</p>
                </div>
                {children}
            </div>
        </section>
    )
}

export default UiSection;