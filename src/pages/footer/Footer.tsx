import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="mt-16 mb-0">
      <footer className="footer justify-evenly p-12 bg-[#04211c] text-white">
        <nav>
          <h6 className="footer-title">ABS Sports Corner</h6>
          <Link to="/about-us" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/contact" className="link link-hover">
            Jobs
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">ABS Sports Link</h6>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/all-products" className="link link-hover">
            All Products
          </Link>
          <Link to="/dashboard/manage-products" className="link link-hover">
            Manage Product
          </Link>
          <Link to="/cart-details" className="link link-hover">
            Cart Details
          </Link>
        </nav>
      </footer>

      <footer className="footer justify-around p-4 border-t bg-[#04211c] text-white  border-base-300">
        <aside className="items-center grid-flow-col">
          <div className="avatar">
            <div className="w-20 rounded">
              <img src={logo} alt="" />
            </div>
          </div>
          <p>
            ABS Sports <br />
            Provide Sports Equipment
          </p>
        </aside>

        <nav className="md:place-self-center md:justify-self-center">
          <div className="grid grid-flow-col gap-4">
            <Link to="https://www.facebook.com/abdul.satter.1614">
              <svg width="32" viewBox="0 0 24 24" className="fill-current ">
                <FaFacebook />{" "}
              </svg>
            </Link>
            <Link to="www.linkedin.com/in/md-abdul-satter-ba10aa254">
              <svg width="32" viewBox="0 0 24 24" className="fill-current ">
                <FaLinkedin />{" "}
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
