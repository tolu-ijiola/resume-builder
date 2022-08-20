import { useState } from "react"
import New from "../education/new"

const Education = (props) => {

    const [newshow, setnewshow] = useState(false)

    return(
        <div className="education">
            <h1>Education</h1>
            <p>Enter details about your school</p>
            <br/>
            <div>
            {
                props.education.length > 0 && props.education.map((education, i) => {
                    return(
                        <div className="education-item" key={i}>
                            <i class="fa-solid fa-xmark" onClick={() => props.removeeducation(i)}></i>
                            <p>{education.name} | {education.city}, {education.country}</p>
                            <p>{education.course} | {education.startdate} - {education.enddate}</p>
                        </div>
                    )
                })
            }
            </div>
            {props.education.length < 3 && <button className="add-btn" onClick={() => setnewshow(true)}>Add new <i class="fa-solid fa-plus"></i></button>}
            {newshow && <New setnewshow={setnewshow} pusheducation={props.pusheducation}/>}
        </div>
    )
}

export default Education