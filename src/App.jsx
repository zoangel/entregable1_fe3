import "./App.css";
import Formulario from "./Components/Formulario";
import Card from "./Components/Card";

function App() {
  return (
        <div className="App">
          <h1>Ve tu pelicula favorita</h1>
          <Formulario/>
          <Card />
        </div>
  );
}

export default App;