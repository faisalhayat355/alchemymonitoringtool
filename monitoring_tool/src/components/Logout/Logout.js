import React from "react";
import { Button, Grid, Box,Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';


const Logout = ({ setToken }) => {
  const handleLogout = () => {
    setToken("");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Box style={{background:'transparent'}} >
      <Divider style={{width:'100%'}}/>
      <Grid item xs={1} textAlign="right" style={{display:'flex',marginLeft:'0.3rem',marginTop:'0.3rem'}}>
      <LogoutIcon/>
     <Typography ml={3} onClick={handleLogout} style={{cursor:'pointer'}}>
     Logout
     </Typography>
    </Grid>
      </Box>
    </div>
  );
};

export default Logout;
