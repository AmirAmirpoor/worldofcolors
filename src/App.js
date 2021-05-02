// react router dom imports
import { Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home.jsx";
import Generate from "./pages/Generate/Generate.jsx";

// components
import Layout from "./components/Layout/Layout.jsx";
import Snackbar from "./components/Snackbar/Snackbar.jsx";
import FullScreen from "./components/FullScreen/FullScreen.jsx";

// styles
import "./styles/global.css";
import "./styles/utils.css";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/generate" component={Generate} />
        </Switch>
      </Layout>

      <Snackbar />
      <FullScreen />
    </div>
  );
}

export default App;
