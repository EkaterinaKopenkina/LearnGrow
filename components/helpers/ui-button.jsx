const UiButton = ({children, values}) => {
    return (
        <button type="submit" className="btn" disabled={values.isSubmitting}>{children}</button>
    )
}

export default UiButton;