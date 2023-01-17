import React, { useEffect, useState } from 'react'
import "./Temp.css"

function Temp() {

   let [searchItem, setSearchItem] = useState("Patna")

   let getWeatherData = async () =>{
         try {
               let BASE_URL =  `https://api.openweathermap.org/data/2.5/weather?q=${searchItem}
                                &units=metric&appid=99578f76a3bac90e2a9941ca95f09698` // &units=metric (FOR CONVERT FR TO CEL)    
                 
                 let responce = await fetch(BASE_URL);
                 let data = await responce.json();
                 
                 let {temp, humidity, pressure} = data.main;  // EXTRACTING VALUES
                 let {main:weathermood} = data.weather[0] // array of an object

            

         } catch (error) {
            console.log(error)
         }
   }

//  for the first timne to get and show the data after open app
   useEffect(()=>{
     getWeatherData();

   }, [])

  return (
     <>
      <div className='wrap'>

        <div className='search'>
           <input type="search"
           placeholder='Enter any place'
           autoFocus
           className='searchTerm'
           value={searchItem}
           onChange={(e)=> setSearchItem(e.target.value)}
           /> 

            <button className='searchButton' onClick={getWeatherData}>Search</button>

        </div>
      </div>

    {/* our tempreture card  */}

    <div className='weather-box'>
          <div className='weather-icon'>
          <i className={"wi wi-day-sunny"}></i>
          </div>

          <div className='weather-info'>
            <div className='temp'>
              <span>25.5&deg;</span>
            </div>

          <div className='description'>
             <div className='weather-cond'>Sunny</div>
             <div className='place'> Pune,India </div>
          </div>
        </div>

      <div className='date'>{new Date().toLocaleString()}</div>

      <div className='temp-info'>
           <div className='temp-min-max'>
                      <div className='two-sided-section'>
                         <p><i className={"wi wi-sunset"} ></i></p>
                         <p className='text-info'>19:19 pm <br/>
                              Sunset
                         </p>
                      </div>

                      <div className='two-sided-section'>
                         <p><i className={"wi wi-humidity"} ></i></p>
                         <p className='text-info'>19:19 pm <br/>
                              Humidity
                         </p>
                      </div>
           </div>

            <div className='temp-min-max'>
                      <div className='two-sided-section'>
                         <p><i className={"wi wi-rain"} ></i></p>
                         <p className='text-info'>19:19 pm <br/>
                              Pressure
                         </p>
                      </div>

                      <div className='two-sided-section'>
                         <p><i className={"wi wi-strong-wind"} ></i></p>
                         <p className='text-info'>19:19 pm <br/>
                              Speed
                         </p>
                      </div>
            </div>
      </div>

    </div>

     </>
  )
}

export default Temp
