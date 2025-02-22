import { motion } from "framer-motion";
import { leftAnimation, rightAnimation } from "../../animation/animation";

const UiSection = ({children, title, color, subtitle = null, className = null}) => {
    return (
        <motion.section 
            className={`${className || ''} section section--${color}`}
            viewport={{ amount: 0.2 }}
            initial="hidden"
            whileInView="visible"
        >
            <div className="container">
                <div className="section__title-container">
                    <motion.h2
                        className="section__title"
                        variants={leftAnimation}
                        custom={1}
                    >
                        {title}
                    </motion.h2>
                    <motion.p 
                        className="section__subtitle"
                        variants={rightAnimation}
                        custom={1}
                    >
                        {subtitle}
                    </motion.p>
                </div>
                {children}
            </div>
        </motion.section>
    )
}

export default UiSection;