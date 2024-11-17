import Image from "next/image";

const AboutItem = ({src, text}) => {
    return (
        <div className="about__item">
            <div className="about__icon-container">
                <Image className="about__icon" src={src} alt='Иконка'/>
            </div>
            <p className="about__text">{text}</p>
        </div>
    )
}

export default AboutItem;