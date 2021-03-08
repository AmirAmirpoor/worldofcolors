import { Switch, Route, Link } from "react-router-dom";

import "./styles/global.css";

function App() {
  return (
    <div>
      {/* test */}
      <nav>
        <Link to="/">home</Link>
        <Link to="/generate">generate palette</Link>
      </nav>

      <Switch>
        <Route exact path="/" render={() => <h1>Home page</h1>} />
        <Route
          exact
          path="/generate"
          render={() => <h1>generate new palette page</h1>}
        />
      </Switch>
    </div>
  );
}

export default App;
