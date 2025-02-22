import { motion } from "framer-motion";
import { bottomAnimation } from "../../../animation/animation";

const AccountForm = ({fields, btn, success, error, custom}) => {
    return (
        <>
            <div className="account__fields">{fields}</div>

            <div className="form__status">
                {!success || <div className="form__success">{success}</div>}
                {!error || <div className="form__error">{error}</div>}
            </div>
            
            <motion.div 
                className="account__btn"
                variants={bottomAnimation}
                custom={custom}
            >
                {btn}
            </motion.div>
        </>
    )
}

export default AccountForm;