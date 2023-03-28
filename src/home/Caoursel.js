import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./item";
import homeimg1 from "./img/img1.webp";
import homeimg2 from "./img/img2.webp";
import img from "./img/img3.webp";
import img3 from "./img/img4.webp";
import img5 from "./img/img5.webp";
import img2 from "./img/homeimg2.webp";
const sliderImg = [homeimg1, homeimg2,img,img2,img3,img5];
function Example() {
  return (
    <Carousel>
      {sliderImg.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
export default Example;
