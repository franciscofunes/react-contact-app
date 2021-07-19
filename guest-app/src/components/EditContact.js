import React from 'react';
import { Link } from 'react-router-dom';

class EditContact extends React.Component {
	constructor(props) {
		super(props);
		const { id, name, email } = props.location.state.contact;
		this.state = {
			id,
			name,
			email,
		};
	}

	update = (e) => {
		e.preventDefault();
		if (this.state.name === '' || this.state.email === '') {
			alert('Todos los campos son obligatorios');
			return;
		}
		this.props.updateContactHandler(this.state);
		this.setState({ name: '', email: '' });
		this.props.history.push('/');
	};

	render() {
		return (
			<div className='ui main' style={{ padding: '0 0 30px 0' }}>
				<br></br>
				<h2>Editar Contacto</h2>
				<form className='ui form' onSubmit={this.update}>
					<div className='field'>
						<label>Nombre</label>
						<input
							type='text'
							name='name'
							placeholder='Nombre'
							value={this.state.name}
							onChange={(e) => this.setState({ name: e.target.value })}
						/>
					</div>
					<div className='field'>
						<label>Correo electrónico</label>
						<input
							type='text'
							name='email'
							placeholder='Correo Eletrónico'
							value={this.state.email}
							onChange={(e) => this.setState({ email: e.target.value })}
						/>
					</div>
					<button class='ui button blue' type='submit'>
						Guardar cambios
					</button>
					<Link to='/'>
						<button class='ui button yellow' type='submit'>
							Volver
						</button>
					</Link>
				</form>
			</div>
		);
	}
}

export default EditContact;
