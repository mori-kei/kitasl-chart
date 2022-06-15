import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const Header = () => {
  return(
    <>
    <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            
          </IconButton>
          <Typography variant="h6" >
            組織文化診断
          </Typography>
          
        </Toolbar>
      </AppBar>
  </>
  )
  
}

export default Header;