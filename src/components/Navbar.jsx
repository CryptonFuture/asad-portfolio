
import { useEffect, useState } from "react";
import "../css/Navbar.css";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background only appears after scrolling
      setScrolled(window.scrollY > 35);

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

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActive(id);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
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
        </button>

        {/* ================= NAV LINKS ================= */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map(([id, label]) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => scrollTo(id)}
            >
              <span>{label}</span>
            </button>
          ))}
        </nav>

        {/* ================= MOBILE MENU ================= */}
        <button
          className={`menu-btn ${menuOpen ? "menu-open" : ""}`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
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

