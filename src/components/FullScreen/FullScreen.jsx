// redux stuff
import { useSelector, useDispatch } from "react-redux";
import { hide_fullscreen } from "../../store/actions/fullScreenActions";

// react icons
import { CgClose as CloseIcon } from "react-icons/cg";

// styles
import classes from "./FullScreen.module.css";

const FullScreen = () => {
  const { isVisible, color } = useSelector((state) => state.fullScreen);
  const dispatch = useDispatch();

  if (!isVisible) return null;

  return (
    <div className={classes.fullScreen} style={{ background: color }}>
      <button
        className={classes.fullScreen__close}
        style={{ color }}
        onClick={() => dispatch(hide_fullscreen())}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default FullScreen;
