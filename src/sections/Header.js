import ToyotaLogo from "../images/header/Toyota-logo.jpg";
import WhatsappLogo from "../images/header/whatsapp_logo.png";
import MenuIcon from "../images/header/menu_icon.png";
import CloseIcon from "../images/header/close_icon.png";

import "./Header.css";

export const Header = () => {
  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }

  return (
    <header>
      <nav>
        <ul className="sidebar">
          <li onClick={hideSidebar} className="closeList"><img className="closeIcon" src={CloseIcon} alt="Close Icon" /></li>
          <li>Products</li>
          <li>Virtual Showroom</li>
          <li>Service</li>
          <li>Used Cars</li>
          <li>Mobility</li>
          <li>Media</li>
          <li>Toyota in India</li>
          <li>More</li>
          <li>Buy Online</li>
          <li><img className="whatsappLogo" src={WhatsappLogo} alt="Whatsapp Logo" /></li>
        </ul>

        <ul>
          <li><img className="toyotaLogo" src={ToyotaLogo} alt="Toyota Logo" /></li>
          <li className="hideOnSmall">Products</li>
          <li className="hideOnSmall">Virtual Showroom</li>
          <li className="hideOnSmall">Service</li>
          <li className="hideOnSmall">Used Cars</li>
          <li className="hideOnSmall">Mobility</li>
          <li className="hideOnSmall">Media</li>
          <li className="hideOnSmall">Toyota in India</li>
          <li className="hideOnSmall">More</li>
          <li className="hideOnSmall">Buy Online</li>
          <li className="hideOnSmall"><img className="whatsappLogo" src={WhatsappLogo} alt="Whatsapp Logo" /></li>
          <li onClick={showSidebar} className="menuList"><img className="menuIcon" src={MenuIcon} alt="Menu Icon" /></li>
        </ul>
      </nav>
    </header>
  )
}
