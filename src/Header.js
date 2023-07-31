import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  const logo =
    "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg";
  const pluslogo =
    "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg";
  const qLogo =
    "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk_header_mobile_logo-bafb3a.svg";

  const groceryLogo =
    "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk_header_grocery_mobile_logo-d5879f.svg";

  return (
    <section className="header-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="main-logos">
          <div className="flipkart-logo">
            <a className="navbar-brand" href="#">
              <img src={logo} />
            </a>
            <div className="plus-sec">
              <span style={{ color: "#9e9e9e" }}>Explore</span>
              <span style={{ color: "#ffc200" }}>Plus</span>
              <img src={pluslogo} alt="plus-image" />
            </div>
          </div>
          <div className="qlogo">
            <img src={qLogo} alt="" />
          </div>
          <div className="grocery-log">
            <img src={groceryLogo} alt="" />
          </div>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for Products, Brands and More"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse-lg navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 ps-5 w-100 d-flex justify-content-around baSeller">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <i class="bi bi-shop-window me-2"></i>Become a Seller
                </a>
              </li>
              <li className="nav-item dropdown media-header">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-person"></i> Sign in
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item dropdown-flex1" href="#">
                      <p>New customer?</p>
                      <p className="color">Sign Up</p>
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item dropdown-flex2" href="#">
                      <i class="bi bi-person"></i>
                      <p>My Profile</p>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown-flex2" href="#">
                      <i class="bi bi-shield-plus"></i>
                      <p>Flipkart Plus Zone</p>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown-flex2" href="#">
                      <i class="bi bi-box-seam"></i>
                      <p>Orders</p>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown-flex2" href="#">
                      <i class="bi bi-heart"></i>
                      <p>Wishlist</p>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown-flex2" href="#">
                      <i class="bi bi-gift"></i>
                      <p>Rewards</p>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown-flex2" href="#">
                      <i class="bi bi-postcard-heart"></i>
                      <p>Gift Cards</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item media-header">
                <a className="nav-link" href="#">
                  <i class="bi bi-cart"></i> Cart
                </a>
              </li>
              <li className="nav-item media-header">
                <a className="nav-link more-icon" href="#">
                  <i class="bi bi-three-dots-vertical"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
