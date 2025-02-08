import Image from "next/image";

const WayItem = ({iconBg, image, text, numStep}) => {
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

export default WayItem;