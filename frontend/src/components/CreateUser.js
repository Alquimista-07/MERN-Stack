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
  async componentDidMount() {
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

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card card-body">
              <h3>Crear Nuevo Usuario</h3>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.onChangeUsername}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-8">
            <ul className="list-group">
              {this.state.users.map((user) => (
                <li
                  key={user._id}
                  className="list-group-item list-group-item-action"
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
