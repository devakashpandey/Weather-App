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

    </div>



     </>
  )
}

export default Temp
