import { useEffect, useState } from "react"

const New = (props) => {

    const initialState = {
        company : '',
        role: '',
        startdate: '',
        enddate: '',
        city: '',
        country: ''
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
        if (values.company.length < 3) {
            seterror("Enter a valid company name")
            return;
        }

        if (values.role.length < 3) {
            seterror("Enter a valid role")
            return;
        }

        if (values.startdate === "") {
            seterror("Enter a valid start date")
            return;
        }

        if (values.enddate === "") {
            seterror("Enter a valid end date")
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

        setvalid(true)
    }

    return(
        <div className="pop-up-background">
            <div className="pop-up">
                <h1>Add new </h1>
                <br/>
                <div className="profile-input">
                    <div>
                    <label>Company or Organization name</label>
                    <input name="company" onChange={handleChange} placeholder="Company or Organization name"/>
                    </div>
                    <div>
                    <label>Role or job title</label>
                    <input name="role" onChange={handleChange} placeholder="Your role or job title"/>
                    </div>
                </div>
                <div className="profile-input">
                    <div>
                        <label>Start date</label>
                        <input name="startdate" onChange={handleChange} type={"date"}/>
                    </div>
                    <div>
                        <label>End date</label>
                        <input name="enddate" onChange={handleChange} disabled={values.startdate === ""} min={values.startdate} type={"date"}/>    
                    </div>
                </div>
                <div className="profile-input">
                    <div>
                        <label>City</label>
                        <input name="city" onChange={handleChange} placeholder="City you worked in"/>
                    </div>
                    <div>
                        <label>Country</label>
                        <input name="country" onChange={handleChange} placeholder="Country you worked in"/>    
                    </div>
                </div>
                <p id="error">{error}</p>
                <div className="pop-button">
                <button className="cancel" onClick={() => props.setnewshow(false)}>Cancel</button>
                <button disabled={!valid} onClick={() => {props.pushexperience(values); props.setnewshow(false);}}>Save</button>
                </div>
                
            </div>
        </div>
    )
}

export default New