import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: green,
  },
});

export const sxStyle ={
    backgroundColor:'#019267'
}
const sxStyleB ={
    backgroundColor:'#FFD365',
    color:'black'
}
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={sxStyle} position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bikent
          </Typography>
          <Button sx={sxStyleB} onClick={Teste} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
function Teste(){
    alert("a")
}
