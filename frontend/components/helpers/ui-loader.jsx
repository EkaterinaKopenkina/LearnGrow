const UiLoader = ({container}) => {
    return (
        <>
            {
                container
                ? <div className="loader__container"><span class="loader"></span></div>
                : <span class="loader"></span>
            }
        </>
    )
}

export default UiLoader;