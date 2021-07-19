import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.svg';

const ContactCard = (props) => {
	//destructure array so that we don't have to say contact.name, etc, every time, dont repeat the props
	const { id, name, email } = props.contact;

	return (
		<div className='item' style={{ padding: '15px 0 15px 0' }}>
			<img className='ui avatar image' src={user} alt='user' />
			<div className='content'>
				<Link
					to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
				>
					<div className='header'>{name}</div>
					<div>{email}</div>
				</Link>
			</div>
			<div className='right floated'>
				<Link
					to={{ pathname: `/editar/${id}`, state: { contact: props.contact } }}
				>
					<i
						className='edit alternate icon'
						style={{
							fontSize: '20px',
							color: '#131B23',
							marginTop: '10px',
							cursor: 'pointer',
						}}
					></i>
				</Link>
				<Link
					to={{ pathname: `/borrar/${id}`, state: { contact: props.contact } }}
				>
					<i
						className='trash alternate icon'
						style={{
							fontSize: '20px',
							color: 'red',
							marginTop: '10px',
							cursor: 'pointer',
						}}
					></i>
				</Link>
			</div>
		</div>
	);
};

export default ContactCard;
