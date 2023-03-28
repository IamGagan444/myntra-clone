import React from "react";
import Bag from "./Bag";

import Brand from "./Brand";
import Example from "./Caoursel";
import Deal from "./Deal";
import Discount from "./Discount";
import Pick from "./Pick";
import Top from "../home/topBrand/Top"
import Slash from "./Slashed/Slash";
import Best from "./BestBuy/Best"
import Luxe from "./MyntraLuxe/Luxe";
import  Gift  from "./GiftCard/Gift";
import Cast from "./styleCast/Cast";
import NewNes from "./EveryOcassion/NewNes";
import Exclusive from "./Influencer/Exclusive";
const home1 = () => {
  return (
    <>
      <div className="slider">
        {" "}
        <Example />
      </div>
      <Discount />
      <Deal/>
      <Brand/>
      <Pick/>
      <Bag/>
      <Top/>
      <Slash/>
      <Best/>
      <Luxe/>
      <Gift/>
      <Cast/>
      <NewNes/>
      <Exclusive/>

      
    </>
  );
};

export default home1;
