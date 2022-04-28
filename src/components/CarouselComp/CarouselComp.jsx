import React from "react";
import { Carousel } from "react-responsive-carousel";
import p1 from "../../images/chicken-leg.png";
import p2 from "../../images/cheese-burger.png";
import p3 from "../../images/pizza.png";
import p4 from "../../images/ramen.png";

const CarouselComp = () => {
  return (
    <div style={{padding:'1rem'}}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={2500}
      >
        <div>
          <img src={p1} alt="im1" style={{ height: "50rem", width: "auto" }} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={p2} alt="im2" style={{ height: "50rem", width: "auto" }} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={p3} alt="im3" style={{ height: "50rem", width: "auto" }} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src={p4} alt="im4" style={{ height: "50rem", width: "auto" }} />
          {/* <p className="legend">Legend 4</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
