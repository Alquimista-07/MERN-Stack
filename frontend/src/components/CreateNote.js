import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateNote extends Component {
  state = {
    users: [],
    userSelected: [],
    title: "",
    content: "",
    date: new Date(),
    editing: false,
    _id: ''
  };

  async componentDidMount() {
    // Obtenemos el id del parámetro usando JavaScript puro ya que como lo explican en el video no se puede usar.
    // Adicionalmente existe un hook que es el useParams pero en este caso como esta construido el componente no 
    // lo deja usar y me dio pereza cambiarlo. Por lo tanto lo obtuve de esta forma
    let url = window.location.pathname.split('/');
    let urlIdParm = url[2];

    const res = await axios.get("http://localhost:4000/api/users");
    const users = res.data.users;
    this.setState({
      users: users,
      userSelected: users[0].username,
    });

    if(urlIdParm !== undefined) {

      const resp = await axios.get('http://localhost:4000/api/notes/' + urlIdParm);

      console.log(resp.data.note.author);

      this.setState({ 
        userSelected: resp.data.note.author,
        title: resp.data.note.title,
        content: resp.data.note.content,
        date: new Date(resp.data.note.date),
        editing: true,
        _id: urlIdParm
      })
    }
  }

  onSubmit = async (ev) => {
    ev.preventDefault();
    if (this.state.title !== "" && this.state.content !== "") {
      
      const newNote = {
        title: this.state.title,
        content: this.state.content,
        date: this.state.date,
        author: this.state.userSelected,
      };

      if(this.state.editing) {
          await axios.put('http://localhost:4000/api/notes/' + this.state._id, newNote);
      } else {
          await axios.post("http://localhost:4000/api/notes", newNote);
      }

      window.location.href = "/";
    } else {
      alert("Complete los campos");
    }
  };

  onInputChange = (ev) => {
    this.setState({
      // Dependiendo del nombre del input que den va a actualizar el state
      [ev.target.name]: ev.target.value,
    });
  };

  onChangeDate = (date) => {
    this.setState({ date });
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3 p-5">
        <div className="card card-body">
          <h4>{this.state._id ? "Editar Nota" : "Crear Nota"}</h4>

          {/* SELECT USER*/}
          <div className="form-group">
            <select
              className="form-control"
              name="userSelected"
              id="userSelected"
              onChange={this.onInputChange}
              value={this.state.userSelected}
              multiple={false}
            >
              {
                //Recorremos para llenar los option
                this.state.users.map(({ username }) => (
                  <option key={username} value={username}>
                    {username}
                  </option>
                ))
              }
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Titulo"
              name="title"
              required
              onChange={this.onInputChange}
              value={this.state.title}
            />
          </div>

          <div className="form-group">
            <textarea
              name="content"
              className="form-control"
              placeholder="Contenido Nota"
              required
              onChange={this.onInputChange}
              value={this.state.content}
            ></textarea>
          </div>

          <div className="form-group">
            <DatePicker
              className="form-control"
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>

          <form onSubmit={this.onSubmit}>
            <button type="submit" className="btn btn-outline-primary">
              Guardar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
