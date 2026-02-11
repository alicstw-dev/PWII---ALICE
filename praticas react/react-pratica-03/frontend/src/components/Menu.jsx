import { NavLink } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/cadastro"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Cadastro
        </NavLink>
      </li>
    </ul>
  );
}
