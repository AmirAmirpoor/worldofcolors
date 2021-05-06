// react imports
import { useState } from "react";

// redux stuff
import { useSelector, useDispatch } from "react-redux";
import {
  add_to_favorites,
  remove_from_favorites,
} from "../../store/actions/palettesActions";
import { show_snackbar } from "../../store/actions/snackbarActions";

// icons
import { LikeIcon, DeleteIcon, CopyIcon } from "../../helpers/icons";

// chroma-js
import chroma from "chroma-js";

// colorFormats from helper.js
import { colorFormats } from "../../helpers/colorFunctions";

// components
import RoundButton from "../../components/RoundButton/RoundButton.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import CopyToClipboard from "react-copy-to-clipboard";

// styles
import classes from "./Home.module.css";
import MobilePanel from "../../components/MobilePanel/MobilePanel";

const Home = ({ history }) => {
  const palettes = useSelector((state) => state.palettes);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);
  const [colorId, setColorId] = useState(0);
  const [showMpanel, setShowMpanel] = useState(false);

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
              setShowMpanel(true);
            }}
          >
            {name}
          </span>

          {isFavorite && (
            // <HeartIcon style={{ color: "crimson", fontSize: "1.25rem" }} />
            <small className={classes.favorite}>you liked this palette</small>
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

  const toggleFavorite = (paletteId, isFavorite) => {
    if (isFavorite) {
      dispatch(remove_from_favorites(paletteId));
      dispatch(show_snackbar("success", "REMOVED FROM FAVORITES"));
    } else {
      dispatch(add_to_favorites(paletteId));
      dispatch(show_snackbar("success", "ADDED TO FAVORITES"));
    }
  };

  const renderSelectedPalette = (palette) => {
    if (!palette) return null;
    const { id, colors, isFavorite } = palette;

    const label = isFavorite ? "remove from favorites" : "add to favorites";
    const color = colors[colorId];
    const formats = colorFormats(color);

    const textColor = chroma(color.value).luminance() < 0.3 ? "#eee" : "#333";

    const concatColors = palette.colors
      .map((color) => color.value.slice(1))
      .join("-");
    const generateLink = `/generate?colors=${concatColors}`;
    return (
      <div className={classes.selected}>
        <div className={classes.selected__header}>
          <RoundButton
            icon={<LikeIcon style={{ transform: "translate(1px, -1px)" }} />}
            title="like palette"
          />

          <RoundButton icon={<DeleteIcon />} title="delete palette" />

          <CopyToClipboard text={generateLink}>
            <RoundButton icon={<CopyIcon />} title="copy url" />
          </CopyToClipboard>

          <button
            className="btn btn-white"
            style={{ marginLeft: "auto" }}
            onClick={() => redirectToGenerator(colors)}
          >
            open in generator
          </button>
        </div>

        <div className={`${classes.selected__main} no-scrollbar`}>
          {formats.map(({ label, value }, idx) => {
            return (
              <div
                key={idx}
                className={classes.format}
                style={{ background: color.value, color: textColor }}
              >
                <div className={classes.format__info}>
                  <span>{label}</span>
                  <span>{value}</span>
                </div>

                <CopyToClipboard text={value}>
                  <RoundButton
                    icon={<CopyIcon style={{ color: textColor }} />}
                  />
                </CopyToClipboard>
              </div>
            );
          })}
        </div>
        <div className={classes.selected__footer}>
          {colors.map((color, idx) => (
            <div
              key={idx}
              style={{ background: color.value }}
              className={classes.selected__colorbox}
              onClick={() => setColorId(idx)}
            >
              <div
                className={[
                  classes.selected__circle,
                  idx === colorId && classes.active,
                ].join(" ")}
                style={{ background: textColor }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const selectedPalette = palettes.find((p) => p.id === selected);

  return (
    <div className="container">
      <div className="main">
        <div className={[classes.content, "no-scrollbar"].join(" ")}>
          <div className={classes.searchBox}>
            <SearchBox />
          </div>
          <div className={classes.palettes}>
            {palettes.map((palette) => renderPalette(palette))}
          </div>
        </div>
      </div>
      <div className="aside">{renderSelectedPalette(selectedPalette)}</div>

      <MobilePanel
        title={selectedPalette ? selectedPalette.name : ""}
        visible={showMpanel}
        onClose={() => setShowMpanel(false)}
      >
        PANEL CONTENT GOES HERE
      </MobilePanel>
    </div>
  );
};

export default Home;
