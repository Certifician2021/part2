import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({query}) => {    
   
    const [weather, setWeather] = useState([])
   const api_key =  process.env.REACT_APP_API_KEY
   const lat = query.map(q => q.capitalInfo.latlng[0])
   const lng = query.map(q => q.capitalInfo.latlng[1])

    useEffect(() => {
        function hook(){
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat[0]}&lon=${lng[0]}&appid=${api_key}`)
            .then(response => {
              const apiResponse = response.data;
              setWeather(apiResponse)
              console.log(apiResponse)
            })}
            hook()
    }, [])

            return(
                <div>
                    <h2>Weather in {query.map((q)=>q.capital[0])}</h2>
                   <p>Temperature: {weather && weather.main ? weather.main.temp:''}° Celcius</p>
                   <img  src={weather && weather.main ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`:''} alt='weather_icon' />
                   <p>Wind Speed : {weather && weather.wind ? weather.wind.speed:''} m/s</p>
                </div>
            )}

export default Weather