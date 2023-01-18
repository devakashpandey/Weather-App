import React, { useEffect, useState } from 'react'
import "./Temp.css"
import WeatherCard from './WeatherCard'

function Temp() {

  let [searchValue, setSearchValue] = useState("Ara") // for getting the value
  let [weatherInfo, setWeatherInfo] = useState({})   // for storing the values

  let getWeatherData = async () => {

       let BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}
                       &units=metric&appid=99578f76a3bac90e2a9941ca95f09698`  // &units=matric = (to convert FR TO CEL)

       let responce = await fetch(BASE_URL);         
       let data = await responce.json();
     
       let {temp, pressure, humidity} = data.main;  // extracting the values from API
       let {main: weathermood} = data.weather[0]
       let {speed} = data.wind
       let {country, sunset } = data.sys
       let {name: cityname} = data;

       let myWeatherInfo = {   // make my custom object to store the data 
                      temp,
                      pressure,
                      humidity,
                      weathermood,
                      speed,
                      country,
                      sunset,
                      cityname
       }

       setWeatherInfo(myWeatherInfo)

  }

  // to run one time when the browser refresh 
  useEffect(() => {

     getWeatherData();

  }, [])


  return (
     <>
      <div className='wrap'>

        <div className='search'>
           <input type="search"
           placeholder='Enter City'
           autoFocus
           className='searchTerm'
           value={searchValue}
           onChange={(e) => setSearchValue(e.target.value)}
           /> 
            <button className='searchButton' onClick={getWeatherData}>Search</button>
        </div>

      </div>

    {/* our tempreture card  */}
       <WeatherCard weatherInfo={weatherInfo} />

     </>
  )
}

export default Temp
