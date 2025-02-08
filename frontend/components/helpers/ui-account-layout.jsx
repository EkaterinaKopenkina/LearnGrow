const UiAccountLayout = ({title, children, className}) => {
    return (
        <section className={`${className} account`}>
            <h1 className="account__title">{title}</h1>
            {children}
        </section>
    )
}

export default UiAccountLayout;