import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import VerifiedIcon from "@mui/icons-material/Verified";
import "./home.css";
import { color } from "@mui/system";
import { MdAccessibilityNew } from "react-icons/md";
const Discount = () => {
  let [a, setA] = useState(false);
  const show = () => {
    setA(!a)
    // setA(true);
  };

  return (
    <>
      <div className="fixed">
        <div>
          {/* <span>F</span>L<span>A</span>T<span>2</span>0<span>0</span>%<span>O</span>F<span>F</span> */}
          <p>
            {" "}
            <span>FLAT</span> $200 <span> OFF</span>
          </p>
          <ArrowLeftIcon sx={{ fontSize: 55, color: "white" }} onClick={show} />
        </div>
        {a ? (
          <div className="div2">
            {/* <p>
            {" "}
            <b>avila flat</b>{" "}
          </p>
          <div>
            <h1>FLAT 2000 OF </h1>
            <img src="" alt="" />
          </div>
          <h3>cupon code: MYNTRA200</h3>
          <p>Aplicable on your first order</p> */}
            <img
              src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg"
              alt="l"
            />
            <hr />

            <div>
              <span>
                <VerifiedIcon
                  style={{ fontSize: 25, color: "green", margin: "0 5px" }}
                />{" "}
                gennune produts
              </span>
              <span>
                <MdAccessibilityNew
                  style={{ fontSize: 20, color: "green", margin: "0 5px" }}
                />{" "}
                Try & buy
              </span>
              <span>
                <VerifiedIcon
                  style={{ fontSize: 20, color: "green", margin: "0 5px" }}
                />
                Easy exchange & returns
              </span>
            </div>
            <br />
          </div>
        ) : (
          " "
        )}
      </div>
    </>
  );
};

export default Discount;
