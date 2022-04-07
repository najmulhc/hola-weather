import React, { useState } from 'react';
import useWeather from '../../hooks/useWeather';

const Header = (props) => {
   const {handleSearchBtn, setCityName} =props;

  
    const handleCityNameInput = e =>{
        setCityName(e.target.value);
    }
  
    return (
        <header className='glass-card   '>
            <div className="container mx-auto flex justify-between items-center">
            <h1 className='text-3xl text-left text-slate-800 '>WeatherApp</h1>
            <div className="text-xl p-2 rounded-md border border-slate-800 bg-white flex items-center ">
            <input type="text" className=' focus:border-red-700' onBlur={handleCityNameInput}  />
           <button type='submit' className='text-slate-800 text-2xl' onClick={handleSearchBtn}> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /> </svg></button>
            </div>
            </div>
        </header>
    );
};

export default Header;