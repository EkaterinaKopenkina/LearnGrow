import { motion } from 'framer-motion'
import { leftAnimation } from '../../animation/animation';

const UiAuthLayout = ({children, title}) => {
    return (
        <motion.section 
            className="auth"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
        >
            <div className="container">
                <motion.h1 
                    className="auth__title"
                    variants={leftAnimation}
                    custom={1}
                >{title}</motion.h1>

                {children}
            </div>
        </motion.section>
    )
}

export default UiAuthLayout;