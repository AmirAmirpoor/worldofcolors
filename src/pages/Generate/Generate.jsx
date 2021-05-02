// react imports
import { useState } from "react";

// initialColors from helper.js
import { initialColors } from "../../helpers/colorFunctions";

const Generate = ({ location }) => {
  const [colors, setColors] = useState(initialColors(location));

  return (
    <div className="container">
      <div className="main">
        {colors.map((color, idx) => (
          <div
            key={idx}
            style={{
              width: 100,
              height: 100,
              background: color,
              display: "inline-block",
            }}
          ></div>
        ))}
      </div>
      <div className="aside">ASIDE</div>
    </div>
  );
};

export default Generate;
