import { useState, useEffect } from "react";

// redux stuff
import { useSelector, useDispatch } from "react-redux";
import { set_colors } from "../../../store/actions/newPaletteActions";
import { change_color_in_colorpicker } from "../../../store/actions/newPaletteActions";

// components
import { HexColorPicker } from "react-colorful";

// icons
import { ArrowRight } from "../../../helpers/icons";

// color functions
import { darkOrLight } from "../../../helpers/colorFunctions";

// styles
import classes from "./ChangeColor.module.css";

const ChangeColor = () => {
  const { colors } = useSelector((state) => state.newPalette);
  const { colorInColorpicker } = useSelector((state) => state.newPalette);
  const dispatch = useDispatch();

  const from = colorInColorpicker.value;

  const [to, setTo] = useState(from);

  useEffect(() => {
    setTo(colorInColorpicker.value);
  }, [colorInColorpicker]);

  const fromStyles = {
    background: from,
    color: darkOrLight({ value: from }),
  };

  const toStyles = {
    background: to,
    color: darkOrLight({ value: to }),
  };

  const changeColor = () => {
    if (to === from) return;

    const { id } = colorInColorpicker;
    const updatedColors = colors.map((c) =>
      c.id === id ? { ...colorInColorpicker, value: to } : c
    );

    dispatch(set_colors(updatedColors));
    dispatch(change_color_in_colorpicker(null));
  };

  return (
    <div className={classes.changeColor}>
      <div className={classes.fromTo}>
        <div>
          <div style={fromStyles}>
            <span>FROM</span>
          </div>
        </div>

        <ArrowRight className={classes.fromTo__arrow} />
        <div>
          <div style={toStyles}>
            <span>TO</span>
          </div>
        </div>
      </div>

      <div className={classes.colorpickerContainer}>
        <HexColorPicker className="colorpicker" color={to} onChange={setTo} />
      </div>

      <button className="btn" onClick={changeColor}>
        Change color
      </button>
    </div>
  );
};

export default ChangeColor;
