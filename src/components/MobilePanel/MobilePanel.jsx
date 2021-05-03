// icons
import { CloseIcon } from "../../helpers/icons";

// styles
import classes from "./MobilePanel.module.css";

const MobilePanel = ({ title, visible, onClose, children }) => {
  const handleClick = (evt) => {
    const name = evt.target.getAttribute("name");
    if (name === "mpanel") onClose();
  };

  return (
    <div
      name="mpanel"
      className={`${classes.panel} ${visible && classes.visible}`}
      onClick={handleClick}
    >
      <div className={classes.panel__content}>
        <div className={classes.panel__topbar}>
          <span>{title}</span>
          <button className={classes.panel__close} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <div className={classes.panel__children}>{children}</div>
      </div>
    </div>
  );
};

export default MobilePanel;
