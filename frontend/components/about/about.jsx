import Image from "next/image";
import UiSection from "../helpers/ui-section";
import AboutItem from "./about-item";
import about from "./img/about.svg";
import about1 from "./img/about1.svg";
import about2 from "./img/about2.svg";
import about3 from "./img/about3.svg";
import about4 from "./img/about4.svg";


const About = () => {
    return (
        <UiSection 
            title='Добро пожаловать в Learn & Grow' 
            color='2'
            subtitle = {`Здесь ты найдешь интересные и 
                полезные курсы для школьников
                по самым разным предметам: 
                от математики до программирования`}
        >
            <div className="container">
                <div className="about__container">
                    <div className="about__photo">
                        <Image className="about__academic" src={about} alt="Ученый"/>
                    </div>
                    <div className="about__items-container">
                        <h3 className="about__title">Наши курсы:</h3>
                    
                        <div className="about__items">
                            <AboutItem 
                                src={about1} 
                                text={`помогают улучшить оценки и
                                    подготовиться к экзаменам`} 
                            />
                            <AboutItem 
                                src={about2} 
                                text={`развивают творческие способности
                                и навыки 21 века`} 
                            />
                            <AboutItem 
                                src={about3} 
                                text={`ведутся опытными преподавателями`} 
                            />
                            <AboutItem 
                                src={about4} 
                                text={`проходят онлайн - в удобном для тебя
                                формате`} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </UiSection>
    )
}

export default About;