const Msg = ({ ...props }) => {
  return (
    props.error && (
      <div className='bg-red-100 border-2 border-red-200 rounded-md px-3 my-2 text-lg font-medium py-2 flex items-center space-x-4'>
        <box-icon name='info-circle'></box-icon>
        <span>Todos los campos son obligatorios</span>
      </div>
    )
  );
};

export default Msg;
