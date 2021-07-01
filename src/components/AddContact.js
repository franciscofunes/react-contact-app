import React from "react";

class AddContact extends React.Component {
    state= {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert ("Todos los campos son obligatorios");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""});
    }

    render() {
        return(
            <div className="ui main">
                <br></br>
                <h2 className="header">Agregar Contacto</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Nombre</label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Nombre" 
                        onChange={(e) => this.setState({name: e.target.value})}
                        />
                    </div> 
                    <div className="field">
                        <label>Correo electrónico</label>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="Correo Eletrónico"
                        onChange={(e) => this.setState({email: e.target.value})}
                        />
                    </div> 
                    <button class="ui primary button" type="submit">Agregar</button>
                </form>
            </div>
        );
    }
}

export default AddContact;