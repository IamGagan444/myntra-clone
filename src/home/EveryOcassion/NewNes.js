import React from "react";
import "./new.css"
import { Data } from "./Data";
import { Data2 } from "./Data2";
import { Data3 } from "./Data3";
import { Data4 } from "./Data4";

import { NavLink } from "react-router-dom";

const NewNes = () => {
  return (
    <div id="catbag">
      <h2>NEWNESS FOR EVERY OCCASION</h2>
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

      <h2>LATEST IN BEAUTY & GROOMING</h2>
      <div className="gift">
        {Data2.map((val, ind) => {
          return (
            <div key={ind}>
              <NavLink>
                <img src={val.img} alt="img"></img>
              </NavLink>
            </div>
          );
        })}
      </div>

      <h2>UNMISSABLE THIS SEASON</h2>
      <div className="seasion">
        {Data3.map((val, ind) => {
          return (
            <div key={ind}>
              <NavLink>
                <img src={val.img} alt="img"></img>
              </NavLink>
            </div>
          );
        })}
      </div>

      <h2>COLOURS OF THE SEASON</h2>
      <div className="gift">
        {Data4.map((val, ind) => {
          return (
            <div key={ind}>
              <NavLink>
                <img src={val.img} alt="img"></img>
              </NavLink>
            </div>
          );
        })}
      </div>






    </div>
  );
};

export default NewNes;
