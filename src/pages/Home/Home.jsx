import { useState } from "react";

// redux stuff
import { useSelector } from "react-redux";

// icons
import { RightIcon } from "../../helpers/icons";

// styles
import classes from "./Home.module.css";

const Home = () => {
  const palettes = useSelector((state) => state.palettes);
  const [selected, setSelected] = useState(false);

  const renderPalette = (palette) => {
    const { id, name, colors, isFavorite } = palette;
    const notSelected = selected && selected !== id;
    const className = `${classes.palette} ${
      notSelected && classes.notSelected
    }`;
    return (
      <div key={id} className={className}>
        <div className={classes.palette__header}>
          <span
            className={classes.palette__name}
            onClick={() => setSelected(id)}
          >
            {name}
          </span>
        </div>
        <div className={classes.palette__colors}>
          {colors.map(({ id, value }) => {
            const style = { background: value };
            return <div key={id} style={style}></div>;
          })}
        </div>
      </div>
    );
  };

  const renderSelectedPalette = () => {
    if (!selected) return null;
    const palette = palettes.find(({ id }) => id === selected);

    return JSON.stringify(palette);
  };

  return (
    <div className="container">
      <div className="main">
        <div className={classes.palettes}>
          {palettes.map((palette) => renderPalette(palette))}
        </div>
      </div>
      <div className="aside">{renderSelectedPalette()}</div>
    </div>
  );
};

export default Home;
