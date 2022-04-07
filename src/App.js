 import useWeather from './hooks/useWeather';
 import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [cityName, setCityName] = useState();
  const [weather,setWeather] = useWeather(cityName); 
  
  const handleSearchBtn =()=>{
    console.log(weather);
  }
  return (
    <div className=" app ">
       <Header
       setCityName={setCityName}
       handleSearchBtn={handleSearchBtn}
       ></Header>
      { 
        weather.weather? <h1>weather ache</h1>:<h1>no weather data found yet</h1>
      }
    </div>
  );
}

export default App;
