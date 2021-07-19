import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.svg';

const ContactDetail = (props) => {
	const { name, email } = props.location.state.contact;
	return (
		<div className='main'>
			<div className='ui card centered'>
				<div className='image'>
					<img src={user} alt='user' />
				</div>
				<div className='content'>
					<div className='header'>{name}</div>
					<div className='description'>{email}</div>
				</div>
			</div>
			<div
				style={{ display: 'flex', justifyContent: 'center' }}
			>
				<Link to='/'>
					<button className='ui button orange'>Volver</button>
				</Link>
			</div>
		</div>
	);
};

export default ContactDetail;
