import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My Dashboard
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Projects
          </Link>
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
