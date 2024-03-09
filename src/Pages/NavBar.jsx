import { NavLink } from "react-router-dom";

const NavBar = () => {
  const style = "d-block";

  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? `${style} text-secondary` : `${style}`;
            }}
            to={"/"}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? `${style} text-secondary` : `${style}`;
            }}
            to={"/about"}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? `${style} text-secondary` : `${style}`;
            }}
            to={"/contact"}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? `${style} text-secondary` : `${style}`;
            }}
            to={"/profile"}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
