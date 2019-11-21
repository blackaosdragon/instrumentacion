import React, { Component } from "react";
import "flexboxgrid";
import AppBar from "@material-ui/core/AppBar";

import { Link } from "react-router-dom";
import Logo from "../images/Logo.jpg";
import "../App.css";


class MainBar extends Component {
  render() {
    return (
      <AppBar className="BarraPrincipal" position="static" color="#f2f2f2">
        <div class="row betwen-xs middle-xs">
          <div class="col-xs-6">
            {" "}
            <div class="box">
              <Link to="/">
                <img
                  className="logo"
                  src={Logo}
                  alt="instrumentacion"
                />
              </Link>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="row center-xs">
              <div class="col-xs-2" className="boton-link">
                <Link className="enlace" to="/empresa">
                    <p className="principalButton">Empresa</p>                  
                </Link>
              </div>
              <div class="col-xs-2" className="boton-link">
                <Link className="enlace" to="/contacto">          
                  <p className="principalButton">Contacto</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AppBar>
    );
  }
}
export default MainBar;