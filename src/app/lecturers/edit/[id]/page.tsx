import { handleUpdateLecture } from "@/app/lib/actions/course-actions"
import { getLecturerById } from "@/app/lib/api"

interface IProps {
    params: { id: number }
}
export default function Page(props: IProps) {
    let lecturer = getLecturerById(props.params.id)
    return <>
        <div className="columns">
            <div className="column  is-two-fifths my-4">
                <form className="box" action={handleUpdateLecture.bind(null, props.params.id)}>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="name"
                            placeholder="enter a name"
                            defaultValue={lecturer.name}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="surname"
                            placeholder="enter a surname"
                            defaultValue={lecturer.surname}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="department"
                            placeholder="enter a department"
                            defaultValue={lecturer.department}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="subject"
                            placeholder="enter a subject"
                            defaultValue={lecturer.subject}
                        />
                    </div>
                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}