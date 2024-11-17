import Link from "next/link";

const RegistrationForm = ({regFields, regBtn}) => {
    return (
        <>
            <div className="registration__fields">{regFields}</div>

            <div className="registration__login">
                Создал аккаунт?  
                <Link href="/login" className="registration__link">Войди</Link>
            </div>


            <div className="registration__btn">{regBtn}</div>
        </>
    )
}

export default RegistrationForm;