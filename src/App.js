import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './pages/Home';
import Produtos from './pages/Produtos';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/produtos" component={Produtos} />
          
        </Switch>
    </Router>
  );
}

export default App;
