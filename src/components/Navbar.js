import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 text-white z-50">
      <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">

        {/* Logo from public */}
        <Link to="/">
          <img
            src="/logo.png"
            className="h-10 w-auto"
          />
        </Link>

        {/* Menu */}
        <div className="flex gap-4 text-sm font-semibold">
          <Link to="/" className="px-4 py-2  rounded hover:bg-blue-700">
            HOME
          </Link>
          <Link to="/about" className="px-4 py-2 rounded hover:bg-blue-700">
            ABOUT
          </Link>
          <Link to="/services" className="px-4 py-2 rounded hover:bg-blue-700">
            CAREER
          </Link>
          <Link to="/contact" className="px-4 py-2 rounded hover:bg-blue-700">
            CONTACT 
          </Link>
          <Link to="/feedback" className="px-4 py-2 rounded hover:bg-blue-700">
            FEEDBACK
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
