import React from 'react';
import "../bag.css";
import { Data } from './Data';
import {NavLink} from "react-router-dom";

const Slash = () => {
    return (
        <div id='catbag'>
          <h2>BRANDS AT SLASHED PRICES</h2>
       <div className='slash-grid'>
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

export default Slash
