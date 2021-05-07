import { useEffect } from "react";

// redux stuff
import { useSelector, useDispatch } from "react-redux";
import { hide_confirm } from "../../store/actions/confirmActions";

// styles
import classes from "./Confirm.module.css";

const TYPE_CONFIG = {
  delete: classes.delete,
  create: classes.create,
  default: null,
};

const Confirm = () => {
  const confirm = useSelector((state) => state.confirm);
  const dispatch = useDispatch();

  const { isVisible, type, question, onConfirm } = confirm;

  useEffect(() => {
    if (isVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isVisible]);

  const hideConfirm = () => dispatch(hide_confirm());

  const handleConfirm = () => {
    onConfirm();
    hideConfirm();
  };

  const classNames = [classes.confirm, TYPE_CONFIG[type]];
  if (isVisible) classNames.push(classes.visible);

  return (
    <div className={classNames.join(" ")}>
      <div className={classes.confirm__content}>
        <p className={classes.confirm__question}>{question}</p>
        <div className={classes.confirm__actions}>
          <button
            className={`btn ${classes.cancel__btn}`}
            onClick={hideConfirm}
          >
            cancel
          </button>
          <button
            className={`btn ${classes.confirm__btn}`}
            onClick={handleConfirm}
          >
            yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
