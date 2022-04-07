import React from 'react';

const WeatherDetails = (props) => {
    const {city, feel, temp} = props;
    return (
        <div className='glass-card rounded-md text-center'>
            <h2 className='text-2xl font-semibold text-slate-800 mx-48'>{city}</h2><br /><br />
            <h1 className='text-6xl font-light mb-3'>{temp}°c</h1> 
            <h3 className='text-xl font-normal text-slate-700'>{feel}</h3>
            
        </div>
    );
};

export default WeatherDetails;