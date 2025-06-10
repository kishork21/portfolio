import { useEffect, useState } from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaChartLine,
  FaPlug,
  FaTools,
  FaVideo,
  FaWpforms,
  FaEnvelope,
} from "react-icons/fa";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on mount and set darkMode state
  function changeTheme() {
    const isDark = darkMode;
    const bgColor = isDark ? "#222222" : "#f9f9f9";
    const fontColor = isDark ? "#e0e0e0" : "#333";
    const headerBg = isDark
      ? "linear-gradient(135deg, #1f1f1f, #333)"
      : "linear-gradient(135deg, #4b6cb7, #182848)";
    const toggleBg = isDark ? "#444" : "#ddd";
    const toggleColor = isDark ? "#fff" : "#000";

    const body = document.body;
    const container = document.getElementsByClassName("container")[0];
    const header = document.getElementsByClassName("header")[0];
    const toggleBtn = document.getElementsByClassName("theme-toggle")[0];

    body.style.backgroundColor = bgColor;
    body.style.color = fontColor;
    body.style.transition = "background-color 0.3s ease, color 0.3s ease";

    if (container) {
      container.style.backgroundColor = bgColor;
      container.style.color = fontColor;
      container.style.transition = "background-color 0.3s ease, color 0.3s ease";
    }

    if (header) {
      header.style.background = headerBg;
      header.style.transition = "background 0.3s ease";
    }

    if (toggleBtn) {
      toggleBtn.style.backgroundColor = toggleBg;
      toggleBtn.style.color = toggleColor;
      toggleBtn.style.transition = "background-color 0.3s ease, color 0.3s ease";
    }
  }

  // Apply theme styles when darkMode changes
  useEffect(() => {
    changeTheme();
  }, [darkMode]);

  // Toggle theme handler
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="container">
      <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <header className="header">
        <h1>Turn Your Vision into Reality</h1>
        <p>We build powerful websites and apps — from idea to hosting.</p>
        <button className="cta-button" onClick={() => { }}>
          Let’s Build Together
        </button>
      </header>

      <section className="section services">
        <h2>Our Services</h2>
        <p>High-performance web solutions tailored to your business needs.</p>
        <ul>
          <li>
            <FaLaptopCode /> Complete App Development (Design to Deployment)
          </li>
          <li>
            <FaPaintBrush /> UI/UX Design for Web & Mobile
          </li>
          <li>
            <FaChartLine /> Google Analytics & Conversion Tracking
          </li>
          <li>
            <FaPlug /> API Integration (Payment, Maps, Chat, etc.)
          </li>
          <li>
            <FaTools /> Website Maintenance & Upgrades
          </li>
          <li>
            <FaVideo /> Custom Landing Pages with Video Sections
          </li>
          <li>
            <FaWpforms /> High-Converting Forms (Lead & Feedback)
          </li>
        </ul>
      </section>

      <section className="section projects">
        <h2>Our Projects</h2>
        <p>We craft sleek, functional, and user-focused websites.</p>
        <div className="project-gallery">
          <img src="https://source.unsplash.com/300x200/?startup" alt="Startup Site" />
          <img src="https://source.unsplash.com/300x200/?ecommerce" alt="Ecommerce" />
          <img src="https://source.unsplash.com/300x200/?webapp" alt="Web App" />
        </div>
      </section>

      <section className="section testimonials">
        <h2>Client Success Stories</h2>
        <div className="testimonial">
          <p>
            “We went from zero to a full web app with CodeWebber in 4 weeks.
            Fast, clean, scalable.”
          </p>
          <span>- Aditi, SaaS Founder</span>
        </div>
        <div className="testimonial">
          <p>“Their landing pages helped us triple our leads in just one month.”</p>
          <span>- Raj, Marketing Head</span>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Start Your Project</h2>
        <p>Let’s discuss your idea and bring it to life. We reply within 24 hours.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Describe your project..." required></textarea>
          <button type="submit">Send Inquiry</button>
        </form>

        <div className="contact-info" aria-label="Contact information">
          <span>
            <FaEnvelope />
            <a href="mailto:contact@codewebber.com" style={{ color: "inherit", textDecoration: "none" }}>
              contact@codewebber.com
            </a>
          </span>
          <span>
            <FaLaptopCode />
            <a href="tel:+919876543210" style={{ color: "inherit", textDecoration: "none" }}>
              +91 98765 43210
            </a>
          </span>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 CodeWebber. Building web solutions that deliver results.</p>
      </footer>
    </div>
  );
}

export default App;
