import introSrc from "./img/intro.svg"
import Image from "next/image";
import { motion } from "framer-motion";
import { leftAnimation, rightAnimation } from "../../animation/animation";

const Intro = () => {
    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            className="intro"
        >
            <div className="container">
                <div className="intro__inner">
                    <motion.div 
                        custom={2}
                        variants={leftAnimation}
                        className="intro__content"
                    >
                        <h1 className="intro__title">Learn & Grow</h1>
                        <p className="intro__subtitle">
                            Сервис для школьного <br />
                            Онлайн-обучения
                        </p>
                    </motion.div>

                    <motion.div 
                        custom={2}
                        variants={rightAnimation}
                        className="intro__img-container"
                    >
                        <Image className="intro__img" src={introSrc} alt="Интро" />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Intro;