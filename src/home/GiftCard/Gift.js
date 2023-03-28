import React from "react";
import "./gift.css"
import { Data } from "./Data";
import { Datac } from "./Datac";
import { NavLink } from "react-router-dom";

const Luxe = () => {
  return (
    <div id="catbag">
      <h2>GIFTING CARDS</h2>
      <div className="gift">
        {Data.map((val, ind) => {
          return (
            <div key={ind}>
              <NavLink>
                <img src={val.img} alt="img"></img>
              </NavLink>
            </div>
          );
        })}
      </div>

       <div className="card">
        {
          Datac.map((val,ind)=>{
            return(
              <div key={ind}>
                 <NavLink to="#">
                 <img src={val.img} alt="img"></img>
                 </NavLink>
              </div>
            )
          })

        }


       </div>


    </div>
  );
};

export default Luxe;
