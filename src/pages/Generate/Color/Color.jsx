// react-smooth-dnd
import { Draggable } from "react-smooth-dnd";

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

const Color = ({ color }) => {
  const style = {
    background: color.value,
    flex: 1,
  };

  return (
    <Draggable style={style}>
      <div className={classes.color}>
        <div className={classes.color__info}>
          <p className={classes.color__hex}>{color.value.slice(1)}</p>
          <p className={classes.color__secondary}>100, 58, 75</p>
        </div>

        <div className={classes.color__options}>
          <button className={classes.color__like}>
            <OutlineLikeIcon />
          </button>
          <button className={classes.color__delete}>
            <CloseIcon />
          </button>
          <button className={`${classes.color__move} drag`}>
            <MoveIcon />
          </button>
          <button className={classes.color__copy}>
            <CopyIcon />
          </button>
          <button className={classes.color__lock}>
            <LockIcon />
          </button>
          <button className={classes.color__shades}>
            <GridIcon />
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default Color;
