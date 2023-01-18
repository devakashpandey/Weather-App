import React, { useEffect, useState } from 'react'

const WeatherCard = ({weatherInfo}) => {

   let [weatherState, setWeatherState] = useState("");

    let { 
           temp,
           pressure,
           humidity,
           weathermood,
           speed,
           country,
           sunset,
           cityname
 } = weatherInfo;

 useEffect(()=>{
  
  if(weathermood){
     switch(weathermood){

         case "Clouds" : setWeatherState("wi-day-cloudy")
         break;
         case "Clear" : setWeatherState("wi-day-sunny")
         break;
         case "Smoke" : setWeatherState("wi-smoke")
         break;
         case "Haze" : setWeatherState("wi-fog")
         break;
         case "Rain" : setWeatherState("wi-day-rain")
         break;

         default:setWeatherState("wi-day-sunny")
         break;
     }
  }
    
 },[weathermood])

 // converting seconds into time ---->>

 let sec = sunset;
 let date = new Date(sec * 1000)
 let time = `${date.getHours()}:${date.getMinutes()} `


  return (
     <>
       <div className='weather-box'>
          <div className='weather-icon'>
          <i className={`wi ${weatherState}`}></i>
          </div>

          <div className='weather-info'>
            <div className='temp'>
              <span>{temp}&deg;</span>
            </div>

          <div className='description'>
             <div className='weather-cond'>{weathermood}</div>
             <div className='place'>{cityname}, {country}</div>
          </div>
        </div>

      <div className='date'>{new Date().toLocaleString()}</div>

      <div className='temp-info'>
           <div className='temp-min-max'>
                      <div className='two-sided-section'>
                         <p><i className={"wi wi-sunset"} ></i></p>
                         <p className='text-info'>{time}PM<br/>
                              Sunset
                         </p>
                      </div>

                      <div className='two-sided-section'>
                         <p><i className={"wi wi-humidity"} ></i></p>
                         <p className='text-info'>{humidity} <br/>
                              Humidity
                         </p>
                      </div>
           </div>

            <div className='temp-min-max'>
                      <div className='two-sided-section'>
                         <p><i className={"wi wi-rain"} ></i></p>
                         <p className='text-info'>{pressure}<br/>
                              Pressure
                         </p>
                      </div>

                      <div className='two-sided-section'>
                         <p><i className={"wi wi-strong-wind"} ></i></p>
                         <p className='text-info'>{speed}<br/>
                              Speed
                         </p>
                      </div>
            </div>
      </div>

    </div>
     </>
  )
}

export default WeatherCard
