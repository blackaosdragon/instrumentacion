import React, { Component } from 'react';
import {BrowserRouter as Router,
Switch,
Route} from "react-router-dom";

import './App.css';
import MainBar from "./components/mainBar.js"
import Home from "./components/home.js"
import Empresa from "./components/empresa"
import Contacto from "./components/contacto"
import Footer from "./components/footer.js"
import Lamparas from "./components/lamparas.js";
import Mesas from "./components/mesas.js";
import Aires from "./components/aires.js";

import Sensor from './components/sensor.js';



class App extends Component {
  constructor(){
    super();
    this.state = {
      width: window.innerWidth
    }
    this.handleListener = this.handleListener.bind(this);
  }
  
  handleListener(){
    this.setState({width: window.innerWidth})
  }
  componentDidMount(){
    window.addEventListener("resize", this.handleListener)
  }
  render() {
    
    return (
      <div className="App">
        <Router>
        <div >
          <div >.</div>
          <div>
            <MainBar className="MainBar" anchura={this.state.width}/>
          </div>
          <Switch>
          
          <Route exact path="/" component={()=> <Home anchura={this.state.width} />} />
          <Route path="/empresa" component={() => <Empresa anchura={this.state.width} />} />
          <Route path="/contacto" component={() => <Contacto anchura={this.state.width} />} />
          <Route path="/lamparas" component={()=> <Lamparas anchura={this.state.width} />} />
          <Route path="/mesas" component={()=> <Mesas anchura={this.state.width} />} />
          <Route path="/aires" component={() => <Aires anchura={this.state.width} />} />
          <Route path="/sensor" component={() => <Sensor anchura={this.state.width} />} />

                    
          </Switch>
          <Footer anchura={this.state.width} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
