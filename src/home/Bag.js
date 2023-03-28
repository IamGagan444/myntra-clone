import React from 'react'
import "./bag.css"
import { BagData } from './BagData'
import {NavLink} from "react-router-dom"
const Bag = () => {
  return (
    <div id='catbag'>
      <h2>CATEGORIES TO BAG</h2>
   <div className='bag-grid'>
    {
        BagData.map((val)=>{
            return(
                <div key={val.id}>
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

export default Bag
