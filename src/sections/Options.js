import LocationImage from "../images/Options/location.png";
import SteerImage from "../images/Options/drive.png";
import PriceTagImage from "../images/Options/pricetag.png";
import EBookImage from "../images/Options/ebook.png";
import BrochureImage from "../images/Options/brochure.png";
import ExchangeImage from "../images/Options/exchange.png";

import "./Options.css";

export const Options = () => {
  return (
    <div className="Options">
      <div className="MobileOptions">
        <div className="RowOne">
          <div className="dealer">
            <img src={LocationImage} alt="Location" />
            <p>Find a Dealer</p>
          </div>

          <div className="testDrive">
            <img src={SteerImage} alt="Steer" />
            <p>Test Drive</p>
          </div>
        </div>
        
        <div className="RowTwo">
          <div className="price">
            <img src={PriceTagImage} alt="Price Tag" />
            <p>Price List</p>
          </div>

          <div className="ebook">
            <img src={EBookImage} alt="E-Book" />
            <p>E Book</p>
          </div>
        </div>
        
        <div className="RowThree">
          <div className="brochure">
            <img src={BrochureImage} alt="Brochure" />
            <p>Brochure</p>
          </div>

          <div className="exchange">
            <img src={ExchangeImage} alt="Exchange" />
            <p>Exchange</p>
          </div>
        </div>
        
      </div>

      <div className="OtherOptions">
        <div className="dealer">
          <img src={LocationImage} alt="Location" />
          <p>Find a Dealer</p>
        </div>

        <div className="testDrive">
          <img src={SteerImage} alt="Steer" />
          <p>Test Drive</p>
        </div>

        <div className="price">
          <img src={PriceTagImage} alt="Price Tag" />
          <p>Price List</p>
        </div>

        <div className="ebook">
          <img src={EBookImage} alt="E-Book" />
          <p>E Book</p>
        </div>

        <div className="brochure">
          <img src={BrochureImage} alt="Brochure" />
          <p>Brochure</p>
        </div>

        <div className="exchange">
          <img src={ExchangeImage} alt="Exchange" />
          <p>Exchange</p>
        </div>
      </div>
    </div>
  )
}
