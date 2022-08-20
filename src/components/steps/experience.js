import { useEffect, useState } from "react"
import New from "../experience/new"

const Experience = (props) => {

    const [newshow, setnewshow] = useState(false)

    return(
        <div className="experience">
            <h1>Experience</h1>
            <p>Enter details about your previous jobs</p>
            <br/>
            <div>
            {
                props.experience.length > 0 && props.experience.map((experience, i) => {
                    return(
                        <div className="experience-item" key={i}>
                            <i class="fa-solid fa-xmark" onClick={() => props.removeexperience(i)}></i>
                            <p>{experience.company} | {experience.city}, {experience.country}</p>
                            <p>{experience.role} | {experience.startdate} - {experience.enddate}</p>
                        </div>
                    )
                })
            }
            </div>
            {props.experience.length < 3 && <button className="add-btn" onClick={() => setnewshow(true)}>Add new <i class="fa-solid fa-plus"></i></button>}
            {newshow && <New setnewshow={setnewshow} pushexperience={props.pushexperience}/>}
        </div>
    )
}

export default Experience