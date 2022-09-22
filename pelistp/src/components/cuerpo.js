import React from 'react';
import './css/estilos.css';
import Morbius from './css/Morbius.jpg'
import Uncharted from './css/Uncharted.jpg'
import Animals from './css/2.jpg'
import Muerte from './css/Muerte en el Nilo.jpg'
import J from './css/3.jpg';
import Buzz from './css/4.jpg';
import F from './css/6.jpg';
import G from './css/7.jpg';



const Cuerpo = () => {
    return ( 
        <div className="cuerpo">
        <div className="pelicapsula">
            <div className="pelisubcapsula">
                <div className="pelijuntoaltexto">
                    <img src = {Morbius} alt="" className="peli"/>
                    <p className="titulopeli">
                        Morbius
                    </p>
                </div>
                <div className="pelijuntoaltexto">
                    <img src={Uncharted} alt="" className="peli"/>
                    <p className="titulopeli">
                        Uncharted
                    </p>
                </div>
                <div className="pelijuntoaltexto">
                    <img src={Animals} alt="" className="peli"/>
                    <p className="titulopeli">
                        Animales fantásticos: Los secretos de Dumbledore
                    </p>
                </div>
                <div className="pelijuntoaltexto">
                    <img src={Muerte} alt="" className="peli"/>
                    <p className="titulopeli">
                       Muerte en el Nilo
                    </p>
                </div>
            </div>
            <div className="pelisubcapsula">
                <div className="pelijuntoaltexto">
                    <img src={J} alt="" className="peli"/>
                    <p className="titulopeli">
                        Jurassic World Dominion
                    </p>
                </div>
                <div className="pelijuntoaltexto">
                    <img src={Buzz} alt="" className="peli"/>
                    <p className="titulopeli">
                        Buzz Lightyear
                    </p>
                </div>
                <div className="pelijuntoaltexto">
                    <img src={F} alt="" className="peli"/>
                    <p className="titulopeli">
                        The Deer King
                    </p>
                </div>
                <div className="pelijuntoaltexto">
                    <img src={G} alt="" className="peli"/>
                    <p className="titulopeli">
                        Moonfall
                        </p>
        </div>
    </div>
        </div>
    </div>
     );
}
 
export default Cuerpo;

