import Link from "next/link";
import lessonSrc from "../img/lesson_bg.jpg";

const CourseItem = ({lesson, id}) => {
    return (
        <Link href={`/account/lesson/${id}`} className="course__item">
            <img src={lessonSrc.src} alt="Урок" className="course__img" />
            <h3 className="course__lesson">{lesson}</h3>
        </Link>
    )
}

export default CourseItem;