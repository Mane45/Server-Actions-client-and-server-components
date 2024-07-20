import Database from 'better-sqlite3'

export interface ICourse {
    id: number
    name: string
    price: number
    cover: string
    duration: number
}
export type InputCourse = Omit<ICourse, 'id'>

export interface ILecture {
    id: number
    name: string
    surname: string
    department: string
    subject: string
}
export type InputLecture = Omit<ILecture, 'id'>

const db = new Database("courses.db")

export const addCourse = (course: InputCourse) => {
    db.prepare(`
            INSERT INTO courses(name, price, cover, duration)
            VALUES(@name, @price, @cover, @duration)
    `).run(course)
}

export const updateCourseById = (id: number, body: Partial<InputCourse>) => {

    if (!body.cover) {
        return db.prepare(
            "UPDATE courses SET name=?, price=?, duration=? WHERE id=?"
        ).run(body.name, body.price, body.duration, id)
    } else {
        return db.prepare(
            "UPDATE courses SET name=?, price=?, duration=?, cover=? WHERE id=?"
        ).run(body.name, body.price, body.duration, body.cover, id)
    }
}

export const addLecturers = (lecturer: InputLecture) => {
    db.prepare(`
        INSERT INTO lecturers(name, surname, department, subject)
        VALUES(@name, @surname, @department, @subject)
    `).run(lecturer)
}

export const updateLecturerById = (id:number, body: Partial<InputLecture>) =>{
    return db.prepare(`
        UPDATE lecturers SET name=?, surname=?, department=?, subject=? WHERE id=?
    `).run(body.name, body.surname, body.department, body.subject, id)
}

export const getAllCourses = (): ICourse[] => {
    return db.prepare(`
            SELECT * FROM courses
    `).all() as ICourse[]
}

export const getCourseById = (id: number): ICourse => {
    return db.prepare(`
        SELECT * FROM courses WHERE id=?`).get(id) as ICourse
}

export const getAllLecturers = (): ILecture[] => {
    return db.prepare(`
        SELECT * FROM lecturers
    `).all() as ILecture[]
}

export const getLecturerById = (id:number): ILecture => {
    return db.prepare(` 
        SELECT * FROM lecturers WHERE id=?
    `).get(id) as ILecture
}