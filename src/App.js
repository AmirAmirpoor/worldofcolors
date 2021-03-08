// react router dom imports
import { Switch, Route, Link } from "react-router-dom";

// react redux imports
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { show_snackbar } from "./store/actions/snackbarActions";

// components
import Snackbar from "./components/Snackbar/Snackbar";

// style
import "./styles/global.css";

function App() {
  const { isVisible, text } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  return (
    <div>
      {/* test */}
      <h3>{JSON.stringify(isVisible)}</h3>
      <h3>{JSON.stringify(text)}</h3>
      <nav>
        <Link to="/">home</Link>
        <Link to="/generate">generate palette</Link>
      </nav>

      <button onClick={() => dispatch(show_snackbar("error", "Error occured"))}>
        show snackbar
      </button>

      <Snackbar />

      <Switch>
        <Route exact path="/" render={() => <h1>Home page</h1>} />
        <Route
          exact
          path="/generate"
          render={() => <p>generate new palette page</p>}
        />
      </Switch>
    </div>
  );
}

export default App;
