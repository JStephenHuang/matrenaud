import { Link, NavLink } from "react-router-dom";

const NavbarLink = ({ name, path }: { name: string; path: string }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "navbar-link-active ml-2" : "navbar-link ml-2"
      }
      to={`/${path}`}
    >
      {name}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link className="text-[24px] bold" to="/">
        MATRENAUD
      </Link>
      <div className="flex items-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar-link-active" : "navbar-link"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavbarLink name="Photos" path="photos" />
        <NavbarLink name="About" path="about" />
        <NavbarLink name="Media" path="media" />
        <NavbarLink name="Shop" path="shop" />
      </div>
    </nav>
  );
};

export default Navbar;
