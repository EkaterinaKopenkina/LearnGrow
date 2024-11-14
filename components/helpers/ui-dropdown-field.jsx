import { ErrorMessage, Field } from "formik";
import ArrowTopIcon from "./icons/arrow-top-icon";
import { useState } from "react";
import clsx from "clsx";

const UiDropdownField = ({type, id, name, label, placeholder, items, component = 'input'}) => {
    const [inputsValue, setInputsValue] = useState("");
    
    return (
        <div className="from__field-container">
            <div className="form__label-container">
                <label htmlFor={id} className="form__label">{label}</label>
            </div>

            <div className="form__dropdown-field-container">
                <Field className="form__dropdown-field" value={inputsValue} id={id} type={type} name={name} placeholder={placeholder} component={component} />
                <button disabled className={clsx(
                    "form__dropdown-btn",
                    inputsValue && "form__dropdown-btn--value"
                )}>
                    {inputsValue || placeholder}
                    <ArrowTopIcon className="form__dropdown-icon"/>
                </button>

                <div className="form__dropdown-list-container">
                    <div className="form__dropdown-list">
                        {items.map((item, i) => <UiDrowdownItem
                            key={i}
                            item={item}
                            setInputsValue={setInputsValue}
                        />)}
                    </div>
                </div>
            </div>

            <ErrorMessage className="form__error" name={name} component='div'/>
        </div>
    )
}

const UiDrowdownItem = ({item, setInputsValue}) => {
    return (
        <div onClick={() => {setInputsValue(item)}} className="form__dropdown-item">
            {item}
        </div>
    )
}

export default UiDropdownField;