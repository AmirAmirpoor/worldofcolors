import { useEffect } from "react";

// components
import Color from "../Color/Color.jsx";

// react-sortable-hoc
import { SortableContainer } from "react-sortable-hoc";

// redux stuff
import { useSelector, useDispatch } from "react-redux";
import { set_colors } from "../../../store/actions/newPaletteActions";

// react-router-dom
import { useLocation } from "react-router-dom";

// color functions
import { initialColors } from "../../../helpers/colorFunctions.js";

// styles
import classes from "./Colors.module.css";

const Colors = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const colors = initialColors(location);
    dispatch(set_colors(colors));
  }, []);

  const { colors } = useSelector((state) => state.newPalette);

  return (
    <div className={classes.colors}>
      {colors.map((color, index) => (
        <Color key={color.id} index={index} color={color} />
      ))}
    </div>
  );
};

export default SortableContainer(Colors);
