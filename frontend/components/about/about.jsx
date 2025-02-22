import UiMSection from "../helpers/ui-section";
import MAboutItem from "./ui/about-item";
import aboutSrc from "./img/about.svg";
import about1 from "./img/about1.svg";
import about2 from "./img/about2.svg";
import about3 from "./img/about3.svg";
import about4 from "./img/about4.svg";
import AboutInner from "./ui/about-inner";
import { bottomAnimation } from "../../animation/animation";

const About = () => {
    const items = [
        <MAboutItem
            variants={bottomAnimation} 
            custom={1}
            key={1}
            src={about1} 
            text={`помогают улучшить оценки и
                подготовиться к экзаменам`} 
        />,
        <MAboutItem 
            variants={bottomAnimation} 
            custom={2}
            key={2}
            src={about2} 
            text={`развивают творческие способности
            и навыки 21 века`} 
        />,
        <MAboutItem 
            variants={bottomAnimation} 
            custom={3}
            key={3}
            src={about3} 
            text={`ведутся опытными преподавателями`} 
        />,
        <MAboutItem 
            variants={bottomAnimation} 
            custom={4}
            key={4}
            src={about4} 
            text={`проходят онлайн - в удобном для тебя
            формате`} 
        />
    ]

    return (
        <UiMSection 
            title='Добро пожаловать в Learn & Grow' 
            color='2'
            subtitle = {`Здесь ты найдешь интересные и 
                полезные курсы для школьников
                по самым разным предметам: 
                от математики до программирования`}
        >
            <AboutInner
                aboutSrc={aboutSrc}
                items={items}
             />
        </UiMSection>
    )
}

export default About;