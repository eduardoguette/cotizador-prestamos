const Resultado = ({ total, cantidad, optionSelected }) => {
  return (
    <div className='font-medium my-2 text-2xl flex-col flex xl:flex-row border'>
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
          <span>{parseInt(Math.random() * 4000)}</span>
          <div className='flex flex-col'>
            <span>Cantidad solicitada</span>
            <span className='text-xs'>(A pagar en {optionSelected})</span>
          </div>
        </div>
        <span>${cantidad}</span>
      </div>
      <div className='font-medium text-sm flex justify-between px-3 my-2'>
        <div className='flex space-x-4'>
          <span>{parseInt(Math.random() * 4000)}</span>
          <div className='flex flex-col'>
            <span>Pago mensual</span>
          </div>
        </div>
        <span>${cantidad}</span>
      </div>

      <hr className='border-dashed border-2 mt-4 my-5' />
      <div className='font-medium text-sm flex justify-between px-3 mt-4'>
        <div className='flex space-x-4'>
          <span className='uppercase font-bold'>Total</span>
        </div>
        <span>${cantidad}</span>
      </div>

      <hr className='border-dashed border-2 my-8' />
    </div>
  );
};

export default Resultado;
