import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
	console.log(props);

	//we could e.target.value but this a another way yo achieve the same with useRef hooks
	const inputEl = useRef('');

	const mapContactList = props.contacts.map((contact) => {
		return <ContactCard contact={contact} key={contact.id}></ContactCard>;
	});

	const getSearchTerm = () => {
		props.searchKeyWord(inputEl.current.value);
	};
	return (
		<div class='main'>
			<h2>
				Lista invitados
				<Link to='/agregar'>
					<button className='ui button blue right floated'>
						Agregar Invitado
					</button>
				</Link>
			</h2>
			<div className='ui search'>
				<div className='ui icon input'>
					{/*bind element with useRef hook*/}
					<input
						ref={inputEl}
						type='text'
						className='prompt'
						placeholder='Buscar invitado....'
						value={props.term}
						onChange={getSearchTerm}
					/>
					<i className='search icon'></i>
				</div>
			</div>
			<div className='ui celled list'>
				{mapContactList.length > 0
					? mapContactList
					: 'Ningún invitado coincide con los datos brindados.'}
			</div>
		</div>
	);
};

export default ContactList;
