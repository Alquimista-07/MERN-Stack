// Importamos para poder usar rutas
// El BrowserRouter es el componenten que nos permite crear rutas url en la aplicación
// y el Route es una manera de poder especificar las rutas. En pocas palabras el BrowserRouter
// es el contenedor y el Route son las rutas.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
// Importamos los paquetes de boostrap que instalamos a través de npm y que son necesarios para su uso
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

// Importamos los componentes
import Navigation from "./components/Navigation";
import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    // Contenedor del las rutas
    <Router>
      <Navigation />

      {/* Creamos las rutas */}
      <Routes>
        {/* con el exact indicamos que la ruta tiene que ser exácta */}
        <Route path="/" exact Component={NotesList} />

        <Route path="/edit/:id" Component={CreateNote} />
        <Route path="/create" Component={CreateNote} />

        <Route path="/user" Component={CreateUser} />
      </Routes>
    </Router>
  );
}

export default App;
