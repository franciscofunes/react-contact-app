import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const mapContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact}></ContactCard>
        );
    });
    return (
        <div className="ui celled list">
            {mapContactList}
        </div>
    );
}

export default ContactList;