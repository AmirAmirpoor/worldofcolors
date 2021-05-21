// redux stuff
import { useSelector, useDispatch } from "react-redux";
import { update_color } from "../../../store/actions/newPaletteActions";

// color functions
import { darkOrLight, generateShades } from "../../../helpers/colorFunctions";

// styles
import classes from "./Shades.module.css";

const Shades = ({ color }) => {
  const { colors } = useSelector((state) => state.newPalette);
  const dispatch = useDispatch();

  const shades = generateShades(color);
  const colorIndex = colors.findIndex((c) => c.id === color.id);
  const textColor = darkOrLight(color);

  return (
    <div className={classes.shades__container}>
      {shades.map((shade, idx) => {
        return (
          <div
            key={idx}
            className={classes.shade}
            style={{ background: shade }}
            onClick={() => dispatch(update_color(shade, colorIndex))}
          >
            {color.value === shade && (
              <div
                className={classes.current__shade}
                style={{ background: textColor }}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Shades;
