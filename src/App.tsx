import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import HomePage from "./pages/HomePage";
import CapabilitiesPage from "./pages/CapabilitiesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ClientsPage from "./pages/ClientsPage";
import DnaPage from "./pages/DnaPage";
import InsightsPage from "./pages/InsightsPage";

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
        </Routes>
      </main>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">Qualis Labs</p>
          <p className="footer-copy">
            Production-grade AI and systems infrastructure for complex operating
            environments.
          </p>
        </div>
        <div className="footer-links">
          <a
            className="button button-primary footer-consultation"
            href="mailto:hello@qualislabs.com?subject=Book%20a%20Consultation"
          >
            Book a Consultation
          </a>
          <NavLink to="/clients-partners">Clients & Partners</NavLink>
          <a href="mailto:hello@qualislabs.com">hello@qualislabs.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
