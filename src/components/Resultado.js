import { useEffect } from 'react';
import Spinner from './Spinner';

import { formatNumber } from '../helpers/index';
const refCantidad = parseInt(Math.random() * 4000);
const redPagoMensual = parseInt(Math.random() * 4000);

let cantidadSolicitada;
let opcionSeleccionada;
let pagoXMes;
const Resultado = ({ total, cantidad, optionSelected, loading, setloading }) => {
  useEffect(() => {
    cantidadSolicitada = cantidad;
    opcionSeleccionada = optionSelected;
    pagoXMes = total / parseInt(optionSelected);
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  if (loading) return <Spinner />;
  else
    return (
      <div className='font-medium my-2 text-2xl flex-col flex ticket'>
        <h2 className='py-2 text-center font-medium my-4'>Resumen</h2>
        <hr className='border-dashed border-2 my-2' />
        <div className='font-medium text-sm flex justify-between px-3 my-2'>
          <div className='flex space-x-6'>
            <span>Ref.</span>
            <span>Descripción</span>
          </div>
          <span>Total</span>
        </div>
        <div className='font-medium text-sm flex justify-between px-3 my-2'>
          <div className='flex space-x-4'>
            <span>{redPagoMensual}</span>
            <div className='flex flex-col'>
              <span>Cantidad solicitada</span>
              <span className='text-xs'>(A pagar en {opcionSeleccionada})</span>
            </div>
          </div>
          <span>{formatNumber(cantidadSolicitada)}</span>
        </div>
        <div className='font-medium text-sm flex justify-between px-3 my-2'>
          <div className='flex space-x-4'>
            <span>{refCantidad}</span>
            <div className='flex flex-col'>
              <span>Pago mensual</span>
            </div>
          </div>
          <span>{formatNumber(pagoXMes)}</span>
        </div>

        <hr className='border-dashed border-2 mt-4 my-5' />
        <div className='font-medium text-sm flex justify-between px-3 mt-4'>
          <div className='flex space-x-4'>
            <span className='uppercase font-bold'>Total a pagar</span>
          </div>
          <span>{formatNumber(total)}</span>
        </div>

        <hr className='border-dashed border-2 my-8' />
      </div>
    );
};

export default Resultado;
