const Profile = (props) => {
    return(
        <div className="">
            <div className="profile-input">
                <div>
                    <label>First name</label>
                    <input name="firstname" defaultValue={props.values.firstname} onChange={props.handlechange} placeholder="Your first name"/>
                </div>
                <div>
                    <label>Last name</label>
                    <input name="lastname" defaultValue={props.values.lastname} onChange={props.handlechange} placeholder="Your last name"/>
                </div>
            </div>
            <div className="profile-input">
                <div>
                    <label>Phone number</label>
                    <input name="phone" defaultValue={props.values.phone} onChange={props.handlechange} placeholder="Your phone number"/>
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" defaultValue={props.values.email} onChange={props.handlechange} placeholder="Your email aaddress"/>
                </div>
            </div>
            <div className="profile-input">
                <div>
                    <label>Profession</label>
                    <input name="profession" defaultValue={props.values.profession} onChange={props.handlechange} placeholder="Your profession"/>
                </div>
                <div>
                    <label>Portfolio</label>
                    <input name="portfolio" defaultValue={props.values.portfolio} onChange={props.handlechange} placeholder="Your portfolio"/>
                </div>
            </div>
        </div>
    )
}

export default Profile