import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const searchParams = new URLSearchParams(location.search);
  const untuk = searchParams.get("untuk");
  const queryString = untuk ? `?untuk=${encodeURIComponent(untuk)}` : "";

  const navItems = [
    { to: "/", label: "Beranda" },
    { to: "/events", label: "Acara" },
    { to: "/gallery", label: "Galeri" },
    { to: "/rsvp", label: "Reservasi" },
    { to: "/location", label: "Lokasi" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to={`/${queryString}`} className="flex items-center">
            <span className="font-bold text-xl text-sage-500 tracking-wide">
              Undangan Pernikahan
            </span>
          </Link>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={`${item.to}${queryString}`}
                label={item.label}
                active={location.pathname === item.to}
              />
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-sage-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={`${item.to}${queryString}`}
                  label={item.label}
                  active={location.pathname === item.to}
                  onClick={closeMenu}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, label, active, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`py-2 px-4 font-medium transition duration-200 ${
        active
          ? "text-sage-600 border-b-2 border-sage-500"
          : "text-gray-600 hover:text-sage-500 hover:border-b-2 hover:border-sage-300"
      }`}
    >
      {label}
    </Link>
  );
}
