import React from "react";
import { Grid, Typography,Box,Divider,Paper } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Services = () => {
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
      <Typography fontSize={"0.9rem"} fontWeight={"bold"} textAlign={"center"}>Host Status Totals</Typography>
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
    <Grid item xs={12}>
      <Typography fontSize={"1rem"} fontWeight={"bold"} textAlign={"center"}>
      Host Status Details For All Host Groups
      </Typography>
    </Grid>
    <TableHeader/>
      <Grid sx={{height:'55.5vh',overflowY:'scroll'}}>
       
        <TableDataCritical/>
      <TableDataOK/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataOK/>
        <TableDataOK/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
      <TableDataOK/>
        <TableDataCritical/>
      <TableDataOK/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataOK/>
        <TableDataOK/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
      <TableDataOK/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataOK/>
        <TableDataOK/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
      <TableDataOK/>
        <TableDataCritical/>
      <TableDataOK/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataOK/>
        <TableDataOK/>
        <TableDataCritical/>
        <TableDataCritical/>
        </Grid> 
         <Grid container>
        <Grid item xs={11.9} sx={{display:'flex',justifyContent:'flex-end'}}>
        <Pagination count={10} size="small" />
        </Grid>
      </Grid>  
     </Box>
    </div>
  )
}

