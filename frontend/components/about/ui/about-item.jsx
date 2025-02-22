import { motion } from "framer-motion";
import Image from "next/image";
import { forwardRef } from "react";

const AboutItem = forwardRef(({src, text}, ref) => {
    return (
        <div className="about__item" ref={ref}>
            <div className="about__icon-container">
                <Image className="about__icon" src={src} alt='Иконка'/>
            </div>
            <p className="about__text">{text}</p>
        </div>
    )
})

const MAboutItem = motion(AboutItem);

export default MAboutItem;