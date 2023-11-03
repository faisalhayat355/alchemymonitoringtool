import React from "react";
import { Grid, Typography,Box,Divider } from "@mui/material";

const NetworkOutagesPages = () => {
  const time = new Date().toLocaleTimeString();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return (
    <div>
    <Box>
    <Grid container>
      <Grid item xs={12}>
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Network Outages</Typography>
          <Typography fontSize={"0.6rem"}>
            Last Updated: {currentDate} {time}
          </Typography>
          <Typography fontSize={"0.6rem"}> Updated every 90 seconds</Typography>
          <Typography fontSize={"0.6rem"}>Alchemy® Core™
            <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
          </Typography>
          <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>
      </Grid>
    </Grid>
      
    <Grid item xs={12}>
      <Typography textAlign={"center"} fontWeight={"bold"} fontSize={"1rem"}>Blocking Outages</Typography>
    </Grid>

    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Grid container>
          <Grid item xs={0.8}>
            <Typography fontSize={"0.8rem"} fontWeight={"bold"} style={{cursor:'pointer'}}>Severity</Typography>
            <Divider style={{width:'88%'}}/>
          </Grid>
          <Grid item xs={0.7}>
            <Typography fontSize={"0.8rem"} fontWeight={"bold"} style={{cursor:'pointer'}}>Host</Typography>
            <Divider style={{width:'88%'}}/>
          </Grid>
          <Grid item xs={0.7}>
          <Typography fontSize={"0.8rem"} fontWeight={"bold"} style={{cursor:'pointer'}}>State</Typography>
          <Divider style={{width:'88%'}}/>
          </Grid>
          <Grid item xs={0.7}>
          <Typography fontSize={"0.8rem"} fontWeight={"bold"} style={{cursor:'pointer'}}>Notes</Typography>
          <Divider style={{width:'88%'}}/>
          </Grid>
          <Grid item xs={1.5}>
          <Typography fontSize={"0.8rem"} fontWeight={"bold"} style={{cursor:'pointer'}}>State Duration</Typography>
          <Divider style={{width:'92%'}}/>
          </Grid>
          <Grid item xs={1.68}>
          <Typography fontSize={"0.8rem"} fontWeight={"bold"} style={{cursor:'pointer'}}>#Hosts Affected</Typography>
          <Divider style={{width:'88%'}}/>
          </Grid>
          <Grid item xs={1.8}>
          <Typography fontSize={"0.8rem"} fontWeight={"bold"} style={{cursor:'pointer'}}>#Hosts Affected</Typography>
          <Divider style={{width:'94%'}}/>
          </Grid>
          <Grid item xs={1}>
          <Typography fontSize={"0.8rem"} fontWeight={"bold"} style={{cursor:'pointer'}}>Actions</Typography>
          <Divider style={{width:'65%'}}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} mt={2}>
      <Typography textAlign={"center"} fontSize={"0.65rem"}>0 Blocking Outages Displayed</Typography>
    </Grid>



    </Box>
  </div>
  )
}

export default NetworkOutagesPages
