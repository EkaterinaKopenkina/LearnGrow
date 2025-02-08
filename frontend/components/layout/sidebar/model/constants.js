import CoursesIcon from "../icons/courses-icon"
import AcademicRecordIcon from "../icons/academic-record-icon"
import ReturnIcon from "../icons/return-icon"
import TaskIcon from "../icons/task-icon";

const DATA_TASKS = [
    {
        id: 1,
        title: "Задание 1"
    },
    {
        id: 2,
        title: "Задание 2"
    },
    {
        id: 3,
        title: "Задание 3"
    },
]

const DATA_COURSE = {
    id: 1,
    title: "Python"
}

export const tasks = DATA_TASKS.map(item => ({
    id: item.id,
    name: item.title,
    icon: <TaskIcon />,
    href: `/account/task/${item.id}`
}))

export const currentCourse = {
    name: DATA_COURSE.title,
    icon: <ReturnIcon />,
    href: `/account/courses/${DATA_COURSE.id}`
}

export const myCourses = {
    name: "Мои курсы",
    icon: <CoursesIcon/>,
    href: `/account/courses`,
}

export const academicRecord = {
    name: "Успеваемость",
    icon: <AcademicRecordIcon/>,
    href: `/account/record`,
}

export const returnMyCourses = {
    name: "Мои курсы",
    icon: <ReturnIcon/>,
    href: `/account/courses`,
}