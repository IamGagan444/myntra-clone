import React from 'react'
import { NavLink } from 'react-router-dom'
import { PickData } from './PickData'
import "./Pick.css"

const Pick = () => {
  return (
    <>
      <div id='pick'>
        <h2>TOPS PICKS</h2>
        <div className='TOPS-GRID'>
        {
            PickData.map((val)=>{
                return(
                    <div key={val.id}>
                      <NavLink to="#">
                        <img src={val.img} alt="img"/>
                      </NavLink>
                    </div>
                )
            })
        }


        </div>

      </div>
    </>
  )
}

export default Pick
