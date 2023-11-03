import React from "react";
import { Grid, Typography,Box,Divider,Paper } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const HostsPage = () => {
  const time = new Date().toLocaleTimeString();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return (
    <>
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
    <Grid container mt={1}>
    <Grid item xs={5}>
      <Grid container>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} fontSize={"0.75rem"}>Display Filters:</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} fontSize={"0.75rem"}>Host Status Types: <span style={{fontWeight:'normal',fontSize:'0.65rem'}}> All problems</span></Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} fontSize={"0.75rem"}>Host Properties: <span style={{fontWeight:'normal',fontSize:'0.65rem'}}> Any</span></Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} fontSize={"0.75rem"}>Service Status Type: <span style={{fontWeight:'normal',fontSize:'0.65rem'}}> All</span></Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} fontSize={"0.75rem"}>Service Properties: <span style={{fontWeight:'normal',fontSize:'0.65rem'}}> Any</span></Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={6}>
    <Typography fontSize={"1rem"} fontWeight={"bold"}>
      Host Status Details For All Host Groups
      </Typography>
    </Grid>
    </Grid>
    <TableHeader/>
      <Grid sx={{height:'44vh',overflowY:'scroll'}}>  
        {/* <TableDataOk/> */}
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        <TableDataCritical/>
        <TableDataCritical/>
        {/* <TableDataOk/> */}
        <TableDataCritical/>
        <TableDataCritical/>
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        <TableDataCritical/>
        <TableDataCritical/>
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        <TableDataCritical/>
        <TableDataCritical/>
        {/* <TableDataOk/> */}
        <TableDataCritical/>
        <TableDataCritical/>
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        {/* <TableDataOk/> */}
        </Grid> 
         <Grid container>
        <Grid item xs={11.9} sx={{display:'flex',justifyContent:'flex-end'}}>
        <Pagination count={10} size="small" />
        </Grid>
      </Grid>  
     </Box>
    </>
  )
}
const TableHeader = () => {
  return(
  <>
   <Box mt={0.5} >
        <Grid container>
          <Grid item xs={3.1} ml={0.1}>
           <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Host
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
           </Grid>
          </Grid>
          <Grid item xs={1.17}>
            <Grid container>

            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
             Status
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container>
            <Typography fontSize={"0.8rem"} variant="subtitle2" noWrap >
              Last Check
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
            </Grid>
          </Grid>
          <Grid item xs={1.6}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Duration
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
  const TableDataOk = () => {
      return(
      <>
       <Box mt={0.3}> 
            <Grid container>
              <Grid item xs={3.1} sx={{background:'#bee8ba'}}>
               <Grid container sx={{display:'flex',alignItems:'center',}}>
                <Grid item xs={9}>
                <Typography fontSize={"0.7rem"} ml={'1rem'}>
                AIRTEL-13921609-KolkataZO 
                </Typography>
                </Grid>
                <Grid item xs={3} mt={0.2}>
                  <AutoGraphIcon style={{fontSize:'1rem'}}/>
                  <SearchIcon style={{fontSize:'1rem',marginLeft:'0.8rem'}}/>
                </Grid>
               </Grid>
              </Grid>
              <Grid item xs={1.14} sx={{background:'#bee8ba',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
                <Typography noWrap fontSize={"0.7rem"} ml={"0.2rem"}>
                UP
                </Typography>
              </Grid>
              <Grid item xs={1.99} sx={{background:'#e5e5e5',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
                <Typography fontSize={"0.7rem"}  noWrap display={"flex"} justifyContent={"space-around"}>
                11-02-2023 11:57:03
                </Typography>
              </Grid>
              <Grid item xs={1.6} sx={{background:'#e5e5e5',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
                <Typography display={"flex"} justifyContent={"space-around"} fontSize={"0.7rem"}>
                5d 23h 21m 51s
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{background:'#e5e5e5',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
              <Typography fontSize={"0.7rem"}>
              PING OK - Packet loss = 0%, RTA = 58.42 ms 
                </Typography>  
              </Grid>

            </Grid>
          
        </Box>
      </>
      )
      }
  const TableDataCritical = () => {
          return(
          <>
           <Box mt={0.3}> 
            <Grid container>
              <Grid item xs={3.1} sx={{background:'#fee2e2'}}>
               <Grid container sx={{display:'flex',alignItems:'center',}}>
                <Grid item xs={9}>
                <Typography fontSize={"0.7rem"} ml={'1rem'}>
                Agra-BB-Synoptics 
                </Typography>
                </Grid>
                <Grid item xs={3} mt={0.2}>
                  <AutoGraphIcon style={{fontSize:'1rem'}}/>
                  <SearchIcon style={{fontSize:'1rem',marginLeft:'0.8rem'}}/>
                </Grid>
               </Grid>
              </Grid>
              <Grid item xs={1.14} sx={{background:'#fee2e2',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
                <Typography noWrap fontSize={"0.7rem"} ml={"0.2rem"}>
                DOWN
                </Typography>
              </Grid>
              <Grid item xs={1.99} sx={{background:'#fee2e2',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
                <Typography fontSize={"0.7rem"}  noWrap display={"flex"} justifyContent={"space-around"}>
                11-02-2023 12:26:41
                </Typography>
              </Grid>
              <Grid item xs={1.6} sx={{background:'#fee2e2',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
                <Typography display={"flex"} justifyContent={"space-around"} fontSize={"0.7rem"}>
                389d 8h 12m 33s
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{background:'#fee2e2',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
              <Typography fontSize={"0.7rem"}>
              (Host check timed out after 30.01 seconds) 
                </Typography>  
              </Grid>

            </Grid>
          
        </Box>
          </>
          )
      }
export default HostsPage
