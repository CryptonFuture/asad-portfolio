import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import '../css/Footer.css'

function Footers() {
  const currentYear = new Date().getFullYear();

  const [showBackToTop, setShowBackToTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* =========================
              LEFT - BRAND
          ========================= */}

          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <a href="#home" className="footer-logo">
              <span className="footer-ma-logo">
                <span className="footer-ma-m">M</span>
                <span className="footer-ma-a">A</span>
              </span>

              
            </a>

            <p className="footer-description">
              Full Stack Developer passionate about building modern,
              scalable and high-performance web applications.
            </p>

            <div className="footer-socials">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>

            </div>

          </motion.div>


          {/* =========================
              CENTER - QUICK LINKS
          ========================= */}

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
          >

            <h3>Quick Links</h3>

            <ul>

              <li>
                <a href="#home">
                  <i className="fas fa-chevron-right"></i>
                  Home
                </a>
              </li>

              <li>
                <a href="#about">
                  <i className="fas fa-chevron-right"></i>
                  About
                </a>
              </li>

              <li>
                <a href="#skills">
                  <i className="fas fa-chevron-right"></i>
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects">
                  <i className="fas fa-chevron-right"></i>
                  Projects
                </a>
              </li>

              <li>
                <a href="#education">
                  <i className="fas fa-chevron-right"></i>
                  Education
                </a>
              </li>

              <li>
                <a href="#contact">
                  <i className="fas fa-chevron-right"></i>
                  Contact
                </a>
              </li>

            </ul>

          </motion.div>


          {/* =========================
              RIGHT - CONTACT INFO
          ========================= */}

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
          >

            <h3>Contact Info</h3>


            {/* Email */}

            <div className="footer-contact-item">

              <div className="footer-contact-icon">
                <i className="fas fa-envelope"></i>
              </div>

              <div>
                <span>Email</span>

                <a href="mailto:your-email@example.com">
                  crypton.futuremedia1989@gmail.com
                </a>
              </div>

            </div>


            {/* Phone */}

            <div className="footer-contact-item">

              <div className="footer-contact-icon">
                <i className="fas fa-phone"></i>
              </div>

              <div>
                <span>Phone</span>

                <a href="tel:+923001234567">
                  +92 322 2382819
                </a>
              </div>

            </div>


            {/* Location */}

            <div className="footer-contact-item">

              <div className="footer-contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>

              <div>
                <span>Location</span>

                <p>House No: A-120 Sector 14-b Shadman Town</p>
              </div>

            </div>

          </motion.div>

        </div>


        {/* =========================
            FOOTER BOTTOM
        ========================= */}

        <div className="footer-bottom">

          <p>
            © {currentYear}{" "}
            <span>Muhammad Asad Ali Akbar</span>.
            All Rights Reserved.
          </p>

          <p className="footer-built">
            Built with
            <i className="fab fa-react"></i>
            React.js
          </p>
{showBackToTop && (
        <motion.a 
        href="#home" 
        className="back-to-top" 
        aria-label="Back to top" 
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
        > 
            <i className="fas fa-arrow-up"></i> 
        </motion.a>
)}
        </div>

      </div>

    </footer>
  );
}

export default Footers;

