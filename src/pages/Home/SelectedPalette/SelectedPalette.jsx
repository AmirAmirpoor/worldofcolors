import { useState } from "react";

// redux stuff
import { useSelector, useDispatch } from "react-redux";
import { select_color } from "../../../store/actions/selectedPaletteActions";

// components
import CopyToClipboard from "react-copy-to-clipboard";
import RoundButton from "../../../components/RoundButton/RoundButton.jsx";

// chroma
import chroma from "chroma-js";

// icons
import { LikeIcon, DeleteIcon, CopyIcon } from "../../../helpers/icons";

// color functions
import { colorFormats } from "../../../helpers/colorFunctions";

// react router dom
import { useHistory } from "react-router-dom";

// styles
import classes from "./SelectedPalette.module.css";

// FORMAT COMPONENT
const Format = ({ value, label, color, background }) => {
  const [copied, setCopied] = useState(false);

  const handleCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className={classes.format} style={{ background, color }}>
      <div className={classes.format__info}>
        <span>{label}</span>
        <span>{value}</span>
      </div>

      {copied ? (
        <span>COPIED</span>
      ) : (
        <CopyToClipboard text={value} onCopy={handleCopied}>
          <RoundButton icon={<CopyIcon style={{ color }} />} />
        </CopyToClipboard>
      )}
    </div>
  );
};

const SelectedPalette = () => {
  const { palette, colorIndex } = useSelector((state) => state.selectedPalette);
  const dispatch = useDispatch();

  const history = useHistory();

  const redirectToGenerator = () => {
    const { colors } = palette;
    const concatHexValues = colors.map(({ value }) => value.slice(1)).join("-");
    const link = `/generate?colors=${concatHexValues}`;

    history.push(link);
  };

  if (!palette) return null;
  const { colors, isFavorite } = palette;

  const color = colors[colorIndex];
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
          onClick={redirectToGenerator}
        >
          open in generator
        </button>
      </div>

      <div className={`${classes.selected__main} no-scrollbar`}>
        {formats.map((format, idx) => {
          return (
            <Format
              key={idx}
              label={format.label}
              value={format.value}
              background={color.value}
              color={textColor}
            />
          );
        })}
      </div>
      <div className={classes.selected__footer}>
        {colors.map((color, idx) => (
          <div
            key={idx}
            style={{ background: color.value }}
            className={classes.selected__colorbox}
            onClick={() => dispatch(select_color(idx))}
          >
            <div
              className={[
                classes.selected__circle,
                idx === colorIndex && classes.active,
              ].join(" ")}
              style={{ background: textColor }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedPalette;
