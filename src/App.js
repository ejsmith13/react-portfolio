import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/about'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Wrapper from './components/wrapper'
import NavBar from './components/header'
import './stylesheets/style.css';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
     <Wrapper>
       <Route exact path="/" component={About} />
       <Route exact path="/about" component={About} />
       <Route exact path="/projects" component={Projects} />
       <Route exact path="/contact" component={Contact} />
       
       </Wrapper>
    </div>
    </Router>
  );
}

export default App;
