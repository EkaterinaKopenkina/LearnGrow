import Image from "next/image";
import iconBg from "./img/icon-bg.svg";

const UiWay = ({steps}) => {
    return (
        <div className="way__items">
            {steps.map((step, i) => <WayItem key={i}
                image={step.image} 
                text={step.text}
                numStep={i+1} />
            )}
        </div>
    )
}

const WayItem = ({image, text, numStep}) => {
    return (
        <div className="way__item">
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
}

export default UiWay;