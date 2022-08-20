const Skill = (props) => {
    return(
        <div className="skill-tab">
            <h1>Type the skills you have</h1>
            <p>Hit enter once you are done to enter... Minimum of 3 tags</p>
            <input placeholder="E.g React, HTML" onKeyDown={props.pushskill}/>
            <br/>
            <div className="myskill">
            {
                props.skill.length > 0 && props.skill.map((skill, i) => {
                    return(
                        <div className="skill-item" key={i}>
                            <p>{skill}</p>
                            <i onClick={() => props.removeskill(i)} class="fas fa-times"></i>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Skill