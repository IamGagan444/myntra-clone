import React from "react";
import { NavLink } from "react-router-dom";
import { CastData } from "./CastData";
import { Trend } from "./Trend";
import { Him } from "./Him";
import { Kids } from "./Kids";
import { TopBrand } from "./TopBrand";
import "./style.css";

const Cast = () => {
  return (
    <>
      <div id="pick">
        <h2>STYLECAST HOTTEST FINDS</h2>
        <div id="pick-grid2">
          {CastData.map((val, ind) => {
            return (
              <div key={ind}>
                <NavLink to="#">
                  <img src={val.img} alt="img" />
                </NavLink>
              </div>
            );
          })}
        </div>

        <h2>TRENDS FOR HER</h2>
        <div className="grid">
          {Trend.map((val, ind) => {
            return (
              <div key={ind}>
                <NavLink to="#">
                  <img src={val.img} alt="img" />
                </NavLink>
              </div>
            );
          })}
        </div>

        <h2>TRENDS FOR HIM</h2>
        <div className="grid">
          {Him.map((val, ind) => {
            return (
              <div key={ind}>
                <NavLink to="#">
                  <img src={val.img} alt="img" />
                </NavLink>
              </div>
            );
          })}
        </div>

        <h2>BEST OF KIDSWEAR</h2>
        <div className="kids">
          {Kids.map((val, ind) => {
            return (
              <div key={ind}>
                <NavLink to="#">
                  <img src={val.img} alt="img" />
                </NavLink>
              </div>
            );
          })}
        </div>

        <h2>NEW IN TOP BRANDS</h2>
        <div className="grid">
          {TopBrand.map((val, ind) => {
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

export default Cast;
