import { NavLink } from "react-router-dom";
import bear from "../assets/Logo.svg";

function Header() {
  return (
    <header>
      <img className="bear" src={bear} alt="Logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
