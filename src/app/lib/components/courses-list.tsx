import Image from "next/image"
import { ICourse } from "../api"
import Link from "next/link"


interface IProps {
    courses: ICourse[]
}

export const CoursesList = ({ courses }: IProps) => {
    return <div>
        {courses.map(course => <div key={course.id}>
            <p>{course.name}</p>
            <Image
                src={"/" + course.cover}
                width={100}
                height={100}
                alt="photo"
            />
            <p>{course.duration}</p>
            <p>{course.price} AMD per mounth</p>
            <Link href={"./courses/edit/" + course.id}>edit</Link>
            {/* <Link href={"./courses/details/" + course.id}>details</Link> */}
        </div>)}
    </div>
}