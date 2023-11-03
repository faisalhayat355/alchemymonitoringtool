import React from "react";
import { Grid, Typography,Box,Divider } from "@mui/material";


const HostGroupSummary = () => {
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
         <Typography fontSize={"0.6rem"} style={{cursor:'pointer',textDecoration:'underline',color:'#0284c7'}}>View Service Status Detail For All Host Groups</Typography>
          <Typography fontSize={"0.6rem"} style={{cursor:'pointer',textDecoration:'underline'}}>View Host Status Detail For All Host Groups</Typography>
          <Typography fontSize={"0.6rem"} style={{cursor:'pointer',textDecoration:'underline'}}>View Status Overview For All Host Groups</Typography>
          <Typography fontSize={"0.6rem"} style={{cursor:'pointer',textDecoration:'underline'}}>View Status Grid For All Host Groups</Typography>
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
        <Typography textAlign={"center"} fontWeight={"bold"} fontSize={"1.1rem"}>Status Summary For All Host Groups</Typography>
      </Grid>
     <Grid container>
     <Grid xs={2.5}></Grid>
     <Grid xs={9.5} mt={2}>
      <Grid container>
      <Grid item xs={2.5}>
      <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Host Group</Typography>
      <Divider style={{width:'95%'}}/>
      <div style={{background:'#f4f4f5',height:'9.7vh',width:'95%',marginTop:'0.2rem'}}>
        <Typography fontSize={"0.8rem"} style={{padding:'1rem'}}>Network (Broadband)</Typography>
      </div>
     </Grid>
     <Grid item xs={2.8}>
     <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Host Status Summary</Typography>
     <Divider style={{width:'95%'}}/>
     <div style={{background:'#f4f4f5',height:'9.7vh',width:'95%',marginTop:'0.2rem',padding:'0.2rem'}}>
        <div style={{background:'#22c55e',height:'3.7vh',width:'93%',marginLeft:'0.4rem',padding:'0.2rem',border:'1px solid black'}}>
        <Typography fontSize={"0.7rem"} sx={{width:'100%',height:'16px',paddingLeft:'0.1rem',color:'black',textAlign:'center'}}>38 UP</Typography>
        </div>
        <div style={{display:'flex',background:'#f87171',height:'3.7vh',width:'93%',marginLeft:'0.4rem',marginTop:'0.1rem',padding:'0.23rem'}}>
          <Typography fontSize={"0.7rem"} sx={{border:'1px solid black',width:'60px',height:'16px',paddingLeft:'0.1rem',color:'black'}}>37 DOWN:</Typography>
          <Typography fontSize={"0.7rem"} sx={{background:'#93c5fd',width:'75px',height:'16px',paddingLeft:'0.1rem',color:'black',marginLeft:'1rem'}}>37 Unhandled</Typography>
        </div>
      </div>
     </Grid>

     <Grid item xs={4}>
     <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Service Status Summary</Typography>
     <Divider style={{width:'95%'}}/>

     <div style={{background:'#f4f4f5',height:'9.7vh',width:'95%',marginTop:'0.2rem',padding:'0.2rem'}}>
        <div style={{background:'#22c55e',height:'3.7vh',width:'93%',marginLeft:'0.4rem',padding:'0.2rem',border:'1px solid black'}}>
        <Typography fontSize={"0.7rem"} sx={{width:'100%',height:'16px',paddingLeft:'0.1rem',color:'black',textAlign:'center'}}>39 OK</Typography>
        </div>
        <div style={{display:'flex',background:'#f87171',height:'3.7vh',width:'93%',marginLeft:'0.4rem',marginTop:'0.1rem',padding:'0.23rem'}}>
          <Typography fontSize={"0.7rem"} sx={{border:'1px solid black',width:'90%',height:'16px',paddingLeft:'0.1rem',color:'black'}}>37 CRITICAL</Typography>
          <Typography fontSize={"0.7rem"} sx={{background:'#93c5fd',width:'100%',height:'16px',paddingLeft:'0.1rem',color:'black',marginLeft:'0.2rem'}}>37 on Problem Hosts</Typography>
        </div>
      </div>
     </Grid>
      </Grid>
     </Grid>
     </Grid>
     
     <Grid container>
     <Grid xs={2.5}></Grid>
     <Grid xs={9.5}>
      <Grid container>
      <Grid item xs={2.5}>
      <div style={{background:'#f4f4f5',height:'15vh',width:'95%',marginTop:'0.2rem'}}>
        <Typography fontSize={"0.8rem"} style={{paddingTop:'1.7rem',paddingLeft:'1rem'}}>Network (Fortigate))</Typography>
      </div>
     </Grid>
     <Grid item xs={2.8}>
     <div style={{background:'#f4f4f5',height:'15vh',width:'95%',marginTop:'0.2rem',paddingTop:'1.1rem',paddingLeft:'0.2rem',paddingRight:'0.2rem'}}>
        <div style={{background:'#22c55e',height:'3.7vh',width:'93%',marginLeft:'0.4rem',padding:'0.2rem',border:'1px solid black'}}>
        <Typography fontSize={"0.7rem"} sx={{width:'100%',height:'16px',paddingLeft:'0.1rem',color:'black',textAlign:'center'}}>122 UP</Typography>
        </div>
        <div style={{display:'flex',background:'#f87171',height:'4.2vh',width:'93%',marginLeft:'0.4rem',marginTop:'0.1rem',padding:'0.23rem',border:'1px solid black'}}>
          <Typography fontSize={"0.7rem"} sx={{border:'1px solid black',width:'60px',height:'16px',paddingLeft:'0.1rem',color:'black'}}>19 DOWN:</Typography>
          <Typography fontSize={"0.7rem"} sx={{background:'#93c5fd',width:'75px',height:'16px',paddingLeft:'0.1rem',color:'black',marginLeft:'1rem'}}>19 Unhandled</Typography>
        </div>
      </div>
     </Grid>

     <Grid item xs={4}>
     <div style={{background:'#f4f4f5',height:'15vh',width:'95%',marginTop:'0.2rem',padding:'0.2rem'}}>
        <div style={{background:'#22c55e',height:'3vh',width:'93%',marginLeft:'0.4rem',padding:'0.1rem',border:'1px solid black'}}>
        <Typography fontSize={"0.7rem"} sx={{width:'100%',height:'16px',paddingLeft:'0.1rem',color:'black',textAlign:'center'}}>69 OK</Typography>
        </div>

        <div style={{display:'flex',background:'#FFFF00',height:'3.7vh',width:'93%',marginLeft:'0.4rem',marginTop:'0.1rem',padding:'0.23rem'}}>
          <Typography fontSize={"0.7rem"} sx={{border:'1px solid black',width:'102px',height:'16px',paddingLeft:'0.1rem',color:'black'}}>2 WARNING :</Typography>
          <Typography fontSize={"0.7rem"} sx={{background:'#93c5fd',width:'102px',height:'16px',paddingLeft:'0.1rem',color:'black',marginLeft:'0.41rem',border:'1px solid black'}}>37 Unhandled</Typography>
        </div>
       <Grid container style={{background:'#f87171',height:'6.7vh',marginTop:'0.08rem',paddingLeft:'0.2rem',marginLeft:'0.4rem',paddingRight:'1rem',width:'93%'}}>
       <Grid item xs={6}>
        <Typography style={{fontSize:'0.7rem',border:'1px solid black',height:'5.5vh',paddingTop:'0.4rem',paddingLeft:'0.1rem',width:'97%',marginTop:'0.2rem'}} >66 CRITICAL :</Typography>
       </Grid>
       <Grid item xs={6}>
        <Grid container>
          <Grid item xs={12} style={{background:'#93c5fd',marginTop:'0.2rem',border:'1px solid black',marginLeft:'0.2rem'}}>
            <Typography style={{fontSize:'0.7rem',height:'2.5vh'}}>50 Unhandled</Typography>
          </Grid>
          <Grid item xs={12} style={{background:'#93c5fd',height:'2.7vh',marginTop:'0.08rem',border:'1px solid black',marginLeft:'0.2rem'}}>
          <Typography style={{fontSize:'0.7rem'}}>16 on Problem Host</Typography>
          </Grid>
        </Grid>
       </Grid>
       </Grid>
      </div>
     </Grid>
      </Grid>
     </Grid>
     </Grid>
     <Grid container mt={0.3}>
     <Grid xs={2.5}></Grid>
     <Grid xs={9.5}>
      <Grid container>
    <Grid item xs={2.37} sx={{background:'#f4f4f5',height:'4.5vh'}}>
      <div>
        <Typography fontSize={"0.7rem"} mt={0.5} ml={1.7}>Linux Servers (linux-servers)</Typography>
      </div>
    </Grid>
    <Grid item xs={2.67} ml={1.1} sx={{background:'#f4f4f5',display:'flex',justifyContent:'space-around'}}>
      <div style={{background:'#22c55e',border:'1px solid black',width:'25%',height:'3vh',marginTop:"0.2rem"}}>
        <Typography fontSize={"0.7rem"} textAlign={"center"}>1 UP</Typography>
      </div>
    </Grid>
    <Grid item xs={3.8} ml={1.1} sx={{background:'#f4f4f5',display:'flex',justifyContent:'space-around'}}>
    <div style={{background:'#22c55e',border:'1px solid black',width:'25%',height:'3vh',marginTop:"0.2rem"}}>
        <Typography fontSize={"0.7rem"} textAlign={"center"}>8 OK</Typography>
      </div>
    </Grid>
      </Grid>
     </Grid>
     </Grid>
    </Grid>
    </Box>
  </div>
  )
}

export default HostGroupSummary
