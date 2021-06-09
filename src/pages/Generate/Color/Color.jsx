import { useEffect } from "react";

// redux stuff
import { useSelector, useDispatch } from "react-redux";
import { delete_color } from "../../../store/actions/newPaletteActions";
import { change_color_in_colorpicker } from "../../../store/actions/newPaletteActions";
import { set_colors } from "../../../store/actions/newPaletteActions";
import { toggle_lock } from "../../../store/actions/newPaletteActions";
import { set_visible_shades } from "../../../store/actions/newPaletteActions";
import { show_snackbar } from "../../../store/actions/snackbarActions";
import { open_panel } from "../../../store/actions/mobilePanelActions";

// chroma-js
import chroma from "chroma-js";

// color functions
import { darkOrLight } from "../../../helpers/colorFunctions";

// react-smooth-dnd
import { Draggable } from "react-smooth-dnd";

// react-copy-to-clipboard
import CopyToClipboard from "react-copy-to-clipboard";

// components
import Shades from "../Shades/Shades";

// icons
import { MoveIcon } from "../../../helpers/icons";
import { CopyIcon } from "../../../helpers/icons";
import { LockIcon } from "../../../helpers/icons";
import { UnlockIcon } from "../../../helpers/icons";
import { GridIcon } from "../../../helpers/icons";
import { CloseIcon } from "../../../helpers/icons";
import { LikeIcon } from "../../../helpers/icons";
import { OutlineLikeIcon } from "../../../helpers/icons";
import { PlusIcon } from "../../../helpers/icons";

// styles
import classes from "./Color.module.css";

const Color = ({ color }) => {
  const { colors, visibleShades } = useSelector((state) => state.newPalette);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(set_visible_shades(null));
    };
  }, []);

  const textColor = darkOrLight(color);

  const style = {
    background: color.value,
    flex: 1,
    color: textColor,
  };

  const deleteColor = () => {
    dispatch(delete_color(color.id));
    dispatch(show_snackbar("success", "color deleted"));
  };

  const addColor = () => {
    const index = colors.findIndex((c) => c.id === color.id);
    const firstColor = colors[index].value;
    const secondColor = colors[index + 1].value;

    const averageColor = chroma.average([firstColor, secondColor]).hex();

    const addedColor = {
      value: averageColor,
      id: Math.floor(Math.random() * 10000),
    };

    const first = colors.slice(0, index + 1);
    const last = colors.slice(index + 1);

    const updatedColors = [...first, addedColor, ...last];
    dispatch(set_colors(updatedColors));
  };

  const alertCopied = () => dispatch(show_snackbar("success", "color copied"));

  const showShades = () => dispatch(set_visible_shades(color.value));

  const toggleLock = () => dispatch(toggle_lock(color.id));

  const hexClicked = () => {
    dispatch(change_color_in_colorpicker(color));
    dispatch(open_panel());
  };

  const showDeleteBtn = colors.length > 2;
  const showAddBtn = colors.length < 10;
  const shouldHideOptions = visibleShades && visibleShades !== color.value;
  const shouldShowShades = visibleShades === color.value;
  const isLastColor = color.id === colors[colors.length - 1].id;

  const rgb = chroma(color.value).rgb().join(", ");

  return (
    <Draggable style={style}>
      <div className={classes.color}>
        <div
          className={`${classes.color__info} ${
            shouldHideOptions && classes.hide
          }`}
        >
          <p className={classes.color__hex} onClick={hexClicked}>
            {color.value.slice(1)}
          </p>
          <p className={classes.color__secondary}>{rgb}</p>
        </div>

        <div
          className={`${classes.color__options} ${
            shouldHideOptions && classes.hide
          }`}
        >
          {showAddBtn && !isLastColor && (
            <button className={classes.color__add} onClick={addColor}>
              <PlusIcon />
            </button>
          )}

          <button className={classes.color__like}>
            <OutlineLikeIcon />
          </button>

          {showDeleteBtn && (
            <button className={classes.color__delete} onClick={deleteColor}>
              <CloseIcon />
            </button>
          )}

          <button className={`${classes.color__move} drag`}>
            <MoveIcon />
          </button>

          <CopyToClipboard text={color.value} onCopy={alertCopied}>
            <button className={classes.color__copy}>
              <CopyIcon />
            </button>
          </CopyToClipboard>

          <button className={classes.color__lock} onClick={toggleLock}>
            {color.isLocked ? <LockIcon /> : <UnlockIcon />}
          </button>

          <button className={classes.color__shades} onClick={showShades}>
            <GridIcon />
          </button>
        </div>

        {shouldShowShades && <Shades color={color} />}
      </div>
    </Draggable>
  );
};

export default Color;
