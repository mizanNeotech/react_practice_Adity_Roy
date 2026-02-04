import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 py-4 flex gap-6">
      <Link to="/" className="hover:text-blue-400">Home</Link>
      <Link to="/about" className="hover:text-green-400">About</Link>
    </nav>
  )
}

export default Navbar

