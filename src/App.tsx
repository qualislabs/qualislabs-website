import { NavLink, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import HomePage from "./pages/HomePage";
import CapabilitiesPage from "./pages/CapabilitiesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ClientsPage from "./pages/ClientsPage";
import DnaPage from "./pages/DnaPage";
import InsightsPage from "./pages/InsightsPage";
import Logo from "./components/Logo";

const navigation = [
  { label: "Home", path: "/" },
  { label: "Capabilities", path: "/capabilities" },
  { label: "Projects", path: "/projects" },
  { label: "Our DNA", path: "/our-dna" },
  { label: "Insights", path: "/insights" },
];

function App() {
  const location = useLocation();
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink className="brand" to="/">
          <Logo size={28} />
          <span>Qualis Labs</span>
        </NavLink>

        <nav className="site-nav" aria-label="Primary">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "is-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="button button-primary"
            href="mailto:hello@qualislabs.com?subject=Technical%20Discovery%20Session"
          >
            Book a Consultation
          </a>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="theme-toggle-icon" aria-hidden>
              {theme === "dark" ? "☀" : "☾"}
            </span>
          </button>
        </nav>
      </header>

      <main key={location.pathname} className="page-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/clients-partners" element={<ClientsPage />} />
          <Route path="/our-dna" element={<DnaPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          {/* Handle legacy index.html links from search engines */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          {/* Catch-all: Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-col footer-col-brand">
            <NavLink className="brand brand-footer" to="/">
              <Logo size={28} />
              <span>Qualis Labs</span>
            </NavLink>
            <p className="footer-copy">
              Engineering intelligent products, software platforms, and hardware-enabled
              systems — from strategy to production.
            </p>
            <div className="footer-social-row">
              <a 
                href="https://www.linkedin.com/company/qualislabs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="footer-social-icon"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <a
              className="button button-primary"
              href="mailto:hello@qualislabs.com?subject=Book%20a%20Consultation"
            >
              Book a Consultation
              <span className="button-icon" aria-hidden>→</span>
            </a>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Explore</p>
            <ul>
              <li><NavLink to="/capabilities">Capabilities</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/our-dna">Our DNA</NavLink></li>
              <li><NavLink to="/insights">Insights</NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Information</p>
            <ul>
              <li><NavLink to="/clients-partners">Clients & Partners</NavLink></li>
              <li><a href="mailto:hello@qualislabs.com">hello@qualislabs.com</a></li>
              <li>
                <a href="https://www.linkedin.com/company/qualislabs/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li><span className="footer-muted">Engineering Consultancy</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Consultation</p>
            <p className="footer-copy">
              Schedule a 30-minute discovery call to discuss your project scope, architecture, or technical challenge.
            </p>
            <a className="footer-link-strong" href="mailto:hello@qualislabs.com">
              hello@qualislabs.com →
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Qualis Labs. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
