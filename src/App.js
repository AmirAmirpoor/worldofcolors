import { Switch, Route, Link } from "react-router-dom";

import "./styles/global.css";

import { useSelector } from "react-redux";

function App() {
  const { isVisible, text } = useSelector((state) => state.snackbar);

  return (
    <div>
      {/* test */}
      <h3>{JSON.stringify(isVisible)}</h3>
      <h3>{JSON.stringify(text)}</h3>
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
