import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import  'react-datepicker/dist/react-datepicker.css';

export default class CreateNote extends Component {

  state = {
    users: [],
    userSelected: [],
    title: '',
    content: '',
    date: new Date()
  }

  async componentDidMount () {
    const res = await axios.get('http://localhost:4000/api/users');
    const users = res.data.users;
    this.setState({users: users});
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    console.log(this.state.title, this.state.content);
  }

  onInputChange = ev => {
    this.setState({
      // Dependiendo del nombre del input que den va a actualizar el state
      [ev.target.name]: ev.target.value
    });
  }

  onChangeDate = date => {
    this.setState({date});
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Crear Nota</h4>

          {/* SELECT USER*/}
          <div className="form-group">
            <select className='form-control'
                    name='userSelected'
                    onChange={this.onInputChange}>
              {
                //Recorremos para llenar los option
                this.state.users.map(({username}) => 
                <option key={username} value={username}>
                  { username }
                </option>)
              }
            </select>
          </div>

          <div className="form-group">
            <input type="text" 
                   className='form-control' 
                   placeholder='Titulo' 
                   name='title' 
                   required
                   onChange={this.onInputChange}/>
          </div>

          <div className="form-group">
            <textarea name="content"
                      className='form-control'
                      placeholder='Contenido Nota'
                      required
                      onChange={this.onInputChange}>
            </textarea>
          </div>

          <div className="form-group">
            <DatePicker 
              className="form-control"
              selected={this.state.date}
              onChange={this.onChangeDate}/>
          </div>

          <form onSubmit={this.onSubmit}>
            <button type='submit' className='btn btn-outline-primary'>
              Guardar
            </button>
          </form>
        </div>
      </div>
    )
  }
}
