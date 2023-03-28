
import React from 'react';
import "../bag.css";
import { Data } from './Data';
import {NavLink} from "react-router-dom";

const Luxe = () => {
    return (
        <div id='catbag'>
          <h2>BEST BUYS</h2>
       <div className='slash-grid  best-grid'>
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

export default Luxe;

