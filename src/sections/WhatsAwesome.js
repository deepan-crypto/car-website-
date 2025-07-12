import ImageOne from "../images/WhatsAwesome/1.jpg";
import ImageTwo from "../images/WhatsAwesome/2.jpg";
import ImageThree from "../images/WhatsAwesome/3.jpg";
import ImageFour from "../images/WhatsAwesome/4.jpg";

import "./WhatsAwesome.css";

export const WhatsAwesome = () => {
  return (
    <div className="WhatsAwesome">

      <h1>What's Awesome</h1>

      <div className="WhatsAwesomeDivisions">
        <div className="AwesomeFirst">
          <img src={ImageOne} alt="One" />
          <h3>Become Dealer</h3>
          <button>Know More</button>
        </div>

        <div className="AwesomeSecond">
          <img src={ImageTwo} alt="Two" />
          <h3>Rumion</h3>
          <button>Know More</button>
        </div>

        <div className="AwesomeThird">
          <img src={ImageThree} alt="Three" />
          <h3>Mobility Solution</h3>
          <button>Know More</button>
        </div>

        <div className="AwesomeFourth">
          <img src={ImageFour} alt="Four" />
          <h3>Wheel on Web</h3>
          <button>Know More</button>
        </div>
      </div>
      
    </div>
  )
}
