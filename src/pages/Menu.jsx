import { NavLink } from "react-router-dom";

export default function Menu() {
  const activeClass = ({ isActive }) => (isActive ? "menu__item-active" : "menu__item");
  return (
    <nav className="menu">
      <NavLink className={activeClass} to="/">
        Главная
      </NavLink>
      <NavLink className={activeClass} to="/drift">
        Дрифт-такси
      </NavLink>
      <NavLink className={activeClass} to="/timeattack">
        Time Attack
      </NavLink>
      <NavLink className={activeClass} to="/forza">
        Forza Karting
      </NavLink>
    </nav>
  );
}
