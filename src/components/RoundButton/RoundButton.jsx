import classes from "./RoundButton.module.css";

const RoundButton = ({ icon, onClick = () => {}, title = "" }) => {
  return (
    <button className={classes.btn} onClick={onClick}>
      {icon}

      {title && <span className={classes.btn__tooltip}>{title}</span>}
    </button>
  );
};

export default RoundButton;
