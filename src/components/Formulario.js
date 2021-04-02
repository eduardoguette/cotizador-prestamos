import { Fragment, useState } from 'react';
import { calcularTotal } from '../helpers/index';
import 'boxicons';
import NavOptions from './NavOptions';
import Msg from './Msg';
import Resultado from './Resultado';

const Formulario = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [total, setTotal] = useState(0);
  const [optionSelected, setOptionSelected] = useState('Seleccionar');
  const [cantidad, setCantidad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOptions(false);

    if (cantidad === '' || cantidad === '0' || optionSelected === 'Seleccionar') {
      setMsgError(true);
      return;
    }
    setTotal(calcularTotal(cantidad, optionSelected));
  };

  const handleOptions = () => {
    setMsgError(false);
    if (!showOptions) setShowOptions(true);
    else setShowOptions(false);
  };
  const handleInput = (e) => {
    setMsgError(false);
    setShowOptions(false);
    // setCantidad((cantidad) => Number(valueTmp) ? valueTmp : cantidad);
    setCantidad(e.target.value);
  };

  return (
    <Fragment>
      <div className='formulario-content w-full sm:w-8/12 md:w-5/12 lg:w-4/12 mx-auto'>
        <form onSubmit={handleSubmit} className='bg-white mx-2 md:mx-auto p-4 px-6 rounded-lg'>
          <div className='form-control'>
            <label className='block font-medium text-xl py-5 ' htmlFor='cantidad-prestamo'>
              Cantidad de prestamo
            </label>
            <input
              value={cantidad}
              type='type'
              onChange={handleInput}
              placeholder='Ingrese un monto'
              className='w-full ring ring-gray-200 focus:ring-gray-300 rounded-md py-2 px-3 focus:outline-none'
            />
          </div>
          <div className='form-control relative'>
            <label htmlFor='plazo-pagar' className='block font-medium text-xl py-5'>
              Plazo a pagar
            </label>
            <div id='plazo-pagar' className='cursor-pointer selected ring ring-gray-200 focus:ring-gray-200 rounded-md py-2 px-3 flex justify-between w-full' onClick={handleOptions}>
              <span>{optionSelected}</span>
              <box-icon type='solid' name='chevron-down'></box-icon>
            </div>
            {<NavOptions show={showOptions} setShow={setShowOptions} optionSelected={setOptionSelected} />}
          </div>
          <button type='submit' className='bg-gray-800 focus:outline-none focus:ring focus:ring-gray-400 text-white font-medium py-2 px-4 rounded-md mt-6'>
            Calcular
          </button>
          {<Msg error={msgError} setMsgError={setMsgError} />}
          {total > 0 && <Resultado total={total} cantidad={cantidad} optionSelected={optionSelected}/>}
        </form>
      </div>
    </Fragment>
  );
};

export default Formulario;
