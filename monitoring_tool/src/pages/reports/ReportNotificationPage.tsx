import React from "react";
import { Grid, Typography,Box,Divider,Paper } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const ReportNotificationPage = () => {

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
      <Grid item xs={3.5}>
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Contact Notifications</Typography>
          <Typography fontSize={"0.6rem"}>
            Last Updated: {currentDate} {time}
          </Typography>
          <Typography fontSize={"0.6rem"}>Alchemy® Core™
            <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
          </Typography>
          <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>
      </Grid>

      <Grid item xs={1} mt={10}>
        <Grid item xs={12}>
        <Grid item xs={12}>
        <Typography fontSize={"0.7rem"} textAlign={"center"}>Latest Archive</Typography>
        </Grid>
        <Grid item xs={12}>
          <ArrowBackIcon style={{marginLeft:'1.8rem'}}/>
        </Grid>
        </Grid>  
      </Grid>
      <Grid item xs={3.5}>
        <Typography fontSize={"0.9rem"} fontWeight={"bold"} textAlign={"center"}>All Contact</Typography>
        <Typography fontSize={"0.9rem"} fontWeight={"bold"} textAlign={"center"}>Log File Navigation</Typography>
        <Typography fontSize={"0.7rem"} textAlign={"center"}>Fri Nov 3 00:00:00 IST 2023</Typography>
        <Typography fontSize={"0.7rem"} textAlign={"center"}>to</Typography>
        <Typography fontSize={"0.7rem"} textAlign={"center"}>Present</Typography>
      </Grid>
      <Grid item xs={4}>
      <Typography fontSize={"0.7rem"} sx={{display:'flex', justifyContent:'flex-end'}}>Notification detail level for all contacts:</Typography>
      <Grid item xs={12} sx={{display:'flex', justifyContent:'flex-end'}} mt={0.4}>
      <select name="cars" id="cars" style={{width:'58.5%'}}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      </Grid>
      <Grid item xs={9} mt={0.4}>
        <Typography fontSize={"0.7rem"} sx={{display:'flex', justifyContent:'flex-end'}}>Older Entries First:  <input type="checkbox" />	</Typography>
      </Grid>
      <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}}>
      <button>Update</button>
      </Grid>
      </Grid>
      <Grid item xs={12}>
      <Typography fontSize={"0.7rem"} textAlign={"center"}>File: /usr/local/alchemy/var/alchemy.log</Typography>
      </Grid>
    
    </Grid>
    <TableHeader/>
      <Grid sx={{height:'60vh',overflowY:'scroll'}}>  
      <TableDataCritical/>
        {/* <TableDataCritical/>
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
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/> */}
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
          <Grid item xs={2} ml={0.1}>
           <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Host
            </Typography>
            <Divider style={{width:'99%'}}/>
           </Grid>
          </Grid>
          <Grid item xs={1.17}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
             Service
            </Typography>
            <Divider style={{width:'97%'}}/>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container>
            <Typography fontSize={"0.8rem"} variant="subtitle2" noWrap >
             Type
            </Typography>
            <Divider style={{width:'97%'}}/>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Time
            </Typography>
            <Divider style={{width:'97%'}}/>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Contact
            </Typography>
            <Divider style={{width:'97%'}}/>
            </Grid>
          </Grid>
          <Grid item xs={1.8}>
            <Grid container>
            <Typography variant="subtitle2" fontSize={"0.8rem"}>
              Notification  Command
            </Typography>
            <Divider style={{width:'97%'}}/>
            </Grid>
          </Grid>
          <Grid item xs={3.5}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Information
            </Typography>
            <Divider style={{width:'100%'}}/>
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
         <Box mt={0.5} >
        <Grid container>
          <Grid item xs={2} ml={0.1}>
           <Grid container sx={{background:'#e5e5e5',width:'100%',padding:"0.3rem"}}>
            <Typography fontSize={"0.7rem"} >
            Salem-BB-Local
            </Typography>
           </Grid>
          </Grid>
          <Grid item xs={1.17} >
            <Grid container sx={{background:'#e5e5e5',width:'97%',padding:"0.4rem",marginLeft:'0.2rem'}}>
            <Typography fontSize={"0.7rem"}>
            N/A
            </Typography>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container sx={{background:'#e5e5e5',width:'97%',padding:"0.45rem",marginLeft:'0.2rem'}}>
            <Typography fontSize={"0.7rem"} >
            HOST DOWN
            </Typography>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container sx={{background:'#e5e5e5',width:'101.5%',padding:"0.2rem",marginLeft:'0.2rem'}}>
            <Typography fontSize={"0.7rem"}>
            11-03-2023 17:31:00
            </Typography>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container sx={{background:'#e5e5e5',width:'97.8%',padding:"0.3rem",marginLeft:'0.45rem'}}>
            <Typography fontSize={"0.7rem"}>
            alchemyadmin
            </Typography>
            </Grid>
          </Grid>
          <Grid item xs={1.8}>
            <Grid container sx={{background:'#e5e5e5',width:'99.5%',padding:"0.3rem",marginLeft:'0.5rem'}}>
            <Typography fontSize={"0.7rem"}>
            notify-host-by-email
            </Typography>
            </Grid>
          </Grid>
          <Grid item xs={3.5}>
            <Grid container sx={{background:'#e5e5e5',width:'102%',padding:"0.3rem",marginLeft:'0.65rem'}}>
            <Typography fontSize={"0.7rem"}>
            (Host check timed out after 30.01 seconds)
            </Typography>

            </Grid>
          </Grid>
        </Grid>
      </Box>
          </>
          )
      }

export default ReportNotificationPage
