 import useWeather from './hooks/useWeather';
 import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

function App() {
  const [cityName, setCityName] = useState();
  const [weather,setWeather] = useWeather(cityName); 
  if(weather.main){
    var  tempInKelvin = weather.main.temp;
  }
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
        weather.main? <WeatherDetails
        city={weather.name}
        feel={weather.weather[0].main}
        temp={temperature} ></WeatherDetails>:<h1 className='text-2xl rounded-xl text-red-800 m-auto glass-card'>No weather data found!</h1>
      }
      </div>
    </div>
  );
}

export default App;