const TableHeader = () => {
  return(
  <>
   <Box mt={2} >
        <Grid container>
          <Grid item xs={1.8} ml={0.1}>
           <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Host
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
           </Grid>
          </Grid>
          <Grid item xs={1.5}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
             Services
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
             Status
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
            </Grid>
          </Grid>
          <Grid item xs={1.55}>
            <Grid container>
            <Typography fontSize={"0.8rem"} variant="subtitle2" noWrap >
              Last Check
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
            </Grid>
          </Grid>
          <Grid item xs={1.3}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Duration
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
            </Grid>
          </Grid>
          <Grid item xs={1.25}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Attempt
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Status information
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  </>
  )
  }

  const TableDataCritical = () => {
      return(
      <>
        <Box mt={1} >
        <Grid container>
          <Grid item xs={1.79} ml={0.1}>
           <Grid container sx={{background:'#e7e5e4',height:'5.8vh'}}>
           <Grid item xs={10}>
           <Typography fontSize={"0.7rem"} style={{paddingLeft:'0.2rem',paddingTop:'0.1rem'}}>   
              AIRTEL-13921609-KolkataZO
            </Typography>
           </Grid>
           <Grid item xs={2}>
           <AutoGraphIcon style={{fontSize:'1rem'}}/>
           </Grid>
           </Grid>
          </Grid>
          <Grid item xs={1.48} ml={0.3}>
            <Grid container sx={{background:'#fee2e2', height:'5.8vh',display:'flex',alignItems:'center'}}>
           <Grid item xs={10}>
           <Typography fontSize={"0.7rem"} sx={{paddingLeft:'0.3rem'}}>PING</Typography>
           </Grid>
           <Grid item xs={2}>
           <AutoGraphIcon style={{fontSize:'1rem'}}/>
           </Grid>
           </Grid>
          </Grid>
          <Grid item xs={1}>
          <Grid sx={{background:'#f87171', height:'5.8vh',marginLeft:'0.2rem',display:'flex',border:'1px solid black',alignItems:'center'}}>
           <Typography fontSize={"0.7rem"} sx={{paddingLeft:'0.3rem'}}>CRITICAL</Typography>
           </Grid>
          </Grid>
          <Grid item xs={1.6}>
          <Grid sx={{background:'#fee2e2', height:'5.8vh',marginLeft:'0.2rem',display:'flex',alignItems:'center'}}>
           <Typography fontSize={"0.7rem"} sx={{paddingLeft:'0.3rem'}}>11-02-2023 13:01:26</Typography>
           </Grid>
          </Grid>
          <Grid item xs={1.3}>
          <Grid sx={{background:'#fee2e2', height:'5.8vh',marginLeft:'0.2rem',display:'flex',alignItems:'center'}}>
           <Typography fontSize={"0.7rem"} sx={{paddingLeft:'0.3rem'}}>814d 12h 50m 23s</Typography>
           </Grid>
          </Grid>
          <Grid item xs={1.3}>
          <Grid sx={{background:'#fee2e2', height:'5.8vh',marginLeft:'0.2rem',display:'flex',alignItems:'center'}}>
           <Typography fontSize={"0.7rem"} sx={{paddingLeft:'0.3rem'}}>3/3</Typography>
           </Grid>
          </Grid>
          <Grid item xs={3.4}>
          <Grid sx={{background:'#fee2e2', height:'5.8vh',marginLeft:'0.2rem',display:'flex',alignItems:'center'}}>
           <Typography fontSize={"0.7rem"} sx={{paddingLeft:'0.3rem'}}>CRITICAL: Interface index not detected ERROR: No response from remote host "10.62.225.2" </Typography>
           </Grid>
          </Grid>
        </Grid>
        </Box>
      </>
      )
      }

  const TableDataOK = () => {
          return(
          <>
           <Box mt={1} >
        <Grid container>
          <Grid item xs={1.79} ml={0.1}>
           <Grid container sx={{background:'#e4e4e7',height:'5.8vh'}}>
           <Grid item xs={10}>
           <Typography fontSize={"0.7rem"} style={{paddingLeft:'0.2rem',paddingTop:'0.1rem'}}>   
              AIRTEL-13921609-KolkataZO
            </Typography>
           </Grid>
           <Grid item xs={2}>
           <AutoGraphIcon style={{fontSize:'1rem'}}/>
           </Grid>
           </Grid>
          </Grid>
          <Grid item xs={1.48} ml={0.3}>
            <Grid container sx={{background:'#e4e4e7', height:'5.8vh',display:'flex',alignItems:'center'}}>
           <Grid item xs={10}>
           <Typography fontSize={"0.7rem"} sx={{paddingLeft:'0.3rem'}}>MPLS-BW</Typography>
           </Grid>
           <Grid item xs={2}>
           <AutoGraphIcon style={{fontSize:'1rem'}}/>
           </Grid>
           </Grid>
          </Grid>
          <Grid item xs={1}>
          <Grid sx={{background:'#22c55e', height:'5.8vh',marginLeft:'0.2rem',border:'1px solid black',display:'flex',alignItems:'center'}}>
           <Typography fontSize={"0.7rem"} sx={{paddingLeft:'0.3rem'}}>OK</Typography>
           </Grid>
          </Grid>
          <Grid item xs={1.6}>
          <Grid sx={{background:'#e4e4e7', height:'5.8vh',marginLeft:'0.2rem',display:'flex',alignItems:'center'}}>
           <Typography fontSize={"0.7rem"} sx={{paddingLeft:'0.3rem'}}>11-02-2023 13:01:26</Typography>
           </Grid>
          </Grid>
          <Grid item xs={1.3}>
          <Grid sx={{background:'#e4e4e7', height:'5.8vh',marginLeft:'0.2rem',display:'flex',alignItems:'center'}}>
           <Typography fontSize={"0.7rem"} sx={{paddingLeft:'0.3rem'}}>814d 12h 50m 23s</Typography>
           </Grid>
          </Grid>
          <Grid item xs={1.3}>
          <Grid sx={{background:'#e4e4e7', height:'5.8vh',marginLeft:'0.2rem',display:'flex',alignItems:'center'}}>
           <Typography fontSize={"0.7rem"} sx={{paddingLeft:'0.3rem'}}>3/3</Typography>
           </Grid>
          </Grid>
          <Grid item xs={3.4}>
          <Grid sx={{background:'#e4e4e7', height:'5.8vh',marginLeft:'0.2rem',display:'flex',alignItems:'center'}}>
           <Typography fontSize={"0.7rem"} sx={{paddingLeft:'0.3rem'}}>CRITICAL: Interface index not detected ERROR: No response from remote host "10.62.225.2" </Typography>
           </Grid>
          </Grid>
        </Grid>
        </Box>
          </>
          )
      }
      

export default Services
