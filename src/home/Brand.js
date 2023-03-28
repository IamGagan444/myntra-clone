import React from "react";
import "./deal.css";
import { BrandData } from "./BrandData";
const Brand = () => {
  return (
    <div className="deals">
      <h2>BEST OF MYNTRA EXCLUSIVE BRANDS</h2>

      <div className="brand-item">
        {BrandData.map((data) => {
          return (
            <div key={data.id}>
              <div>
                <img src={data.img} alt="fashion" />
                <br />
                {/* <p>{data.fashion} </p> */}
                {/* <div className="text">
                  <p>&#8377; {data.max} </p>
                  <p>&#8377; {data.min}</p>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brand;
