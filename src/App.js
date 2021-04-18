import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Wrapper from "./components/wrapper";
import NavBar from "./components/header";
import "./stylesheets/style.css";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Wrapper>
          <Switch>
            <Route exact path={["/react-portfolio", "/", "/about"]} component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
