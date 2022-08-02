import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Questions/Question1";
import Question2 from './Pages/Questions/Question2';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/person/:id" component={Question2} />
      </Switch>
    </Router>
  );
}

export default App;
