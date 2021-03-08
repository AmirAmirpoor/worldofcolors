import { useSelector, useDispatch } from "react-redux";
import { hide_snackbar } from "../../store/actions/snackbarActions";

// react icons
import { CgClose as CloseIcon } from "react-icons/cg";
import { FiCheckCircle as SuccessIcon } from "react-icons/fi";
import { BiErrorAlt as ErrorIcon } from "react-icons/bi";

import classes from "./Snackbar.module.css";

const Snackbar = () => {
  const { isVisible, text, type } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  const hideSnackbar = () => dispatch(hide_snackbar());

  return (
    <div
      className={[
        classes.snackbar,
        isVisible && classes.visible,
        type === "success" ? classes.success : classes.error,
      ].join(" ")}
    >
      <span className={classes.icon}>
        {type === "success" ? (
          <SuccessIcon />
        ) : (
          <ErrorIcon style={{ fontSize: "1.35rem" }} />
        )}
      </span>
      <p className={classes.text}>{text}</p>

      <button className={classes.hideSnackbarBtn} onClick={hideSnackbar}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default Snackbar;
