// redux stuff
import { useSelector, useDispatch } from "react-redux";
import { hide_snackbar } from "../../store/actions/snackbarActions";

// icons
import { CloseIcon } from "../../helpers/icons";

// styles
import classes from "./Snackbar.module.css";

const Snackbar = () => {
  const { isVisible, text, type } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  const hideSnackbar = () => dispatch(hide_snackbar());

  const typeClass = type === "error" ? classes.error : classes.success;
  const visibleClass = isVisible ? classes.visible : null;
  return (
    <div className={`${classes.snackbar} ${visibleClass} ${typeClass}`}>
      <p className={classes.text}>{text}</p>

      <button className={classes.hideSnackbarBtn} onClick={hideSnackbar}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default Snackbar;
