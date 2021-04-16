import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">Ethan Smith</span>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active text-white" href="/about">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-white" href="/projects">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-white" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
