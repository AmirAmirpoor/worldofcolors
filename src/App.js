// react router dom imports
import { Switch, Route, Link } from "react-router-dom";

// components
import Snackbar from "./components/Snackbar/Snackbar.jsx";
import FullScreen from "./components/FullScreen/FullScreen.jsx";

// style
import "./styles/global.css";

function App() {
  return (
    <div>
      {/* test */}
      <nav>
        <Link to="/">home</Link>
        <Link to="/generate">generate palette</Link>
      </nav>

      <Snackbar />
      <FullScreen />

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
