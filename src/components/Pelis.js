import React from 'react';
import './css/estilos.css';
import Pelis from './json/peliculas.json'

export default function Cuerpo(){
    return ( 
        <div className='containermayor'>
            <div className='eaeaea'>
                <h3>PELICULAS</h3>
            </div>
            <div className='cajataja'>
                {
                    Pelis.map ( (peli,key) => {
                        return(
                            <div className='box' key={peli.id}>
                                <img src={peli.portada} alt={peli.nombre} className="peliportada"/>
                                <h4>
                                    {peli.nombre}
                                </h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}


