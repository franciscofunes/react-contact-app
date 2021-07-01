import React from "react";
import user from "../images/user.svg"

const ContactCard = (props) => {

    //destructure array so that we don't have to say contact.name, etc, every time, dont repeat the props
    const {id, name, email} = props.contact;

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
        <div className="content">
            <div className="header">
                {name}

            </div>
            <div>
                {email}

            </div>
            <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}}></i>
        </div>
        <div>

        </div>

    </div>
    
    );

}

export default ContactCard;