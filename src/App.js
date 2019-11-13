import React, { Component } from 'react';
import {BrowserRouter as Router,
Switch,
Route} from "react-router-dom";

import './App.css';
import MainBar from "./components/mainBar.js"
import Home from "./components/home.js"
import Empresa from "./components/empresa"
import Contacto from "./components/contacto"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div >
          <div >.</div>
          <div>
            <MainBar className="MainBar" />
          </div>
          <Switch>
          
          <Route exact path="/" component={Home} />
          <Route path="/empresa" component={Empresa} />
          <Route path="/contacto" component={Contacto} />
                    
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
