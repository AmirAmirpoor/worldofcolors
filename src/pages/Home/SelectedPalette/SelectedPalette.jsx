import { useState } from "react";

// redux stuff
import { useSelector, useDispatch } from "react-redux";
import {
  remove_from_palettes,
  like_palette,
  remove_from_liked_palettes,
} from "../../../store/actions/palettesActions";
import { select_color } from "../../../store/actions/selectedPaletteActions";
import { show_snackbar } from "../../../store/actions/snackbarActions";
import { show_confirm } from "../../../store/actions/confirmActions";

// components
import CopyToClipboard from "react-copy-to-clipboard";
import RoundButton from "../../../components/RoundButton/RoundButton.jsx";

// chroma
import chroma from "chroma-js";

// icons
import { LikeIcon } from "../../../helpers/icons";
import { OutlineLikeIcon } from "../../../helpers/icons";
import { DeleteIcon } from "../../../helpers/icons";
import { CopyIcon } from "../../../helpers/icons";

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

  const alertURLCopied = () => {
    dispatch(show_snackbar("success", "url copied"));
  };

  const likePalette = () => {
    dispatch(like_palette(palette.id));
    dispatch(show_snackbar("success", "added to liked palettes"));
  };

  const removeFromLikedPalettes = () => {
    dispatch(remove_from_liked_palettes(palette.id));
    dispatch(show_snackbar("success", "removed from liked palettes"));
  };

  const openDeletePaletteConfirm = () => {
    dispatch(show_confirm("delete", "Delete palette ?", deletePalette));
  };

  const deletePalette = () => {
    dispatch(remove_from_palettes(palette.id));
    dispatch(show_snackbar("success", "palette deleted"));
  };

  if (!palette) return null;
  const { colors, isFavorite } = palette;

  const color = colors[colorIndex];
  const formats = colorFormats(color);

  const textColor = chroma(color.value).luminance() < 0.3 ? "#eee" : "#333";

  // GENERATE_URL TO COPY
  const concatColors = colors.map((color) => color.value.slice(1)).join("-");
  const generateLink = `${window.location.host}/generate?colors=${concatColors}`;
  return (
    <div className={classes.selected}>
      <div className={classes.selected__header}>
        {isFavorite ? (
          <RoundButton
            icon={<LikeIcon style={{ transform: "translate(1px, -1px)" }} />}
            title="remove from liked palettes"
            onClick={removeFromLikedPalettes}
          />
        ) : (
          <RoundButton
            icon={
              <OutlineLikeIcon style={{ transform: "translate(1px, -1px)" }} />
            }
            title="like palette"
            onClick={likePalette}
          />
        )}

        <RoundButton
          icon={<DeleteIcon />}
          title="delete palette"
          onClick={openDeletePaletteConfirm}
        />

        <CopyToClipboard text={generateLink} onCopy={alertURLCopied}>
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
