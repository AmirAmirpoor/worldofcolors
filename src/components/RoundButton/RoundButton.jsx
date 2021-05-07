import { useState } from "react";

// styles
import classes from "./RoundButton.module.css";

const RoundButton = ({ icon, onClick = () => {}, title = "" }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick();
    setClicked(true);
  };

  const handleMouseEnter = () => setClicked(false);

  return (
    <button
      className={`${classes.btn} ${clicked && classes.hide__tooltip}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      {icon}

      {title && <span className={classes.btn__tooltip}>{title}</span>}
    </button>
  );
};

export default RoundButton;
