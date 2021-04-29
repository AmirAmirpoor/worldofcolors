// react-router-dom imports
import { Link, NavLink } from "react-router-dom";

// icons
import { HomeIcon } from "../../helpers/icons";
import { ContrastIcon } from "../../helpers/icons";
import { PaletteIcon } from "../../helpers/icons";
import { HeartIcon } from "../../helpers/icons";
import { ColorIcon } from "../../helpers/icons";
import { GradientIcon } from "../../helpers/icons";

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
  return (
    <div className={classes.layout}>
      <div className={classes.layout__navbar}>
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
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <p className={classes.navbar__footer}>MADE BY AMIR</p>
      </div>

      <div className={classes.layout__content}>{children}</div>
    </div>
  );
};

export default Layout;
