import { ErrorMessage, Field } from "formik";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const UiField = forwardRef(({type, id, name, label, placeholder, component = 'input'}, ref) => {
    return (
        <div className="form__field-container" ref={ref}>
            <div className="form__label-container">
                <label htmlFor={id} className="form__label">{label}</label>
            </div>

            <Field className="form__field" id={id} type={type} name={name} placeholder={placeholder} component={component} />
            <ErrorMessage className="form__warning" name={name} component='div'/>
        </div>
    )
})

const UiMField = motion(UiField);

export default UiMField;