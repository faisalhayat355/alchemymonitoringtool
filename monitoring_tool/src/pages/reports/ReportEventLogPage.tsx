import { Box, Grid, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const ReportEventLogPage = () => {
  const time = new Date().toLocaleTimeString();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return (
    <>
    <Grid style={{height:'24vh'}}>
    <Box>
     <Grid container>
     <Grid item xs={4}>
         <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Current Event Log</Typography>
         <Typography fontSize={"0.6rem"}>
           Last Updated: {currentDate} {time}
         </Typography>
         <Typography fontSize={"0.6rem"}>Alchemy® Core™
           <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
         </Typography>
         <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>
     </Grid>
     <Grid item xs={5.5}>
       <Grid container>
         <Grid item xs={2}>
         <Typography fontSize={'0.7rem'} color={"black"} mt={3}>Latest Archive</Typography>
         <Grid fontSize={'0.7rem'} color={"black"} mt={1} ml={3}>
           <ArrowBackIcon/>
         </Grid>
         </Grid>
         <Grid item xs={9}>
         <Typography fontSize={'0.9rem'} fontWeight={'medium'} color={"black"} ml={3.5}>Log File Navigation</Typography>
         <Typography fontSize={'0.7rem'} color={"black"} ml={2.2}>Wed Nov 8 00:00:00 IST 2023</Typography>
         <Typography fontSize={'0.7rem'} color={"black"} ml={11}>to</Typography>
         <Typography fontSize={'0.7rem'} color={"black"} ml={9.5}>Present...</Typography>
         <Typography fontSize={'0.7rem'} color={"black"} mt={2}>File: /usr/local/nagios/var/nagios.log</Typography>
       </Grid>
       </Grid>
     </Grid>
     <Grid item xs={2.5}>
       <Grid container>
         <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}} mt={0.3}>
           <input type="checkbox"/>
           <Typography  fontSize={'0.8rem'}>Older Entires First</Typography>
         </Grid>
         <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}} mt={0.3}>
          <button>Update</button>
         </Grid>
       </Grid>
     </Grid>
   </Grid>
     </Box>
       <Grid item xs={12} mt={3}>
         <Divider>
           <Typography fontSize={'0.8rem'} fontWeight={"bold"}>November 08, 2023 17:00</Typography>
         </Divider>
       </Grid>
    </Grid>
       <Grid sx={{height:'73vh',overflowY:'scroll'}}>
      
       <Body2/>
       <Body/>
       <Body3/>
       <Body/>
       <Body2/>
       <Body/>
       <Body2/>
       <Body2/>
       <Body3/>
       <Body2/>
       <Body3/>
       <Body2/>
       <Body3/>
       <Body2/>
       <Body/>
       <Body2/>
       <Body2/>
       <Body3/>
       <Body/>
       <Body2/>
       <Body2/>
       <Body2/>
       <Body3/>
       <Body2/>
       <Body3/>
       <Body2/>
       <Body3/>
       <Body/>
       <Body2/>
       <Body2/>
       <Body2/>
       <Body/>
       <Body3/>
       <Body/>
       <Body2/>
       <Body/>
       <Body2/>
       <Body2/>
       <Body3/>
       <Body2/>
       <Body3/>
       <Body2/>
       <Body/>
       <Body2/>
       <Body2/>
       <Body/>
       <Body3/>
       <Body2/>
       <Body2/>
       <Body3/>
       <Body2/>
       <Body3/>
       <Body2/>
       <Body/>
       <Body2/>
       <Body2/>
       <Body3/>
       <Body2/>
       <Body3/>
       <Body/>
       <Body2/>
       <Body2/>
       <Body3/>
       <Body2/>
       <Body3/>
       <Body2/>
       <Body/>
       <Body3/>
       <Body2/>
       <Body2/>
       <Body3/>
       <Body2/>
       <Body3/>
       </Grid>

   </>
  )
}

const Body=()=>{
  return(
    <>
    <Grid container>
      <Grid item xs={0.3} mt={0.1}>
        <div style={{background:'#4bc964',height:'2.1vh',width:'55%',border:'0.5px solid black'}}></div>
      </Grid>
      <Grid item xs={11.7}>
        <Typography fontSize={'0.7rem'}>[11-08-2023 17:17:59] SERVICE ALERT: Airtel-13838593-Bhopal;MPLS-BW;OK;SOFT;2;OK - Average IN: 2.81Mb (56.14%), Average OUT: 72.68Kb (1.45%)Total RX: 102.93Gbits, Total TX: 5.01Gbits</Typography>
      </Grid>
    </Grid>
    </>
  )
}
const Body2=()=>{
  return(
    <>
    <Grid container>
      <Grid item xs={0.3} mt={0.1}>
          <PriorityHighIcon style={{fontSize:'0.9rem',background:'#51a3f5 ',color:'white',border:'0.5px solid black'}}/>
      </Grid>
      <Grid item xs={11.7}>
        <Typography fontSize={'0.7rem'}>[11-08-2023 15:56:40] SERVICE ALERT: TATA-091MUMB623010448423-Ghatkopar;MPLS-BW;CRITICAL;SOFT;1;CRITICAL - IN bandwidth (139.00%) too high</Typography>
      </Grid>
    </Grid>
    </>
  )
}
const Body3=()=>{
  return(
    <>
    <Grid container>
      <Grid item xs={0.3} mt={0.1}>
            <RssFeedIcon style={{fontSize:'0.9rem',transform:'rotate(269deg)',paddingTop:'-0.8rem',border:'0.5px solid black',background:'#d2d3d4 '}}/>
      </Grid>
      <Grid item xs={11.7}>
        <Typography fontSize={'0.7rem'}>[11-08-2023 17:21:53] SERVICE NOTIFICATION: nagiosadmin;Airtel-13836082-Sagar;MPLS-BW;CRITICAL;notify-service-by-email;CRITICAL: Interface index not detected ERROR</Typography>
      </Grid>
    </Grid>
    </>
  )
}



export default ReportEventLogPage
