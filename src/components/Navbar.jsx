import { useEffect, useState } from "react";
import '../css/Navbar.css'

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["achievements", "Achievements"],
  ["contact", "Contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links
        .map(([id]) => document.getElementById(id))
        .filter(Boolean);

      const current = sections.reduce((currentSection, section) => {
        const top = Math.abs(
          section.getBoundingClientRect().top - 120
        );

        if (!currentSection || top < currentSection.distance) {
          return {
            id: section.id,
            distance: top,
          };
        }

        return currentSection;
      }, null);

      if (current) {
        setActive(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* ================= LOGO ================= */}
        <button
          className="logo"
          onClick={() => scrollTo("home")}
          aria-label="Muhammad Asad Ali Akbar"
        >
          <span className="ma-logo">
            <span className="ma-m">M</span>
            <span className="ma-a">A</span>
          </span>

          {/* <span className="logo-name">
            Muhammad Asad Ali Akbar
          </span> */}
        </button>

        {/* ================= NAV LINKS ================= */}
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {links.map(([id, label]) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* ================= MOBILE MENU ================= */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}

export default Navbar;