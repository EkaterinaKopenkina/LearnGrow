import { ErrorMessage, Field, setIn } from "formik";
import ArrowTopIcon from "./icons/arrow-top-icon";
import { useState } from "react";
import clsx from "clsx";

const UiDropdownField = ({type, id, name, label, placeholder, items, setCurrentValue, component = 'input'}) => {
    const [inputValue, setInputValue] = useState(null);

    return (
        <div className="from__field-container">
            <div className="form__label-container">
                <label htmlFor={id} className="form__label">{label}</label>
            </div>

            <div className="form__dropdown-field-container">
                <Field className="form__dropdown-field" 
                    id={id} type={type} 
                    name={name} 
                    placeholder={placeholder} 
                    component={component} 
                />
                <button disabled className={clsx(
                    "form__dropdown-btn",
                    inputValue && "form__dropdown-btn--value"
                )}>
                    {inputValue || placeholder}
                    <ArrowTopIcon className="form__dropdown-icon"/>
                </button>

                <div className="form__dropdown-list-container">
                    <div className="form__dropdown-list">
                        {items.map(item => <UiDrowdownItem
                            key={item.id}
                            item={item}
                            setCurrentValue={setCurrentValue}
                            setInputValue={setInputValue}
                            nameField={name}
                        />)}
                    </div>
                </div>
            </div>

            <ErrorMessage className="form__error" name={name} component='div'/>
        </div>
    )
}

const UiDrowdownItem = ({item, setCurrentValue, setInputValue, nameField}) => {
    return (
        <div onClick={() => {
            setCurrentValue(nameField, item.id); 
            setInputValue(item.title)
        }} 
        className="form__dropdown-item">
            {item.title}
        </div>
    )
}

export default UiDropdownField;