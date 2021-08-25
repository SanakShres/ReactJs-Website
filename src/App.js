import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </PageWrapper>
    </Router>
  );
}

export default App;
