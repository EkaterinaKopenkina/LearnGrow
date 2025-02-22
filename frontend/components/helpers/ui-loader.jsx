const UiLoader = ({container}) => {
    return (
        <>
            {
                container
                ? <div className="loader__container"><span className="loader"></span></div>
                : <span className="loader"></span>
            }
        </>
    )
}

export default UiLoader;