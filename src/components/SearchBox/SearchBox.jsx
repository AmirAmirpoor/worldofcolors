import { useState } from "react";

// icons
import { SearchIcon } from "../../helpers/icons";

// components
import RoundButton from "../RoundButton/RoundButton";

// styles
import classes from "./SearchBox.module.css";

const SearchBox = () => {
  const [term, setTerm] = useState("");

  const inputChanged = (e) => setTerm(e.target.value);

  return (
    <div className={classes.searchbox}>
      <input
        type="text"
        className={classes.searchbox__input}
        placeholder="Search..."
        value={term}
        onChange={inputChanged}
      />
      <RoundButton icon={<SearchIcon style={{ fontSize: "1rem" }} />} />

      {term.trim() && (
        <div className={[classes.searchbox__result, "no-scrollbar"].join(" ")}>
          RESULTS GO HERE
        </div>
      )}
    </div>
  );
};

export default SearchBox;
