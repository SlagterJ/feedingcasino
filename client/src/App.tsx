import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import pages here
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* Always put NotFound as the last route in the switch */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
