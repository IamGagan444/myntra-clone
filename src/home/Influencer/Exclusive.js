import React from "react";
import { NavLink } from "react-router-dom";
import { Data } from "./Data";
import { Data2 } from "./Data2";
import { Data3} from "./Data3";
import "./style.css";

const Exclusive = () => {
  return (
    <>
      <div id="pick">
        <h2>TOP INFLUENCERS EXCLUSIVE STYLES</h2>
        <div className="pick-grid">
          {Data.map((val, ind) => {
            return (
              <div key={ind}>
                <NavLink to="#">
                  <img src={val.img} alt="img" />
                </NavLink>
              </div>
            );
          })}
        </div>
        {/* df  */}

        <h2>TOP INFLUENCERS EXCLUSIVE STYLES</h2>
        <div className="pick-grid2">
          {Data2.map((val, ind) => {
            return (
              <div key={ind}>
                <NavLink to="#">
                  <img src={val.img} alt="img" />
                </NavLink>
              </div>
            );
          })}
        </div>


        <h2>TOP INFLUENCERS EXCLUSIVE STYLES</h2>
        <div className="pick-grid2">
          {Data3.map((val, ind) => {
            return (
              <div key={ind}>
                <NavLink to="#">
                  <img src={val.img} alt="img" />
                </NavLink>
              </div>
            );
          })}
        </div>



      </div>
    </>
  );
};

export default Exclusive;
