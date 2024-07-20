

import Link from "next/link"
import { getAllLecturers } from "../lib/api"

export default function Page() {
    const lecturers = getAllLecturers()
    //console.log(lecturers)
    return <>
        <h1>Lecturers</h1>
        {lecturers.map(lecturer => <div key={lecturer.id}>
            <p>Lecturer:{lecturer.name} {lecturer.surname}</p>
            <p>Department: {lecturer.department}</p>
            <p>Subject{lecturer.subject}</p>
            <Link href={"./lecturers/edit/" + lecturer.id}>edit</Link>
        </div>)}
    </>
}