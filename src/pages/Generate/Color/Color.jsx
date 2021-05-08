// react-sortable-hoc
import { SortableElement } from "react-sortable-hoc";

// styles
import classes from "./Color.module.css";

const Color = ({ color }) => {
  return (
    <div className={classes.color} style={{ background: color.value }}></div>
  );
};

export default SortableElement(Color);