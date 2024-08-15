import React, { useState } from "react";

const Mensaje = ({ nombre, pelicula }) => {
    return (
        <div>
        <h2>Hola {nombre}!</h2>
        <h3>Disfruta de tu película: {pelicula}.</h3>
        <h4>Aqui tienes unas palomitas</h4><h1>🍿</h1>
      </div>
    )
  
}

export default Mensaje;