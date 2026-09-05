import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link
        to="/"
        className="logo-btn"
        style={{ textDecoration: "none" }}
        onClick={() => setMenuOpen(false)}
      >
        GIL
      </Link>

      <div className="header-actions">
        <nav className={`nav ${menuOpen ? "active" : ""}`} id="nav-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>

        <button
          id="theme-switch"
          className="theme-switch"
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label="Toggle theme"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#EA33F7"
          >
            <path d="M344-344q-56-56-56-136t56-136q56-56 136-56t136 56q56 56 56 136t-56 136q-56 56-136 56t-136-56ZM216-444H48v-72h168v72Zm696 0H744v-72h168v72ZM444-744v-168h72v168h-72Zm0 696v-168h72v168h-72ZM269-642 166-742l51-55 102 104-50 51Zm474 475L642-268l49-51 103 101-51 51ZM640-691l102-101 51 49-100 103-53-51ZM163-217l105-99 49 47-98 104-56-52Z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M600-640 480-760l120-120 120 120-120 120Zm200 120-80-80 80-80 80 80-80 80ZM483-80q-84 0-157.5-32t-128-86.5Q143-253 111-326.5T79-484q0-146 93-257.5T409-880q-18 99 11 193.5T520-521q71 71 165.5 100T879-410q-26 144-138 237T483-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T463-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T159-484q0 135 94.5 229.5T483-160Zm-20-305Z" />
          </svg>
        </button>

        <div
          className="hamburger"
          id="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}