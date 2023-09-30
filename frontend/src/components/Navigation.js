import React, { Component } from "react";

// Para quitar el comportamiento por defecto y no refresque la página cuando se dirige a una ruta o url
// es necesario importar el módulo link
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Cuando indicamos el to es a donde queremos redirigir */}
          <Link className="navbar-brand" to="/">
            NotesApp
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link className="nav-link" to="/">
                    Notas
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/create">
                    Crear Nota
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/user">
                    Crear Usuario
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
