import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "AI Chat Application",
    category: "web",
    type: "Full Stack",
    icon: "fas fa-comments",
    description:
      "AI-powered chat platform with authentication, conversations and scalable backend architecture.",
    tech: ["React", "Node.js", "MongoDB", "Redis"],
  },
  {
    title: "Authentication System",
    category: "backend",
    type: "Backend",
    icon: "fas fa-user-shield",
    description:
      "Secure authentication API with JWT access tokens, refresh tokens and role-based authorization.",
    tech: ["Node.js", "Express", "JWT", "MongoDB"],
  },
  {
    title: "Admin Dashboard",
    category: "web",
    type: "Web Development",
    icon: "fas fa-chart-line",
    description:
      "Responsive analytics dashboard with charts, CRUD operations and REST API integration.",
    tech: ["React", "Vite", "REST API", "Chart.js"],
  },
  {
    title: "Docker CI/CD Pipeline",
    category: "backend",
    type: "DevOps",
    icon: "fab fa-docker",
    description:
      "Containerized Node.js application with Docker and automated GitHub Actions CI/CD.",
    tech: ["Docker", "GitHub Actions", "Node.js"],
  },
  {
    title: "REST API Platform",
    category: "backend",
    type: "Backend",
    icon: "fas fa-server",
    description:
      "Scalable REST API with authentication, CRUD operations and MongoDB integration.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Developer Portfolio",
    category: "web",
    type: "Frontend",
    icon: "fas fa-laptop-code",
    description:
      "Modern responsive portfolio with animated sections, parallax effects and interactive UI.",
    tech: ["React", "Vite", "CSS", "Three.js"],
  },
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "backend", label: "Backend & DevOps" },
];

function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section projects">
      <div className="container">

        {/* =========================
            HEADING
        ========================= */}

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>05</span>
          <h2>My Projects</h2>
          <p>Some things I've built</p>
        </motion.div>

        {/* =========================
            FILTERS
        ========================= */}

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filters.map((item) => (
            <button
              key={item.id}
              className={filter === item.id ? "active" : ""}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </motion.div>

        {/* =========================
            PROJECT GRID
        ========================= */}

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.article
                layout
                key={project.title}
                className="project-card"
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                  y: 20,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -10,
                }}
              >

                {/* =========================
                    PROJECT IMAGE
                ========================= */}

                <div className="project-image">

                  <div className="project-grid-pattern" />

                  <div className="project-glow" />

                  <span className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <motion.div
                    className="project-icon"
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                  >
                    <i className={project.icon} />
                  </motion.div>

                  <div className="project-type">
                    {project.type}
                  </div>

                  {/* Overlay */}

                  <div className="project-overlay">

                    <motion.a
                      href="#"
                      className="project-action"
                      aria-label={`View ${project.title}`}
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                      }}
                    >
                      <i className="fas fa-external-link-alt" />
                    </motion.a>

                    <motion.a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="project-action"
                      aria-label="GitHub"
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                      }}
                    >
                      <i className="fab fa-github" />
                    </motion.a>

                  </div>
                </div>

                {/* =========================
                    CONTENT
                ========================= */}

                <div className="project-content">

                  <div className="project-category">
                    <span />
                    {project.type}
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* =========================
            CTA
        ========================= */}

        <motion.div
          className="projects-cta"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="projects-cta-text">
            <span>MORE PROJECTS</span>

            <p>
              Want to explore more of my work?
            </p>
          </div>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            <i className="fab fa-github" />

            <span>View My GitHub</span>

            <i className="fas fa-arrow-right" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;