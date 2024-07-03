import React, { useRef, useEffect } from "react";
import "./Header.css";

const navLinks = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#Expertise",
    display: "Expertise",
  },
  {
    path: "#affiliations",
    display: "Affiliations",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#skills",
    display: "Skills",
  },
];

const Header = (props) => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header-shrink");
    } else {
      headerRef.current.classList.remove("header-shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefaut();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle('menu-active');

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <h2>Personal Portfolio</h2>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {navLinks.map((item, index) => (
                <li className="menu-item" key={index}>
                  <a
                    href={item.path}
                    onClick={handleClick}
                    className="menu-link"
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="light-mode">
            <span onClick={props.toggleTheme}>
              {props.theme === "light-theme" ? (
                <span>
                  <i class="ri-moon-line"></i> Dark
                </span>
              ) : (
                <span>
                  <i className="ri-sun-line"></i> Light
                </span>
              )}
            </span>
          </div>

          <span className="mobile-menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
