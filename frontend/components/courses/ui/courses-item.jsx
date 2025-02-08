import Link from "next/link";

const CoursesItem = ({title, subject, image, id}) => {
    console.log(image);
    return (
        <Link className="courses__link" href={`courses/${id}`}>
            <button className="courses__item">
                <div className="courses__photo">
                    <img src={image.src} alt="Курс" className="courses__img" />
                </div>

                <div className="courses__item-inner">
                    <h2 className="courses__title">{title}</h2>
                    <div className="courses__subject">{subject}</div>
                </div>
            </button>
        </Link>
    )
}

export default CoursesItem;