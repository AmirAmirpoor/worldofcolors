import { useEffect } from "react";

// redux stuff
import { useSelector, useDispatch } from "react-redux";
import { close_panel } from "../../store/actions/mobilePanelActions.js";

// components
import Palette from "./Palette/Palette.jsx";
import SelectedPalette from "./SelectedPalette/SelectedPalette";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import MobilePanel from "../../components/MobilePanel/MobilePanel";

// styles
import classes from "./Home.module.css";

const Home = () => {
  const palettes = useSelector((state) => state.palettes);

  // palette here means selected palette
  const { palette } = useSelector((state) => state.selectedPalette);
  const visible = useSelector((state) => state.mobilePanel);

  const dispatch = useDispatch();

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [visible]);

  return (
    <div className="container">
      <div className="main">
        <div className={[classes.content, "no-scrollbar"].join(" ")}>
          <div className={classes.searchBox}>
            <SearchBox />
          </div>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <Palette key={palette.id} palette={palette} />
            ))}
          </div>
        </div>
      </div>

      <div className="aside">
        <SelectedPalette />
      </div>

      <MobilePanel
        title={palette && palette.name}
        visible={visible}
        onClose={() => dispatch(close_panel())}
      >
        <SelectedPalette />
      </MobilePanel>
    </div>
  );
};

export default Home;
