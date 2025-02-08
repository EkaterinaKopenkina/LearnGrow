import UiAccountLayout from "../helpers/ui-account-layout";
import { courseData } from "./model/constants";
import CourseTeacher from "./ui/course-teacher";
import UiGrid4 from "../helpers/ui-grid-4";
import CourseItem from "./ui/course-item";

const Course = () => {
    return (
        <UiAccountLayout className="course" title={courseData.title}>
            <CourseTeacher 
                name={courseData.teahcer.name} 
                photo={courseData.teahcer.photo}
            />

            <UiGrid4 className="course__items">
                {courseData.lessons.map(lesson => <CourseItem key={lesson.id}
                    lesson={lesson.title} 
                    id={lesson.id}
                />)}
            </UiGrid4>
        </UiAccountLayout>
    )
}

export default Course;