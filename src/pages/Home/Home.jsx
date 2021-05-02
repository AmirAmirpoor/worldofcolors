import { useState } from "react";

// redux stuff
import { useSelector } from "react-redux";

// icons
import { HeartIcon } from "../../helpers/icons";

// chroma-js
import chroma from "chroma-js";

// colorFormats from helper.js
import { colorFormats } from "../../helpers/colorFunctions";

// styles
import classes from "./Home.module.css";

const Home = ({ history }) => {
  const palettes = useSelector((state) => state.palettes);
  const [selected, setSelected] = useState(false);
  const [colorId, setColorId] = useState(0);

  const renderPalette = (palette) => {
    const { id, name, colors, isFavorite } = palette;
    return (
      <div key={id} className={classes.palette}>
        <div className={classes.palette__header}>
          <span
            className={classes.palette__name}
            onClick={() => {
              setColorId(0);
              setSelected(id);
            }}
          >
            {name}
          </span>

          {isFavorite && (
            <HeartIcon style={{ color: "crimson", fontSize: "1.25rem" }} />
          )}
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

  const redirectToGenerator = (colors) => {
    const concatHexValues = colors.map(({ value }) => value.slice(1)).join("-");
    const link = `/generate?colors=${concatHexValues}`;

    history.push(link);
  };

  const renderSelectedPalette = () => {
    if (!selected) return null;
    const { colors, isFavorite } = palettes.find(({ id }) => id === selected);

    const label = isFavorite ? "remove from favorites" : "add to favorites";
    const color = colors[colorId];
    const formats = colorFormats(color);

    return (
      <div className={classes.selected}>
        <div className={classes.selected__header}>
          <button className="btn btn-red">{label}</button>
          <button
            className="btn btn-white"
            onClick={() => redirectToGenerator(colors)}
          >
            open in generator
          </button>
        </div>

        <div className={`${classes.selected__main} no-scrollbar`}>
          {formats.map(({ label, value }, idx) => (
            <div
              key={idx}
              className={classes.format}
              style={{ background: color.value }}
            >
              <div className={classes.format__info}>
                <span>{label}</span>
                <span>{value}</span>
              </div>

              <button className="btn">click to copy</button>
            </div>
          ))}
        </div>
        <div className={classes.selected__footer}>
          {colors.map((color, idx) => (
            <div
              style={{ background: color.value }}
              className={[
                classes.selected__colorbox,
                idx === colorId && classes.active,
              ].join(" ")}
              onClick={() => setColorId(idx)}
            ></div>
          ))}
        </div>
      </div>
    );
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
