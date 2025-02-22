const DropdownFieldItem = ({item, setCurrentValue, setInputValue, nameField}) => {
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

export default DropdownFieldItem;