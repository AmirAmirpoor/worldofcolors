// redux stuff
import { useSelector, useDispatch } from "react-redux";
import { set_colors } from "../../store/actions/newPaletteActions";

// components
import Colors from "./Colors/Colors.jsx";

// chroma
import chroma from "chroma-js";

// styles
import classes from "./Generate.module.css";

const Generate = () => {
  const { colors } = useSelector((state) => state.newPalette);
  const dispatch = useDispatch();

  const genRandomColors = () => {
    const randomColors = colors.map((color) =>
      color.isLocked ? color : { ...color, value: chroma.random().hex() }
    );

    dispatch(set_colors(randomColors));
  };

  return (
    <div className="container">
      <div className="main">
        <Colors />
      </div>
      <div className="aside">
        {/* FOR TEST RANDOM COLORS FUNCTION */}
        <button className="btn" onClick={genRandomColors}>
          random
        </button>
      </div>
    </div>
  );
};

export default Generate;
