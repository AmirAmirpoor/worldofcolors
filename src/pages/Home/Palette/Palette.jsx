// redux stuff
import { useDispatch } from "react-redux";
import { select_palette } from "../../../store/actions/selectedPaletteActions";

// styles
import classes from "./Palette.module.css";

const Palette = ({ palette }) => {
  const { id, name, colors, isFavorite } = palette;
  const dispatch = useDispatch();

  return (
    <div key={id} className={classes.palette}>
      <div className={classes.palette__header}>
        <span
          className={classes.palette__name}
          onClick={() => dispatch(select_palette(palette))}
        >
          {name}
        </span>

        {isFavorite && (
          <small className={classes.palette__liked}>
            you liked this palette
          </small>
        )}
      </div>
      <div className={classes.palette__colors}>
        {colors.map(({ id, value }) => {
          const style = { background: value };
          return <div key={id} style={style}></div>;
        })}
      </div>
    </div>
  );
};

export default Palette;
