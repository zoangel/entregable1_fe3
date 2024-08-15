import React, { useState } from "react";
import Mensaje from "./Mensaje";
import MensajeError from "./MensajeError";

const Formulario = () => {
    const [flag, setFlag] = useState(false);
    const [flagError, setFlagError] = useState(false);
    const [usuario, setUsuario] = useState({
      nombre: "",
      pelicula: "",
      edad: 0
    });

    const handleName = (e) => {
        setUsuario({ ...usuario, nombre: e.target.value });
      };
      const handleMovie = (e) => {
        setUsuario({ ...usuario, pelicula: e.target.value });
      };
      const handleAge = (e) => {
        setUsuario({ ...usuario, edad: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("En submit");
        if(validaNombre() && validaPelicula() && validaEdad){
            setFlag(true); 
            console.log("Todo ok");
            setFlagError(false);
            return;
        }
        setFlagError(true);
        setFlag(false);
      };
      
      const validaNombre = () => {
        if (usuario.nombre.trim().length < 3) {
            return false;
        } else return true;
      };

      const validaPelicula = () => {
        if (usuario.pelicula.trim().length < 6) {
            return false;
        } else return true;
      };

      const validaEdad = () => {
        if (usuario.edad < 10 || usuario.edad > 99) {
            return false;
        } else return true;
      };

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type="text" onChange={handleName} />

            <label>Película favorita: </label>
            <input type="text" onChange={handleMovie} />

            <label>Edad: </label>
            <input type="number" onChange={handleAge} />

            <button type="submit">Ver pelicula</button>
        </form>

        {flag ? <Mensaje nombre={usuario.nombre} pelicula={usuario.pelicula} /> : null}
        {flagError ? <MensajeError  /> : null}
        </div>
    );
  
}

export default Formulario;