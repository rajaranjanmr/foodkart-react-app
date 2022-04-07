import navimage from "../assets/images/logo.jpeg";
import "./navigation.css";
import "./clhome.css";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div className="top-section">
      <div className="container-logo">
        <div className="logo">
          <img src={navimage} alt="logot" />{" "}
        </div>
      </div>

      <div className="navbar-items">
        <ul className="navbar-item">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
          <li>
            <Link to="/wishlist">wishlist</Link>
          </li>
          <li>
            <Link to="/logout">logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export { Navigation };
