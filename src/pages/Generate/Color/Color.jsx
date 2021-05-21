import { useEffect } from "react";

// redux stuff
import { useSelector, useDispatch } from "react-redux";
import {
  delete_color,
  set_visible_shades,
  toggle_lock,
} from "../../../store/actions/newPaletteActions";
import { show_snackbar } from "../../../store/actions/snackbarActions";

// color functions
import { darkOrLight } from "../../../helpers/colorFunctions";

// react-smooth-dnd
import { Draggable } from "react-smooth-dnd";

// react-copy-to-clipboard
import CopyToClipboard from "react-copy-to-clipboard";

// icons
import { MoveIcon } from "../../../helpers/icons";
import { CopyIcon } from "../../../helpers/icons";
import { LockIcon } from "../../../helpers/icons";
import { UnlockIcon } from "../../../helpers/icons";
import { GridIcon } from "../../../helpers/icons";
import { CloseIcon } from "../../../helpers/icons";
import { LikeIcon } from "../../../helpers/icons";
import { OutlineLikeIcon } from "../../../helpers/icons";

// styles
import classes from "./Color.module.css";
import Shades from "../Shades/Shades";

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

  const alertCopied = () => dispatch(show_snackbar("success", "color copied"));

  const showShades = () => dispatch(set_visible_shades(color.value));

  const toggleLock = () => dispatch(toggle_lock(color.id));

  const showDeleteBtn = colors.length > 2;
  const shouldHideOptions = visibleShades && visibleShades !== color.value;
  const shouldShowShades = visibleShades === color.value;

  return (
    <Draggable style={style}>
      <div className={classes.color}>
        <div
          className={`${classes.color__info} ${
            shouldHideOptions && classes.hide
          }`}
        >
          <p className={classes.color__hex}>{color.value.slice(1)}</p>
          <p className={classes.color__secondary}>100, 58, 75</p>
        </div>

        <div
          className={`${classes.color__options} ${
            shouldHideOptions && classes.hide
          }`}
        >
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
