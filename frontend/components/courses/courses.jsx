import UiAccountLayout from "../helpers/ui-account-layout";
import UiGrid3 from "../helpers/ui-grid-3";
import { data } from "./model/constants";
import CoursesItem from "./ui/courses-item";

const Courses = () => {
    return (
        <UiAccountLayout title="Мои курсы">
            <UiGrid3 className="courses">
                {data.map(item => 
                    <CoursesItem
                        key={item.id} 
                        id={item.id}
                        title={item.title} 
                        subject={item.subject}
                        image={item.image}
                    />)
                }
            </UiGrid3>
        </UiAccountLayout>
    )
}

export default Courses;