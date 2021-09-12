import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
import OurServices from "./components/pages/OurServices";
import ContactWithFormik from "./components/pages/ContactWithFormik";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={OurServices} />
          <Route path="/contact" component={ContactWithFormik} />
        </Switch>
      </PageWrapper>
    </Router>
  );
}

export default App;
