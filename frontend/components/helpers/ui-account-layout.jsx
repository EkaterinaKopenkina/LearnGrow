import { motion } from "framer-motion";
import { leftAnimation } from "../../animation/animation";

const UiAccountLayout = ({title, children, className}) => {
    return (
        <motion.section 
            className={`${className || ''} account`}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
        >
            <motion.h1 
                className="account__title"
                variants={leftAnimation}
                custom={3}
            >
                {title}
            </motion.h1>
            
            {children}
        </motion.section>
    )
}

export default UiAccountLayout;