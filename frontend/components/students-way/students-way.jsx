import way1 from "./img/way1.svg";
import way2 from "./img/way2.svg";
import way3 from "./img/way3.svg";
import way4 from "./img/way4.svg";
import way5 from "./img/way5.svg";

import UiWay from '../helpers/ui-way';
import UiSection from "../helpers/ui-section";

const StudentsWay = () => {
    const steps = [
        {image: way1, text: 'Зарегистрироваться и войти в лк'},
        {image: way2, text: 'Найти курс в "Мои курсы"'},
        {image: way3, text: 'Выбрать нужное занятие'},
        {image: way4, text: 'После просмотра выполнить задания'},
        {image: way5, text: 'Получить отличную оценку с:'},
    ]
    return (
        <UiSection title = 'Путь ученика' color = '1'>
            <div className="container">
                <UiWay steps={steps}/>
            </div>
        </UiSection>
    )
}



export default StudentsWay;