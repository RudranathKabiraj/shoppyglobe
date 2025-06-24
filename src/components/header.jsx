// Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">ShoppyGlobe</Link>
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/cart" className="hover:text-yellow-400">Cart 🛒</Link>
      </nav>
    </header>
  );
}
