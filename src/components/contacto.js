import React, {Component} from "react";
import {Card, CardContent,ListItem,Avatar,ListItemAvatar,ListItemText} from "@material-ui/core"
import {Call,Mail} from "@material-ui/icons"

class Contacto extends Component{
    render(){
        return(
            <div>
                <Card
          style={{ margin: "20px", marginLeft: "500px", marginRight: "500px" }}
        >
          <div class="row center-xs">
            <CardContent>
              <div>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>
                      <Call />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Teléfono oficina"
                    secondary="(55) 55-83-91-82"
                  />
                </ListItem>
              </div>

              <div>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>
                      <Mail />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Correo electrónico"
                    secondary="instrumentacion_@hotmail.com"
                  />
                </ListItem>
              </div>
            </CardContent>
          </div>
        </Card>
        
        <div stye={{ margin: " 100px 0px 100px 0px" }}>.</div>
            </div>
        )
    }
}
export default Contacto