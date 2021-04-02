import { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment> 
      <header className='flex justify-between items-center bg-indigo-900 shadow-md py-4 px-6'>
        <div className='nav-lef flex justify-center items-center w-10 h-10 bg-blue-100 rounded-lg'>
          <h1 className='font-extrabold'>CP</h1>
        </div>
        <div className='nav-right'>
          <p className="font-medium text-white">Created by Eduardo Guette</p>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
