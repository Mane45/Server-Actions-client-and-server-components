// import { handleAdd } from "@/app/lib/actions/course-actions";

import { handleAddLecture } from "@/app/lib/actions/course-actions";

export default function Page() {
    return <div>
        <h1 className="is-size-5">Add Course</h1>
        <div className="columns">
            <div className="column  is-two-fifths my-4">
                <form className="box" action={handleAddLecture}>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="name"
                            placeholder="enter a name"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="surname"
                            placeholder="enter a surname"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="department"
                            placeholder="enter a department"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="subject"
                            placeholder="enter a subject"
                        />
                    </div>
                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}