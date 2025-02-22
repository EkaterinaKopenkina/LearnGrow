import { ErrorMessage } from "formik";
import ArrowTopIcon from "../../icons/arrow-top-icon";
import clsx from "clsx";
import { motion } from "framer-motion";

const DropdownFieldLayout = ({children, id, label, field, inputValue, placeholder, name, variants, custom}) => {
    return (
        <motion.div 
            className="from__field-container"
            variants={variants}
            custom={custom}
        >
            <div className="form__label-container">
                <label htmlFor={id} className="form__label">{label}</label>
            </div>

            <div className="form__dropdown-field-container">
                {field}

                <button disabled className={clsx(
                    "form__dropdown-btn",
                    inputValue && "form__dropdown-btn--value"
                )}>
                    {inputValue || placeholder}
                    <ArrowTopIcon className="form__dropdown-icon"/>
                </button>

                <div className="form__dropdown-list-container">
                    <div className="form__dropdown-list">
                        {children}
                    </div>
                </div>
            </div>

            <ErrorMessage className="form__error" name={name} component='div'/>
        </motion.div>
    )
}

export default DropdownFieldLayout;