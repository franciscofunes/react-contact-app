import React from 'react';
import { Link } from 'react-router-dom';

class AddContact extends React.Component {
	state = {
		name: '',
		email: '',
	};

	add = (e) => {
		e.preventDefault();
		if (this.state.name === '' || this.state.email === '') {
			alert('Todos los campos son obligatorios');
			return;
		}
		this.props.addContactHandler(this.state);
		this.setState({ name: '', email: '' });
		this.props.history.push('/');
	};

	render() {
		return (
			<div className='ui main' style={{ padding: '0 0 30px 0' }}>
				<br></br>
				<h2>Agregar Contacto</h2>
				<form className='ui form' onSubmit={this.add}>
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
						Agregar
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

export default AddContact;
