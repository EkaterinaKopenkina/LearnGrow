import Image from "next/image";
import srcError from "./img/error.svg"
import { motion } from "framer-motion";
import { scaleAnimation } from "../../animation/animation";

const UiError = () => {
    return (
        <motion.div 
            className="error"
            initial="hidden"
            animate="visible"
            variants={scaleAnimation}
            custom={3}
        >
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
        </motion.div>
    )
}

export default UiError;