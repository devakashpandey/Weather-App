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

          <div className='weatherInfo'>
            <div className='tempreture'>
              <span>25.5&deg;</span>
            </div>
          </div>
    

    </div>


     </>
  )
}

export default Temp
