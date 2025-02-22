import { motion } from "framer-motion";
import { leftAnimation } from "../../../../animation/animation";

const SidebarInner = ({children}) => {
    return (
        <motion.aside 
            className="sidebar"
            initial="hidden"
            animate="visible"
            variants={leftAnimation}
            custom={2}
        >
            <nav className="sidebar__inner">
                {children}
            </nav>
        </motion.aside>
    )
}

export default SidebarInner;