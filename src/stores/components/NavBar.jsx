import { useState } from "react";
import { Link } from "react-router-dom";
import { usecart } from "../context/CartContext";

const NavBar = () => {
  const { cart } = usecart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky-top shadow-sm bg-white">
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid px-3 px-lg-4">
          <Link className="navbar-brand fw-bold text-primary" to="/" style={{ fontSize: '1.5rem' }}>
            The Smooth Shop
          </Link>

          <form className="d-none d-md-flex mx-auto" style={{ maxWidth: '500px', width: '100%' }}>
            <input
              className="form-control"
              type="search"
              placeholder="Search for products..."
              style={{ borderRadius: '25px' }}
            />
          </form>

          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-outline-primary btn-sm d-none d-lg-inline">
              Login
            </button>
            <button className="btn btn-primary btn-sm d-none d-lg-inline">
              Signup
            </button>

            <Link to="/cart" className="position-relative text-decoration-none">
              <span style={{ fontSize: '1.5rem' }}>🛒</span>
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.7rem' }}>
                  {cart.length}
                </span>
              )}
            </Link>

            <button
              className="navbar-toggler border-0"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`bg-light border-bottom ${menuOpen ? 'd-block' : 'd-none d-lg-block'}`}>
        <div className="container-fluid">
          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-start align-items-lg-center gap-2 gap-lg-0 py-2 px-3">
            <Link to="/mobiles" className="nav-link px-3 py-2 text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>
              Mobiles
            </Link>
            <Link to="/Ac" className="nav-link px-3 py-2 text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>
              AC
            </Link>
            <Link to="/Books" className="nav-link px-3 py-2 text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>
              Books
            </Link>
            <Link to="/Computer" className="nav-link px-3 py-2 text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>
              Computer
            </Link>
            <Link to="/fridge" className="nav-link px-3 py-2 text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>
              Fridge
            </Link>
            <Link to="/furniture" className="nav-link px-3 py-2 text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>
              Furniture
            </Link>
            <Link to="/kitchen" className="nav-link px-3 py-2 text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>
              Kitchen
            </Link>
            <Link to="/mens" className="nav-link px-3 py-2 text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>
              Mens
            </Link>
            <Link to="/womens" className="nav-link px-3 py-2 text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>
              Womens
            </Link>
            <Link to="/speakers" className="nav-link px-3 py-2 text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>
              Speakers
            </Link>
            <Link to="/watch" className="nav-link px-3 py-2 text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>
              Watch
            </Link>
            <Link to="/tv" className="nav-link px-3 py-2 text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>
              TV
            </Link>
            <Link to="/" className="nav-link px-3 py-2 text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>
              Back To Menu
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;