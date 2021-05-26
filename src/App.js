import { HashRouter, Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Wrapper from "./components/wrapper";
import NavBar from "./components/header";
import Footer from "./components/footer"
import "./stylesheets/style.css";


function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        
        
          
            <Route exact path={["/react-portfolio", "/", "/about"]} component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          
        
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
