import srcErrorPng from "./img/error_404.png"
import srcErrorWebp from "./img/error_404.webp"

const UiError404 = () => {
    return (
        <div className="error-404">
            <div className="container">
                <div className="error-404__inner">
                    <picture>
                        <source srcSet={srcErrorWebp.src} type="image/webp" />
                        <img className="error-404__img" src={srcErrorPng.src} alt="Ошибка 404" />
					</picture>
                </div>
            </div>
        </div>
    )
}

export default UiError404;