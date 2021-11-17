import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ToastsHandler from "./components/toasts/ToastsHandler";

import Box from "./components/Box";

// Import pages here
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <ToastsHandler />
      <Box component="main">
        <Switch>
          <Route path="/" component={Home} exact />
          {/* Always put NotFound as the last route in the switch */}
          <Route path="*" component={NotFound} />
        </Switch>
      </Box>
    </Router>
  );
};

export default App;
