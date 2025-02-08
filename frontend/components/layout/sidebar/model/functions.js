import Sidebar from "../sidebar"
import { academicRecord, currentCourse, myCourses, returnMyCourses, tasks } from "./constants"

export const getSidebar = (currentUrl) => {
    if (currentUrl.includes("lesson")) {
        return <Sidebar 
            navList={[currentCourse, ...tasks]}
        />
    }
    if (currentUrl.includes("courses") && currentUrl.length === 4) {
        return <Sidebar 
            navList={[returnMyCourses, academicRecord]}
            activeItem={0}
        />
    }
    if (currentUrl.includes("courses")) {
        return <Sidebar 
            navList={[myCourses, academicRecord]}
            activeItem={0}
        />
    }
    if (currentUrl.includes("account")) {
        return <Sidebar 
            navList={[myCourses, academicRecord]}
        />
    }
}