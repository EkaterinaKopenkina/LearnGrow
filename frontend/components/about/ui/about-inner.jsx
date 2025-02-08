import Image from "next/image";

const AboutInner = ({aboutSrc, items}) => {
    return (
        <div className="about__container">
            <div className="about__photo">
                <Image className="about__academic" src={aboutSrc} alt="Ученый"/>
            </div>
            <div className="about__items-container">
                <h3 className="about__title">Наши курсы:</h3>
            
                <div className="about__items">{items}</div>
            </div>
        </div>
    )
}

export default AboutInner;