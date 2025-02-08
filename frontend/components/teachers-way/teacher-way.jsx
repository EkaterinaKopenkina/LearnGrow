import way1 from "./img/way1.svg";
import way2 from "./img/way2.svg";

import UiWay from '../helpers/ui-way/ui-way';
import UiSection from "../helpers/ui-section";

const TeachersWay = () => {
    const steps = [
        {image: way1, text: 'Войти в DjangoAdmin'},
        {image: way2, text: 'Перейти в таблицу "Courses" и создать новый курс'},
        {image: way2, text: 'Перейти в таблицу "Lessons" и добавить уроки к курсу'},
        {image: way2, text: 'Перейти в таблицу "Tasks" и добавить задачи к уроку'},
        {image: way2, text: 'Перейти в таблицу "Academic_record" проверить решения и выставить оценки'},
    ]
    return (
        <UiSection title = 'Путь учителя' color = '1'>
            <UiWay steps={steps}/>
        </UiSection>
    )
}



export default TeachersWay;