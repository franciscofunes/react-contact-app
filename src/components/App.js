import React, {useState} from "react";
import '../App.css';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log (contact);
  }
  

  return (
    <div className="ui container">
      <Header/>
      {/*if we want to pass a data from a parent to a child we use props*/}
       {/*if we want to pass a data from a child to a parent we can use a function as a prop*/}
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
