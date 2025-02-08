const CourseTeacher = ({name, photo}) => {
    return (
        <div className="course__teacher">
            <span className="course__teacher-text">Учитель:</span>
            <div className="course__photo-circle">
                <img src={photo.src} alt="Учитель" className="course__photo-teacher" />
            </div>
            <span>{name}</span>
        </div>
    )
}

export default CourseTeacher;