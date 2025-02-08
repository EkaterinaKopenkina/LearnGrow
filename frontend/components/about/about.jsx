import UiSection from "../helpers/ui-section";
import AboutItem from "./ui/about-item";
import aboutSrc from "./img/about.svg";
import about1 from "./img/about1.svg";
import about2 from "./img/about2.svg";
import about3 from "./img/about3.svg";
import about4 from "./img/about4.svg";
import AboutInner from "./ui/about-inner";

const About = () => {
    const items = [
        <AboutItem 
            key={1}
            src={about1} 
            text={`помогают улучшить оценки и
                подготовиться к экзаменам`} 
        />,
        <AboutItem 
            key={2}
            src={about2} 
            text={`развивают творческие способности
            и навыки 21 века`} 
        />,
        <AboutItem 
            key={3}
            src={about3} 
            text={`ведутся опытными преподавателями`} 
        />,
        <AboutItem 
            key={4}
            src={about4} 
            text={`проходят онлайн - в удобном для тебя
            формате`} 
        />
    ]

    return (
        <UiSection 
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
        </UiSection>
    )
}

export default About;