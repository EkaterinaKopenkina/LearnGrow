import Image from "next/image";
import srcError from "./img/error.svg"

const UiError = () => {
    return (
        <div className="error">
            <div className="container">
                <div className="error__inner">
                    <div className="error__img-container">
                        <Image className="error__img" src={srcError} alt="Ошибка" />
                    </div>

                    <p className="error__text">
                        Произошла ошибка на сервере! Ведется работа по устранению неполадок
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UiError;