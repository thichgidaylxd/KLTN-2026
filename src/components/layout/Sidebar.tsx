import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold">Menu</h2>
      </div>
      <nav className="mt-8">
        <Link
          to="/dashboard"
          className="block px-6 py-3 hover:bg-gray-700 transition"
        >
          Dashboard
        </Link>
        <Link
          to="/about"
          className="block px-6 py-3 hover:bg-gray-700 transition"
        >
          About
        </Link>
      </nav>
    </aside>
  );
}
