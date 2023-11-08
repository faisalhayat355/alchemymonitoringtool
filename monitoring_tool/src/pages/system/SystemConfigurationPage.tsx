import React, {useState} from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, Grid, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import ConfigurationPopup from "./configuration-popup";


const SystemConfigurationPage = () => {
  const time = new Date().toLocaleTimeString();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box>
       <Grid container>
        <Grid item xs={3.5}>
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Configuration</Typography>
          <Typography fontSize={"0.6rem"}>
            Last Updated: {currentDate} {time}
          </Typography>
          <Typography fontSize={"0.6rem"}>Alchemy® Core™
            <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
          </Typography>
          <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>
        </Grid>
      </Grid>
    </Box>

<Box>
  <Grid container>
    <Grid item xs={11.2} mt={2.5}>
      <Typography textAlign={"center"} fontWeight={"bold"}>Select Type of Config Data You Wish To View</Typography>
    </Grid>
    <Grid item xs={10.1} mt={2}>
      <Typography textAlign={"center"} fontSize={"0.8rem"}>Object Type :</Typography>
    </Grid>
    <Grid item xs={11} mt={0.2} style={{display:'flex',justifyContent:'center'}}>
    <select>
      <option>Hosts</option>
      <option>Host Dependencies</option>
      <option>Host Escalations</option>
      <option>Host Groups</option>
      <option>Services</option>
      <option>Service Group</option>
      <option>Service Dependencies</option>
      <option>Service Escalations</option>
      <option>Contacts</option>
      <option>Contact Groups</option>
      <option>Time Periods</option>
      <option>Commands</option>
      <option>Command Expansion</option>
     </select>
     
    </Grid>
    <Grid item xs={10} style={{display:'flex',justifyContent:'center'}} mt={0.5}>
    <button onClick={handleOpen}>Continue</button>
    </Grid>
  </Grid>
</Box>

<ConfigurationPopup open={open} handleClose={handleClose}/>
      

    </>
  )
}

export default SystemConfigurationPage
