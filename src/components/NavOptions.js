const arrayOptions = ['3 meses', '6 meses', '12 meses', '24 meses'];

const NavOptions = ({ show, setShow, optionSelected }) => {
  const hanleClickOption = (e) => {
    optionSelected(e.target.textContent);
    setShow(false);
  };

  return (
    show && (
      <nav className='border-2 border-gray-200 rounded-lg bg-white shadow-md h-28 overflow-y-auto nav-options absolute w-full'>
        {arrayOptions.map((option, index) => (
          <li key={index} className='list-none px-4 py-2 hover:bg-gray-100 '>
            <button className='w-full text-left focus:outline-none font-medium select-none' onClick={hanleClickOption}>
              {option}
            </button>
          </li>
        ))}
      </nav>
    )
  );
};

export default NavOptions;
