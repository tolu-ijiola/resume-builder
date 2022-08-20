import { useEffect, useState } from "react"

const New = (props) => {

    const initialState = {
        name : '',
        course: '',
        city: '',
        country: '',
        enddate: '',
    }

    const [values, setvalues] = useState(initialState)
    const [valid, setvalid] = useState(false)
    const [error, seterror] = useState("")

    const handleChange = (e) => {
        const {name, value} = e.target

        setvalues({
            ...values,
            [name]: value
        })
    }

    useEffect(() => {
        validateInput()
    }, [values])
    
    const validateInput = () => {
        seterror("")
        if (values.name.length < 3) {
            seterror("Enter a valid school name")
            return;
        }

        if (values.course.length < 3) {
            seterror("Enter a valid course")
            return;
        }

        if (values.city.length < 3) {
            seterror("Enter a valid city")
            return;
        }

        if (values.country.length < 3) {
            seterror("Enter a valid country")
            return;
        }

        if (values.enddate === "") {
            seterror("Enter a valid end date")
            return;
        }

        setvalid(true)
    }

    return(
        <div className="pop-up-background">
            <div className="pop-up">
                <h1>Add new </h1>
                <br/>
                <div className="profile-input">
                    <div>
                    <label>Name of school</label>
                    <input name="name" onChange={handleChange} placeholder="What school did you attend"/>
                    </div>
                    <div>
                    <label>Course</label>
                    <input name="course" onChange={handleChange} placeholder="What course did you study"/>
                    </div>
                </div>
                <div className="profile-input">
                    <div>
                        <label>City</label>
                        <input name="city" onChange={handleChange} placeholder="City your school is in"/>
                    </div>
                    <div>
                        <label>Country</label>
                        <input name="country" onChange={handleChange} placeholder="Country"/>    
                    </div>
                </div>
                <div className="profile-input">
                    <div>
                        <label>Graduation date</label>
                        <input name="enddate" onChange={handleChange} type={"date"}/>    
                    </div>
                </div>
                <p id="error">{error}</p>
                <div className="pop-button">
                <button className="cancel" onClick={() => props.setnewshow(false)}>Cancel</button>
                <button disabled={!valid} onClick={() => {props.pusheducation(values); props.setnewshow(false);}}>Save</button>
                </div>
                
            </div>
        </div>
    )
}

export default New