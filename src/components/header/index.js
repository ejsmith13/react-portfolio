import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Ethan Smith</span>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active text-white" href="#about">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white" href="#projects">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
