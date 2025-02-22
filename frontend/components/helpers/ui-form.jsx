import Link from "next/link";
import { motion } from 'framer-motion'
import { bottomAnimation } from "../../animation/animation";

const UiForm = ({fields, success, error, btn, hrefLink, textLink, hint, gridCount, customHint, customBtn}) => {
    return (
        <div>
            <div className={`form__fields form__fields--${gridCount}`}>{fields}</div>

            <motion.div 
                className="form__hint"
                variants={bottomAnimation}
                custom={customHint}
            >
                {hint}
                <Link href={hrefLink} className="form__link">{textLink}</Link>
            </motion.div>

            <div className="form__status">
                {!success || <div className="form__success">{success}</div>}
                {!error || <div className="form__error">{error}</div>}
            </div>

            <motion.div 
                className="form__btn"
                variants={bottomAnimation}
                custom={customBtn}
            >
                {btn}
            </motion.div>
        </div>
    )
}

export default UiForm;