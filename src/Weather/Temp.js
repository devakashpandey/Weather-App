import React from 'react'
import "./Temp.css"

function Temp() {
  return (
     <>
      <div className='wrap'>
        <div className='search'>
           <input type="search"
           placeholder='Enter any place'
           autoFocus
           className='searchTerm'
           /> 
            <button className='searchButton'>Search</button>
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
                              Rain
                         </p>
                      </div>

                      <div className='two-sided-section'>
                         <p><i className={"wi wi-strong-wind"} ></i></p>
                         <p className='text-info'>19:19 pm <br/>
                              Wind
                         </p>
                      </div>
            </div>
      </div>
      
    </div>

     </>
  )
}

export default Temp
