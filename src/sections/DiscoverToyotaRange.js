import Cramy from "../images/ToyotaRange/cramyh.png";
import Fortuner from "../images/ToyotaRange/fortuner.png";
import Glanza from "../images/ToyotaRange/glanza.webp";
import Hilux from "../images/ToyotaRange/hilux.webp";
import InovaCrysta from "../images/ToyotaRange/inovacrysta.png";
import InovaHycross from "../images/ToyotaRange/inovahycross.webp";
import Legender from "../images/ToyotaRange/legender.png";
import Rumion from "../images/ToyotaRange/rumion.jpg";
import Urban from "../images/ToyotaRange/urban.png";
import Velfire from "../images/ToyotaRange/velfire.webp";

import "./DiscoverToyotaRange.css";

export const DiscoverToyotaRange = () => {
  return (
    <div className="ToyotaRange">
      <h1>Discover The Toyota Range</h1>
      
      <div className="ToyotaRangeImages">

        <div className="RangeColOne">
          <div className="CramyDivision">
            <img src={Cramy} alt="Cramy" />
            <h3>Cramy</h3>
          </div>

          <div className="FortunerDivision">
            <img src={Fortuner} alt="Fortuner" />
            <h3>Fortuner</h3>
          </div>
        </div>
        
        <div className="RangeColTwo">
          <div className="GlanzaDivision">
            <img src={Glanza} alt="Glanza" />
            <h3>Glanza</h3>
          </div>
          
          <div className="HiluxDivision">
            <img src={Hilux} alt="Hilux" />
            <h3>Hilux</h3>
          </div>
        </div>
        
        <div className="RangeColThree">
          <div className="InovaCrystaDivision">
            <img src={InovaCrysta} alt="Inova Crysta" />
            <h3>Inova Crysta</h3>
          </div>
          
          <div className="InovaHycrossDivison">
            <img src={InovaHycross} alt="Inova Hycross" />
            <h3>Inova Hycross</h3>
          </div>
        </div>
        
        <div className="RangeColFour">
          <div className="LegenderDivision">
            <img src={Legender} alt="Legender" />
            <h3>Legender</h3>
          </div>
          
          <div className="RumionDivision">
            <img src={Rumion} alt="Rumion" />
            <h3>Rumion</h3>
          </div>
        </div>
        
        <div className="RangeColFive">
          <div className="UrbanDivision">
            <img src={Urban} alt="Urban" />
            <h3>Urban</h3>
          </div>
          
          <div className="VelfireDivision">
            <img src={Velfire} alt="Velifre" />
            <h3>Velfire</h3>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}
