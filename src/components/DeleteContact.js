import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DeleteContact = (props) => {
	const { id } = props.location.state.contact;

	const deleteContactHandler = (id) => {
		props.getContactId(id);
	};

	return (
		<div className='grid'>
			<Link to='/'>
				<h2>¿Esta seguro de borrar el invitado?</h2>
				<button
					className='ui button red'
					onClick={() => deleteContactHandler(id)}
				>
					Eliminar
				</button>
				<button className='ui button yellow '>Cancelar</button>
			</Link>
		</div>
	);
};

export default DeleteContact;
