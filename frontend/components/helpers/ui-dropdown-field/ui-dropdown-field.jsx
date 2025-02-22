import { Field } from "formik";
import { useState } from "react";
import DropdownFieldItem from "./ui/dropdown-field-item";
import DropdownFieldLayout from "./ui/dropdown-field-layout";

const UiDropdownField = ({type, 
    id, 
    name, 
    label, 
    placeholder, 
    items, 
    setCurrentValue, 
    component = 'input', 
    variants, 
    custom
}) => {
    const [inputValue, setInputValue] = useState(null);
    const field = <Field className="form__dropdown-field" 
                    id={id} type={type} 
                    name={name} 
                    placeholder={placeholder} 
                    component={component} 
                  />

    return (
        <DropdownFieldLayout
            id={id}
            label={label}
            field = {field}
            inputValue={inputValue}
            placeholder={placeholder}
            name={name}
            variants={variants}
            custom={custom}
        >
            {items.map(item => <DropdownFieldItem
                key={item.id}
                item={item}
                setCurrentValue={setCurrentValue}
                setInputValue={setInputValue}
                nameField={name}
            />)}
        </DropdownFieldLayout>
    )
}

export default UiDropdownField;