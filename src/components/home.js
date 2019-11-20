import React, {Component} from "react";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core"

/*resources*/
import Lampara from "../images/Lampara.jpg"
import LamparaLimpiesa from "../images/LamparaLimpiesa.jpg"
import Reparacion from "../images/Reparacion.jpg"
import Engranes from "../images/engranes.jpg"
import TarjetaLog from "../images/Tarjeta1.jpeg"
import TarjetaChec from "../images/tarjeta3.jpeg"
import lcd from "../images/lcdDisplay.jpeg"
import Autoclave from "../images/Autoclave1.jpeg"

class Home extends Component{
  render(){
      return(
          <div>
              <GridList cellHeight={420}>
              <GridListTile key="Subheader" cols={2} style={{ height: "auto" }} />
              <GridListTile className="cuadriculaImagen" key="Lampara limpiesa.jpg">
                <img
                  className="presentacionImagen"
                  src={LamparaLimpiesa}
                  alt="Lamparas"
                />
                <GridListTileBar
                  className="letrasHome"
                  title={<p className="title"> Lamparas de cirugía </p>}
                  subtitle={
                    <span className="description">Mantenimiento Preventlsivo</span>
                  }
            />
              </GridListTile>
              <GridListTile className="cuadriculaImagen" key="Lampara.jpg">
                <img src={Lampara} alt="Lamparas" />
                <GridListTileBar
                  className="letrasHome"
                  title={<p className="title"> Lamparas de cirugía </p>}
                  subtitle={<span className="description" >Refacciones</span>}
                />
              </GridListTile>
              <GridListTile className="cuadriculaImagen" key="Reparacion.jpg">
                <img src={Reparacion} alt="Mesas" />
                <GridListTileBar
                  className="letrasHome"
                  title={<p className="title"> Mesas quirúrgicas </p>}
                  subtitle={<span className="description">Mantenimiento preventivo</span>}
                />
              </GridListTile>
              <GridListTile className="cuadriculaImagen" key="Engranes.jpg">
                <img src={Engranes} alt="Mesas" />
                <GridListTileBar
                  className="letrasHome"
                  title={<p className="title">Mesas quirúrgicas</p>}
                  subtitle={<span className="description">Servicio correctivo</span>}
                />
              </GridListTile>
              <GridListTile className="cuadriculaImagen" key="TarjetaLog.jpg">
                <img src={TarjetaLog} alt="Tarjetas" />
                <GridListTileBar
                  className="letrasHome"
                  title={<p className="title">Tarjetas lógicas</p>}
                  subtitle={<span className="description">Limpieza y mantemiento</span>}
                />
              </GridListTile>
              <GridListTile className="cuadriculaImagen" key="TarjetaChec.jpg">
                <img src={TarjetaChec} alt="Tarjetas" />
                <GridListTileBar
                  className="letrasHome"
                  title={<p className="title">Tarjetas lógicas</p>}
                  subtitle={<span className="description">Correcto funcionamiento de equipos</span>}
                />
              </GridListTile>
              <GridListTile className="cuadriculaImagen" key="Autoclave.jpg">
                <img src={Autoclave} alt="Autoclaves" />
                <GridListTileBar
                  className="letrasHome"
                  title={<p className="title">Autoclaves</p>}
                  subtitle={<span className="description">Instalación y mantenimiento a equipos</span>}
                />
              </GridListTile>
              <GridListTile className="cuadriculaImagen" key="lcd.jpg">
                <img src={lcd} alt="Autoclaves" />
                <GridListTileBar
                  className="letrasHome"
                  title={<p className="title">Autoclaves</p>}
                  subtitle={<span className="description">Uso de microcontroladores y sensores programables</span>}
                />
              </GridListTile>


              </GridList>
              <div>.</div>
            </div>
        )
    }
}
export default Home