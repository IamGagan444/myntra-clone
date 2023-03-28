import React from "react";
import "./deal.css";
import { dealData } from "./DealData";
const Deal = () => {
  return (
    <div className="deals">
      <h2>DEAL OF THE DAY</h2>

      <div className="deal-item">
        {dealData.map((data) => {
          return (
            <div key={data.id}>
              <div>
                <img src={data.img} alt="fashion" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Deal;
