import { useEffect, useState } from "react"

const useWeather = cityName =>{
    const [weather, setWeather] = useState({});
    const apiKey = '4ae6fb068cc2205edcc3036059a84357'
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    useEffect( ()=>{
        fetch(link)
        .then(res => res.json())
        .then(data => setWeather(data))
    },[link])
    return [weather, setWeather];
}
export default useWeather;