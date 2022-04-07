 import useWeather from './hooks/useWeather';
 import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [cityName, setCityName] = useState();
  const [weather,setWeather] = useWeather(cityName); 
  const tempInKelvin = weather.main.temp;
  const temperature = (tempInKelvin -273).toFixed(1);
  
  const handleSearchBtn =()=>{
    console.log(weather );
  }
  return (
    <div className=" app ">
       <Header
       setCityName={setCityName}
       handleSearchBtn={handleSearchBtn}
       ></Header>
      <div className="w-full h-96   flex items-center justify-center">
      { 
        weather.main? <h1 className='text-2xl m-auto rounded-md glass-card'>{weather.name}, {weather.weather[0].main}, Current Tempareture: {temperature}°C</h1>:<h1 className='text-2xl rounded-xl m-auto glass-card'>no weather data found yet</h1>
      }
      </div>
    </div>
  );
}

export default App;
