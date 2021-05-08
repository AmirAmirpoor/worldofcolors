// components
import Colors from "./Colors/Colors.jsx";

// redux stuff
import { useDispatch } from "react-redux";
import { reorder_colors } from "../../store/actions/newPaletteActions";

// styles
import classes from "./Generate.module.css";

const Generate = () => {
  const dispatch = useDispatch();

  const reorderColors = ({ oldIndex, newIndex }) => {
    dispatch(reorder_colors(oldIndex, newIndex));
  };

  return (
    <div className="container">
      <div className="main">
        <Colors onSortEnd={reorderColors} />
      </div>
      <div className="aside">ASIDE</div>
    </div>
  );
};

export default Generate;
