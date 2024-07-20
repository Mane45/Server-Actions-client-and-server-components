"use server"

import { createWriteStream } from "fs"
import { InputCourse, InputLecture, addCourse, addLecturers, updateCourseById, updateLecturerById } from "../api"
import { redirect } from "next/navigation"

export const handleAdd = async (data:FormData) => {
   const photo = data.get('cover') as File
   if(photo){
     let extension = photo.type.split("/").at(-1)
     const filename =  Date.now() + "." + extension
     const stream = createWriteStream("public/images/" + filename)
     const bufferedImage = await photo.arrayBuffer()
     stream.write(Buffer.from(bufferedImage))
     let course:InputCourse = {
        name: data.get('name') as string,
        price: +(data.get('price') as string),
        duration: +(data.get('duration') as string),
        cover: 'images/' + filename
     }

     addCourse(course)
     redirect("/courses")

   }
}

export const handleUpdate = async (id: number, data:FormData) => {
   const course: Partial<InputCourse> = {
      name: data.get("name") as string,
      price: +(data.get("price") as string),
      duration: +(data.get("duration") as string)
   }
   const photo = data.get("cover") as File
   if (photo.size > 0) {
      let extension = photo.type.split("/").at(-1)
      const filename = Date.now() + "." + extension
      const stream = createWriteStream("public/images/" + filename)
      const bufferedImage = await photo.arrayBuffer()
      course.cover = "images/" + filename
      stream.write(Buffer.from(bufferedImage))
   }

   updateCourseById(id, course)
   redirect("/courses")
}

export const handleAddLecture = (data:FormData) => {
   let lecture:InputLecture = {
      name: data.get('name') as string,
      surname: data.get('surname') as string,
      department: data.get('department') as string,
      subject: data.get('subject') as string
   }
   addLecturers(lecture)
   redirect("/lecturers")
}

export const handleUpdateLecture = (id: number, data:FormData) => {
   let lecturer:InputLecture = {
      name: data.get('name') as string,
      surname: data.get('surname') as string,
      department: data.get('department') as string,
      subject: data.get('subject') as string
   }
   console.log(lecturer)
   updateLecturerById(id, lecturer)
   redirect("/lecturers")
}
