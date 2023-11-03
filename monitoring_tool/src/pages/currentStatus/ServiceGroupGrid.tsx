import React from "react";
import { Grid, Typography,Box } from "@mui/material";



const ServiceGroupGrid = () => {
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
      <Grid item xs={3}>
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Current Network Status</Typography>
          <Typography fontSize={"0.6rem"}>
            Last Updated: {currentDate} {time}
          </Typography>
          <Typography fontSize={"0.6rem"}> Updated every 90 seconds</Typography>
          <Typography fontSize={"0.6rem"}>Alchemy® Core™
            <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
          </Typography>
          <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>

         <Grid mt={2}>
         <Typography fontSize={"0.6rem"} style={{cursor:'pointer',textDecoration:'underline',color:'#0284c7'}}>View Service Status Detail For All Service Groups</Typography>
          <Typography fontSize={"0.6rem"} style={{cursor:'pointer',textDecoration:'underline'}}>View Status Summary For All Service Groups</Typography>
          <Typography fontSize={"0.6rem"} style={{cursor:'pointer',textDecoration:'underline'}}>View Service Status Grid For All Service Groups</Typography>
         </Grid> 
      </Grid>
      <Grid item xs={3}>
      <Typography fontSize={"0.9rem"} fontWeight={"bold"} textAlign={"center"}>Current Network Status</Typography>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Up
          </Typography>
          <div style={{background:'#22c55e',width:'88%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>256</Typography>
          </div>
        </Grid>
        <Grid item xs={2}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Down
          </Typography>
          <div style={{background:'#f87171',width:'88%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>87</Typography>
          </div>
        </Grid>
        <Grid item xs={4.8}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Unreachable
          </Typography>
          <div style={{background:'#d1d5db',width:'95%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>7</Typography>
          </div>
        </Grid>
        <Grid item xs={2}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Pending
          </Typography>
          <div style={{background:'#d1d5db',width:'105%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>5</Typography>
          </div>
        </Grid>
      </Grid>
      <Grid mt={1}>
      <Grid container>
        <Grid item xs={4.8}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            <i>All Problems</i>
          </Typography>
          <div style={{background:'#0ea5e9',width:'95%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>42</Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            <i>All Types</i>
          </Typography>
          <div style={{background:'#d1d5db',width:'105%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>124</Typography>
          </div>
        </Grid>
      </Grid>
      </Grid>
      </Grid>
      <Grid item xs={3}>
      <Typography fontSize={"0.9rem"} fontWeight={"bold"} textAlign={"center"}>Service Status Totals</Typography>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Ok
          </Typography>
          <div style={{background:'#22c55e',width:'88%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>87</Typography>
          </div>
        </Grid>
        <Grid item xs={2.25}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Warning
          </Typography>
          <div style={{background:'#eab308',width:'88%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>75</Typography>
          </div>
        </Grid>
        <Grid item xs={3.1}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Unknown
          </Typography>
          <div style={{background:'#d1d5db',width:'91%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>4</Typography>
          </div>
        </Grid>
        <Grid item xs={2.5}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Critical
          </Typography>
          <div style={{background:'#f87171',width:'89%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>5</Typography>
          </div>
        </Grid>
        <Grid item xs={2}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Pending
          </Typography>
          <div style={{background:'#d1d5db',width:'105%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>10</Typography>
          </div>
        </Grid>
      </Grid>

      <Grid mt={1}>
      <Grid container>
        <Grid item xs={4.8}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            <i>All Problems</i>
          </Typography>
          <div style={{background:'#0ea5e9',width:'95%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>90</Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            <i>All Types</i>
          </Typography>
          <div style={{background:'#d1d5db',width:'105%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>124</Typography>
          </div>
        </Grid>
      </Grid>
      </Grid>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12} mt={2}>
        <Typography textAlign={"center"} fontWeight={"bold"} fontSize={"1.1rem"}>Status Grid For All Service Groups</Typography>
      </Grid>
      <Grid item xs={12} mt={3}>
        <Typography textAlign={"center"} fontWeight={"550"} color={'red'} fontSize={"0.85rem"}>There are no service groups defined.</Typography>
      </Grid>
    </Grid>
    </Box>
  </div>
  )
}

export default ServiceGroupGrid
