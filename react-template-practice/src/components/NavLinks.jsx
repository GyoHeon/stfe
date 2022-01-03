import { NavLink } from "react-router-dom";
import styles from "../App.module.css";

const activeStyle = { color: "green" };

export default function NavLinks() {
  return (
    <ul>
      <li className={styles.nav}>
        <NavLink to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" exact activeStyle={activeStyle}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile/lgh" activeStyle={activeStyle}>
          Profile/lgh
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            return match !== null && !location.search;
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=lgh"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            return match !== null && location.search;
          }}
        >
          About?name=lgh
        </NavLink>
      </li>
    </ul>
  );
}
