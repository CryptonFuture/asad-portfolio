import { useEffect, useState } from "react";

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
        const top = Math.abs(section.getBoundingClientRect().top - 120);

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
        <button className="logo" onClick={() => scrollTo("home")}>
          <span>Muhammad Asad Ali Akbar</span>
        </button>

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