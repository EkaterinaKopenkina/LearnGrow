import { ErrorMessage, Field } from "formik";

const UiField = ({type, id, name, label, placeholder, component = 'input'}) => {
    return (
        <div className="from__field-container">
            <div className="form__label-container">
                <label htmlFor={id} className="form__label">{label}</label>
            </div>

            <Field className="form__field" id={id} type={type} name={name} placeholder={placeholder} component={component} />
            <ErrorMessage className="form__error" name={name} component='div'/>
        </div>
    )
}

export default UiField;