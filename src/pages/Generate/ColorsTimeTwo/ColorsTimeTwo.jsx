// styles
import classes from "./ColorsTimeTwo.module.css";

const ColorsTimeTwo = ({ originalColors, changedColors }) => {
  const len = originalColors.length;

  return Array.from({ length: len }).map((_, idx) => {
    return (
      <div key={idx} className={classes.row}>
        <div style={{ background: originalColors[idx].value }}>
          {originalColors[idx].value}
        </div>
        <div style={{ background: changedColors[idx].value }}>
          {changedColors[idx].value}
        </div>
      </div>
    );
  });
};

export default ColorsTimeTwo;
