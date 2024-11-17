import About from "../components/about/about";
import Intro from "../components/intro/intro";
import StudentsWay from "../components/students-way/students-way";
import TeachersWay from "../components/teachers-way/teacher-way";

const Index = () => {
    return (
        <>
            <Intro />
            <About />
            <StudentsWay />
            <TeachersWay />
        </>
    )
}

export default Index;