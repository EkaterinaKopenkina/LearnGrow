import { motion } from "framer-motion";
import Image from "next/image";
import { forwardRef } from "react";

const WayItem = forwardRef(({iconBg, image, text, numStep}, ref) => {
    return (
        <div className="way__item" ref={ref}>
            <div className="way__icons-container">
                <div className="way__icons">
                    <Image 
                        className="way__icon-bg"
                        src={iconBg}
                        alt="Фон иконки" 
                    />
                    <Image 
                        className="way__icon"
                        src={image}
                        alt="Иконки" 
                    />
                </div>
            </div>

            <h4 className="way__step">{numStep} шаг</h4>
            <p className="way__text">{text}</p>
        </div>
    )
})

const MWayItem = motion(WayItem);

export default MWayItem;