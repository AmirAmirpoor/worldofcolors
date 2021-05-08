import { useState, useEffect, useRef } from "react";

// react-router-dom imports
import { Link, NavLink } from "react-router-dom";

// components
import RoundButton from "../RoundButton/RoundButton";

// icons
import { HomeIcon } from "../../helpers/icons";
import { ContrastIcon } from "../../helpers/icons";
import { PaletteIcon } from "../../helpers/icons";
import { HeartIcon } from "../../helpers/icons";
import { ColorIcon } from "../../helpers/icons";
import { GradientIcon } from "../../helpers/icons";
import { MenuIcon } from "../../helpers/icons";
import { CloseIcon } from "../../helpers/icons";

// react-router-dom
import { useLocation } from "react-router-dom";

// styles
import classes from "./Layout.module.css";

const NAVBAR_ITEMS = [
  { id: 0, title: "home", to: "/", icon: <HomeIcon /> },
  { id: 1, title: "generate", to: "/generate", icon: <PaletteIcon /> },
  { id: 2, title: "color", to: "/color", icon: <ColorIcon /> },
  { id: 3, title: "gradient", to: "/gradient", icon: <GradientIcon /> },
  { id: 4, title: "contrast", to: "/contrast", icon: <ContrastIcon /> },
  { id: 5, title: "favorites", to: "/favorites", icon: <HeartIcon /> },
];

const Layout = ({ children }) => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const headerRef = useRef();
  const closeNavbar = () => setNavbarVisible(false);
  const openNavbar = () => setNavbarVisible(true);

  const handleNavbarClick = (e) => {
    const name = e.target.getAttribute("name");
    if (name === "m_navbar") closeNavbar();
  };

  useEffect(() => {
    if (isNavbarVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isNavbarVisible]);

  const { pathname } = useLocation();
  useEffect(() => {
    const noMarginBottoms = ["/generate"];
    const applyMargin = !noMarginBottoms.includes(pathname);
    if (applyMargin) headerRef.current.style.marginBottom = "1.5em";
    else headerRef.current.style.marginBottom = 0;
  }, [pathname]);

  const navbarContent = () => {
    return (
      <>
        <Link to="/" className={classes.navbar__logo}>
          <h1>COLORS</h1>
        </Link>

        <ul className={classes.navbar__items}>
          {NAVBAR_ITEMS.map((item) => (
            <li key={item.id} className={classes.navbar__item}>
              <NavLink
                to={item.to}
                className={classes.navbar__link}
                activeClassName={classes.navbar__active}
                exact
                onClick={() => setNavbarVisible(false)}
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <p className={classes.navbar__footer}>MADE BY AMIR</p>
      </>
    );
  };

  return (
    <div className={classes.layout}>
      {/* NAVBAR ON DESKTOP */}
      <div className={classes.layout__navbar}>{navbarContent()}</div>

      {/* MOBILE HEADER and SIDEBAR */}
      <header className={classes.mobile__header} ref={headerRef}>
        <Link to="/" className={classes.navbar__logo}>
          <h1>COLORS</h1>
        </Link>

        <RoundButton icon={<MenuIcon />} onClick={openNavbar} />
        <div
          className={`${classes.mobile__navbar} ${
            isNavbarVisible && classes.visible
          }`}
          name="m_navbar"
          onClick={handleNavbarClick}
        >
          <nav className={classes.mobile__nav}>
            <div className={classes.mobile__nav__header}>
              <Link
                to="/"
                className={classes.mobile__nav__logo}
                onClick={() => setNavbarVisible(false)}
              >
                <h1>COLORS</h1>
              </Link>
              <RoundButton icon={<CloseIcon />} onClick={closeNavbar} />
            </div>
            {navbarContent()}
          </nav>
        </div>
      </header>

      <div className={classes.layout__content}>{children}</div>
    </div>
  );
};

export default Layout;
