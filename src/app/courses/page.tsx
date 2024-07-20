import { getAllCourses } from "../lib/api"
import { CoursesList } from "../lib/components/courses-list"

export default function Page() {
    const list = getAllCourses()
    console.log(list)
    return <>
        <h1>Courses</h1>
        <CoursesList courses={list}/>
    </>
}