import introSrc from "./img/intro.svg"
import Image from "next/image";

const Intro = () => {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro__inner">
                    <div className="intro__content">
                        <h1 className="intro__title">Learn & Grow</h1>
                        <p className="intro__subtitle">
                            Сервис для школьного <br />
                            Онлайн-обучения
                        </p>
                    </div>

                    <div className="intro__img-container">
                        <Image className="intro__img" src={introSrc} alt="Интро" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;