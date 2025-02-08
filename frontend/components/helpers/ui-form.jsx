import Link from "next/link";

const UiForm = ({fields, success, error, btn, hrefLink, textLink, hint, gridCount}) => {
    return (
        <>
            <div className={`form__fields form__fields--${gridCount}`}>{fields}</div>

            <div className="form__hint">
                {hint}
                <Link href={hrefLink} className="form__link">{textLink}</Link>
            </div>

            {!success || <div className="form__success">{success}</div>}
            {!error || <div className="form__error">{error}</div>}

            <div className="form__btn">{btn}</div>
        </>
    )
}

export default UiForm;