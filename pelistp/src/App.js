import React from 'react';
import Cabecera from './components/cabecera';
import Iconos from './components/compartir';
import './components/css/estilos.css'
import './components/cuerpo'
import Cuerpo from './components/cuerpo';

function App() {
  return (
    <div>
    <Cabecera />
    <Cuerpo/>
    <Iconos />
    </div>
  );
}

export default App;
