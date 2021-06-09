// redux stuff
import { useSelector, useDispatch } from "react-redux";
import { set_colors } from "../../store/actions/newPaletteActions";
import { close_panel } from "../../store/actions/mobilePanelActions.js";

// components
import Colors from "./Colors/Colors.jsx";
import ChangeColor from "./ChangeColor/ChangeColor";
import MobilePanel from "../../components/MobilePanel/MobilePanel";

// chroma
import chroma from "chroma-js";

// styles
import classes from "./Generate.module.css";

const Generate = () => {
  const { colors } = useSelector((state) => state.newPalette);
  const { colorInColorpicker } = useSelector((state) => state.newPalette);

  const visible = useSelector((state) => state.mobilePanel);

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
        {/* <button className="btn" onClick={genRandomColors}>
          random
        </button> */}

        {colorInColorpicker && <ChangeColor />}
      </div>

      <MobilePanel
        title="Change color"
        visible={visible}
        onClose={() => dispatch(close_panel())}
      >
        {colorInColorpicker && <ChangeColor />}
      </MobilePanel>
    </div>
  );
};

export default Generate;
