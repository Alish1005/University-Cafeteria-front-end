import "./topbar.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "../../style/bootstrap.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Topbar() {
  return (
    <div className="UserTopbar mt-5">
      <Navbar theme="transperant"/>
      <nav className="Usermenu bg-primary text-secondary">
        <ul>
          {/* replace the # with the path u need */}
          <li className="hover">
            <Link to="/">Home</Link>
          </li>
          <li className="hover">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="hover">
            <Link to="/Offers">Offers</Link>
          </li>
          <li>
            <li className="cart">
                <Link className="btn btn-secondary text-primary " to="/cart"><ShoppingCartIcon/> Cart</Link>
                <div className="notificationSpan"><span>0</span></div>
            </li>
          </li>
          <li className="hover">
            <Link to="#about">About us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Topbar;
