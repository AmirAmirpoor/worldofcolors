import { useEffect } from "react";

// components
import Color from "../Color/Color.jsx";

// redux stuff
import { useSelector, useDispatch } from "react-redux";
import {
  set_colors,
  reorder_colors,
} from "../../../store/actions/newPaletteActions";

// react-router-dom
import { useLocation } from "react-router-dom";

// react-smooth-dnd
import { Container } from "react-smooth-dnd";

// color functions
import { initialColors } from "../../../helpers/colorFunctions.js";

// styles
import classes from "./Colors.module.css";

const Colors = () => {
  const { colors } = useSelector((state) => state.newPalette);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const colors = initialColors(location);
    dispatch(set_colors(colors));
  }, []);

  const reorder = ({ removedIndex, addedIndex }) => {
    dispatch(reorder_colors(removedIndex, addedIndex));
  };

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  return (
    <Container
      style={containerStyles}
      dragHandleSelector=".drag"
      onDrop={reorder}
    >
      {colors.map((color, index) => (
        <Color key={color.id} index={index} color={color} />
      ))}
    </Container>
  );
};

export default Colors;
