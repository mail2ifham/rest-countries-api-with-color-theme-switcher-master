import React, { useState } from "react";
import "./navBar.css";
import { Link } from "react-router";
import { useThemeStore } from "../../store/themeStore";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <nav>
      <Link to={"/"}>
        <h1>Where in the world?</h1>
      </Link>
      <button className="dark-mode-button" onClick={toggleTheme}>
        {isDarkMode ? (
          <span>
            <MdDarkMode className="dark-mode-icon" /> <span>Dark Mode</span>
          </span>
        ) : (
          <span>
            <MdOutlineDarkMode className="dark-mode-icon" />
            <span>Dark Mode</span>
          </span>
        )}
      </button>
    </nav>
  );
};

export default NavBar;
