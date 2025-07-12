import ImageOne from "../images/more/delivery-lead-time-547x306.jpg";
import ImageTwo from "../images/more/happy-customers-547x306.jpg";
import ImageThree from "../images/more/sixteen-annual-dream-car-contst-547x306.jpg";
import ImageFour from "../images/more/toyota-environment-400x240.jpg";

import "./More.css";

export const More = () => {
  return (
    <div className="more">
      <h1>More</h1>
      <div className="moreImages">
        <img src={ImageOne} alt="One" />
        <img src={ImageTwo} alt="Two" />
        <img src={ImageThree} alt="Three" />
        <img src={ImageFour} alt="Four" />
      </div>
      
    </div>
  )
}
