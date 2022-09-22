import React from 'react';
import './css/estilos.css';

const Cabecera = () => {
    return ( 
        <header>
        <div className = "titulo">
            <a href="index.html">
            <div className="logo"/>
            </a>
            <div>
                <p className="Cine">Cine River</p>
            </div>
            <nav>
                <a href="index.html" className="lista">Inicio</a>
                <a href="Peliculas.html" className="lista">Peliculas</a>
                <a href="index" className="lista">Contactos</a>
            </nav>
        </div>
        </header>
     );
}
 
export default Cabecera;