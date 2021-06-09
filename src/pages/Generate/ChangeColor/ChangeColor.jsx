import { useState, useEffect } from "react";

// redux stuff
import { useSelector, useDispatch } from "react-redux";
import { set_colors } from "../../../store/actions/newPaletteActions";
import { change_color_in_colorpicker } from "../../../store/actions/newPaletteActions";
import { close_panel } from "../../../store/actions/mobilePanelActions";

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
    dispatch(close_panel());
  };

  const cancel = () => {
    dispatch(change_color_in_colorpicker(null));
    dispatch(close_panel());
  };

  return (
    <div className={classes.changeColor}>
      <div className={classes.fromTo}>
        <div style={fromStyles}>
          <span>FROM</span>
        </div>

        <ArrowRight className={classes.fromTo__arrow} />
        <div style={toStyles}>
          <span>TO</span>
        </div>
      </div>

      <div className={classes.colorpickerContainer}>
        <HexColorPicker className="colorpicker" color={to} onChange={setTo} />
      </div>

      <div className={classes.changeColor__actions}>
        <button className="btn" onClick={changeColor}>
          Change color
        </button>
        <button className="btn" onClick={cancel}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default ChangeColor;
