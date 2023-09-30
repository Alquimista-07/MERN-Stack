import React, { Component } from "react";

// Importamos la librería axios que instalamos a través de npm y que es muy útil para realizar
// peticiones http para no hacerlo directamente con fetch
import axios from "axios";

export default class CreateUser extends Component {
  // Establecemos el estado de la aplicación para indicar que vamos a almacenar los usaurios
  state = {
    users: [],
    username: "",
  };

  // Este método de react nos ayuda a poder ejecutar algunas funciones o ejecutar
  // código una vez el componente ha sido creado.
  componentDidMount() {
    this.getUsers();
  }

  async getUsers() {
    // En este caso lo vamos a usar para pedir los datos al servidor para mostrarlos.
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({
      users: res.data.users,
    });
  }

  onChangeUsername = (ev) => {
    this.setState({
      username: ev.target.value,
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    await axios.post('http://localhost:4000/api/users', {
      username: this.state.username
    });

    this.setState({username: ''})
    this.getUsers();

  }

  deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/api/users/${id}`);
    this.getUsers();
  }

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card card-body">
              <h3>Crear Nuevo Usuario</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.onChangeUsername}
                    value={this.state.username}
                  />
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Guardar
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-8">
            <ul className="list-group">
              {this.state.users.map((user) => (
                <li
                  key={user._id}
                  className="list-group-item list-group-item-action"
                  onDoubleClick={()=> this.deleteUser(user._id)}
                >
                  {user.username}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
