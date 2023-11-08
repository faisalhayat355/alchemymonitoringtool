import { Box, Grid, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const ReportAlertsPage = () => {
  const time = new Date().toLocaleTimeString();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return (
    <>
     <Grid style={{height:'36vh'}}>
     <Box>
      <Grid container>
      <Grid item xs={4}>
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>All Host and Service Comments</Typography>
          <Typography fontSize={"0.6rem"}>
            Last Updated: {currentDate} {time}
          </Typography>
          <Typography fontSize={"0.6rem"}> Updated every 90 seconds</Typography>
          <Typography fontSize={"0.6rem"}>Alchemy® Core™
            <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
          </Typography>
          <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>
      </Grid>
      <Grid item xs={5.5}>
          <Typography fontSize={"1.1rem"} fontWeight={"bold"} ml={10}>All Hosts and Services</Typography>
        <Grid container>
          <Grid item xs={2}>
          <Typography fontSize={'0.7rem'} color={"black"} mt={3}>Latest Archive</Typography>
          <Grid fontSize={'0.7rem'} color={"black"} mt={1} ml={3}>
            <ArrowBackIcon/>
          </Grid>
          </Grid>
          <Grid item xs={9} mt={2.8}>
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
          <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}}>
            <Typography  fontSize={'0.8rem'}>State type options:</Typography>
          </Grid>
          <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}}>
           <select>
           <option>All state types</option>
            <option>Soft state</option>
            <option>Hard state</option>
           </select>
          </Grid>
          <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}}>
            <Typography  fontSize={'0.8rem'}>History detail level for all hosts:</Typography>
          </Grid>
          <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}}>
           <select>
           <option>All alerts</option>
            <option>All service alert</option>
            <option>All host alert</option>
            <option>Service warning</option>
            <option>Service unknown</option>
            <option>Service critical</option>
            <option>Service recovery</option>
            <option>Host down</option>
            <option>Host unreachable</option>
            <option>Host recovery</option>
           </select>
          </Grid>
          <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}} mt={0.8}>
            <input type="checkbox"/>
            <Typography  fontSize={'0.8rem'}>Hide Flapping Alerts</Typography>
          </Grid>
          <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}} mt={0.3}>
            <input type="checkbox"/>
            <Typography  fontSize={'0.8rem'}>Hide Downtime Alerts</Typography>
          </Grid>
          <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}} mt={0.3}>
            <input type="checkbox"/>
            <Typography  fontSize={'0.8rem'}>Hide Process Messages</Typography>
          </Grid>
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
            <Typography fontSize={'0.8rem'} fontWeight={"bold"}>November 08, 2023 15:00</Typography>
          </Divider>
        </Grid>
     </Grid>
        <Grid sx={{height:'61vh',overflowY:'scroll'}}>
        <Body/>
        <Body/>
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
        <Body3/>
        <Body/>
        <Body2/>
        <Body/>
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
        <Body3/>
        <Body/>
        <Body2/>
        <Body/>
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
        <Body3/>
        <Body/>
        <Body2/>
        <Body/>
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
        <Body3/>
        <Body/>
        <Body2/>
        <Body/>
        <Body2/>
        <Body2/>
        <Body3/>
        <Body2/>
        <Body3/>
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
        <Body3/>
        <Body/>
        <Body2/>
        <Body/>
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
        <div style={{background:'#4bc964',height:'2.1vh',width:'60%',border:'0.5px solid black'}}></div>
      </Grid>
      <Grid item xs={11.7}>
        <Typography fontSize={'0.7rem'}>[11-08-2023 15:57:00] SERVICE ALERT: Airtel-13835797-Nashik;MPLS-BW;OK;HARD;3;OK - Average IN: 196.60Kb (3.93%), Average OUT: 22.88b (0.00%)Total RX: 9336.86Gbits, Total TX: 330.28Gbits</Typography>
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
          <PriorityHighIcon style={{fontSize:'0.9rem',background:'#f25acc ',color:'white',width:'60%',border:'0.5px solid black'}}/>
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
          <PriorityHighIcon style={{fontSize:'0.9rem',background:'#e4eb26 ',color:'black',width:'60%',border:'0.5px solid black'}}/>
      </Grid>
      <Grid item xs={11.7}>
        <Typography fontSize={'0.7rem'}>[11-08-2023 15:28:45] SERVICE ALERT: TATA-091BURD623030199341-Burdwan;MPLS-BW;WARNING;SOFT;1;WARNING - OUT bandwidth (80.04%) too high</Typography>
      </Grid>
    </Grid>
    </>
  )
}



export default ReportAlertsPage
