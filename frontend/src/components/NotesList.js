import React, { Component } from "react";
import axios from "axios";

// Importamos la librería timeago.js que sirve para mostrar hace cuanto tiempo fue creada la nota
// algo similar a lo que se muestra en un post de una red social que indica hace cuanto se publico
// el post
import { format } from "timeago.js";

export default class NotesList extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    this.getNotes();
  }

  async getNotes() {
    const res = await axios.get("http://localhost:4000/api/notes");
    this.setState({ notes: res.data.notes });
    this.changeLenguaje();
  }

  changeLenguaje() {
    const { register } = require("timeago.js");
    // Usamos el método register de timeago.js para colcoar los textos en español ya que por defecto vienen en inglés o chino
    register(
      "es_ES",
      (number, index, total_sec) =>
        [
          ["justo ahora", "ahora mismo"],
          ["hace %s segundos", "en %s segundos"],
          ["hace 1 minuto", "en 1 minuto"],
          ["hace %s minutos", "en %s minutos"],
          ["hace 1 hora", "en 1 hora"],
          ["hace %s horas", "in %s horas"],
          ["hace 1 dia", "en 1 dia"],
          ["hace %s dias", "en %s dias"],
          ["hace 1 semana", "en 1 semana"],
          ["hace %s semanas", "en %s semanas"],
          ["1 mes", "en 1 mes"],
          ["hace %s meses", "en %s meses"],
          ["hace 1 año", "en 1 año"],
          ["hace %s años", "en %s años"],
        ][index]
    );
  }

  deleteNote = async (id) => {
    await axios.delete(`http://localhost:4000/api/notes/${id}`);
    this.getNotes();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.notes.map((note) => (
            <div className="col-md-4 p-2" key={note._id}>
              <div className="card">
                <div className="card-header">
                  <h5>{note.title}</h5>
                </div>
                <div className="card-body">
                  <p>{note.content}</p>
                  <p>{note.author}</p>
                  <p>{format(note.date, "es_ES")}</p>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => this.deleteNote(note._id)}>
                    Borrar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
