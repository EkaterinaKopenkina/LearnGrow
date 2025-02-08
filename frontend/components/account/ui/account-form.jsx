const AccountForm = ({fields, btn, success, error}) => {
    return (
        <>
            <div className="account__fields">{fields}</div>

            {!success || <div className="form__success">{success}</div>}
            {!error || <div className="form__error">{error}</div>}
            
            <div className="account__btn">{btn}</div>
        </>
    )
}

export default AccountForm;