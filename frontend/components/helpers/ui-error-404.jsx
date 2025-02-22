import { scaleAnimation } from "../../animation/animation"
import srcErrorPng from "./img/error_404.png"
import srcErrorWebp from "./img/error_404.webp"
import { motion } from "framer-motion"

const UiError404 = () => {
    return (
        <motion.div 
            className="error-404"
            initial="hidden"
            animate="visible"
            variants={scaleAnimation}
            custom={3}
        >
            <div className="container">
                <div className="error-404__inner">
                    <picture>
                        <source srcSet={srcErrorWebp.src} type="image/webp" />
                        <img className="error-404__img" src={srcErrorPng.src} alt="Ошибка 404" />
					</picture>
                </div>
            </div>
        </motion.div>
    )
}

export default UiError404;