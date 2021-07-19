import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import api from '../api/contacts';
import '../App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import DeleteContact from './DeleteContact';
import EditContact from './EditContact';

function App() {
	const LOCAL_STORAGE_KEY = 'contact';
	const [contacts, setContacts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	//retrieveContacts from json server api
	const retrieveContacts = async () => {
		const response = await api.get('/contacts');
		return response.data;
	};

	const addContactHandler = async (contact) => {
		console.log(contact);
		const request = {
			id: uuid(),
			...contact,
		};

		//adding new contact
		const response = await api.post('/contacts', request);
		console.log(response);
		setContacts([...contacts, response.data]);
	};

	//edit contact
	const updateContactHandler = async (contact) => {
		const response = await api.put(`/contacts/${contact.id}`, contact);
		const { id, name, email } = response.data;
		setContacts(
			contacts.map((contact) => {
				return contact.id === id ? { ...response.data } : contact;
			})
		);
	};
	//remove contact
	const removeContactHandler = async (id) => {
		await api.delete(`/contacts/${id}`);
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});
		setContacts(newContactList);
	};

	const searchHandler = (searchTerm) => {
		setSearchTerm(searchTerm);
		if (searchTerm !== '') {
			const newContactList = contacts.filter((contact) => {
				return Object.values(contact)
					.join(' ')
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			});
			setSearchResults(newContactList);
		}
		else {
			setSearchResults(contacts);
		}
	};

	useEffect(() => {
		//here we get the data from the local storage
		// const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		// if (retriveContacts) setContacts(retriveContacts);

		//here we get data from json server api
		const getAllcontact = async () => {
			const allContacts = await retrieveContacts();
			if (allContacts) setContacts(allContacts);
		};
		getAllcontact();
	}, []);

	useEffect(() => {
		// localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

	{
		/*if we want to pass a data from a parent to a child we use props*/
	}
	{
		/*if we want to pass a data from a child to a parent we can use a function as a prop*/
	}
	return (
		<div className='ui container'>
			<Router>
				<Header />
				<Switch>
					<Route
						path='/'
						exact
						render={(props) => (
							<ContactList
								{...props}
								contacts={searchTerm.length < 1 ? contacts : searchResults}
								getContactId={removeContactHandler}
								term={searchTerm}
								searchKeyWord={searchHandler}
							/>
						)}
					/>
					<Route
						path='/agregar'
						render={(props) => (
							<AddContact {...props} addContactHandler={addContactHandler} />
						)}
					/>
					<Route path='/contact/:id' component={ContactDetail} />
					<Route
						path='/borrar'
						render={(props) => (
							<DeleteContact
								{...props}
								contacts={contacts}
								getContactId={removeContactHandler}
							/>
						)}
					/>
					<Route
						path='/editar'
						render={(props) => (
							<EditContact
								{...props}
								updateContactHandler={updateContactHandler}
							/>
						)}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
