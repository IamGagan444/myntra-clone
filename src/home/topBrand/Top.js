import React from 'react'
import "../bag.css"
import { Data } from './Data'
import {NavLink} from "react-router-dom"
const Top = () => {
  return (
    <div id='catbag'>
      <h2>DEALS ON TOP BRANDS</h2>
   <div className='bag-grid TOP'>
    {
        Data.map((val,ind)=>{
            return(
                <div key={ind}>
                    <NavLink>
                        <img src={val.img} alt="img"></img>
                    </NavLink>
                </div>
            )
        })
    }
   </div>
      
    </div>
  )
}

export default Top;
