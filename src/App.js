import { Fragment } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

import './css/style.css';
function App() {
  return (
    <Fragment>
      <Header />
      <h1 className="mx-6 font-semibold text-5xl py-14 text-left md:text-center">Cotizador de Prestamos</h1>
      <Formulario />
      
    </Fragment>
  );
}

export default App;
