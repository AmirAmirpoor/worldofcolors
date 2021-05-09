// react-smooth-dnd
import { Draggable } from "react-smooth-dnd";

// icons
import { MoveIcon } from "../../../helpers/icons";

// styles
import classes from "./Color.module.css";

const Color = ({ color }) => {
  const style = {
    background: color.value,
    flex: 1,
  };

  return (
    <Draggable style={style}>
      <button className={`${classes.drag__handle} drag`}>
        <MoveIcon />
      </button>
    </Draggable>
  );
};

export default Color;
