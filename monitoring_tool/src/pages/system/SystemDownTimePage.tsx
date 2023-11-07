import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Divider, Grid, Link, Typography } from "@mui/material";

const SystemDownTimePage = () => {
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
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>All Host and Service Scheduled Downtime</Typography>
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
    </Box>
    <ScheduleHostDownTime/>
    <ScheduleServiceDownTime/>
    </>
  )
}
const ScheduleHostDownTime=()=>{
  return(
    <>
    <Grid container sx={{display:'flex',marginTop:'1rem'}}>
   <Grid item xs={4.7}></Grid>
   <Grid item xs={1.2}>
   <Link href="#" underline="hover">
      <Typography fontSize={"0.8rem"}textAlign={"center"}>
       [ Host Comments <span style={{color:'black'}}>|</span>
      </Typography>
      </Link>
    </Grid>
    <Grid item xs={1.3}>
    <Link href="#" underline="hover">
      <Typography fontSize={"0.8rem"}>
      Service Comments ]
      </Typography>
      </Link>
    </Grid>
    </Grid>
    <Grid item xs={12} mt={1}>
      <Typography textAlign={"center"} fontWeight={"bold"} fontSize={"1rem"} color={"#191a19"}>Scheduled Host Downtime</Typography>
    </Grid>
    <Grid container mt={1} >
    <Grid item xs={4.9}></Grid>
    <Grid item xs={0.3}>
    <AccessTimeIcon style={{color:'#555755',fontSize:'1.2rem'}}/>
    </Grid>
    <Grid item xs={3}>
   <Link href="#" underline="hover">
      <Typography textAlign={"start"} fontSize={"0.8rem"}>Schedule host downtime </Typography>
    </Link>
    </Grid>
    </Grid>
    <Grid container mt={1}>
      <Grid item xs={2.7}></Grid>
      <Grid item xs={8} sx={{display:'flex'}}>
          <Typography fontSize={'0.8rem'} fontWeight={"bold"}>Host Name
          <Divider style={{width:'100%'}} />
          </Typography>
          <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Entry Time
          <Divider style={{width:'100%'}} />
          </Typography>
          <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Author
          <Divider style={{width:'100%'}} />
          </Typography>
          <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Comment
          <Divider style={{width:'100%'}} />
          </Typography>
          <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Start Time
          <Divider style={{width:'100%'}} />
          </Typography>
          <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>End Time
          <Divider style={{width:'100%'}} />
          </Typography>
          <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Type
          <Divider style={{width:'100%'}} />
          </Typography>
          <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Duration
          <Divider style={{width:'100%'}} />
          </Typography>
          <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Downtime
          <Divider style={{width:'100%'}} />
          </Typography>
          <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Trigger ID
          <Divider style={{width:'100%'}} />
          </Typography>
          <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Actions
          <Divider style={{width:'100%'}} />
          </Typography>
      </Grid>  
        <Grid container mt={0.3}>
          <Grid item xs={2.7}></Grid>
          <Grid item xs={7.05}>
        <Typography fontSize={"0.75rem"} sx={{background:'#ededed',paddingLeft:'0.2rem'}}>There are no hosts with scheduled downtime</Typography>
        </Grid>
        </Grid>
    </Grid>
    </>
  )
}
const ScheduleServiceDownTime=()=>{
  return(
    <Box mt={5}>
    <Grid item xs={12} mt={1}>
      <Typography textAlign={"center"} fontWeight={"bold"} fontSize={"1rem"} color={"#191a19"}>Scheduled Service Downtime</Typography>
    </Grid>

    <Grid container mt={1} >
    <Grid item xs={4.9}></Grid>
    <Grid item xs={0.3}>
    <AccessTimeIcon style={{color:'#555755',fontSize:'1.2rem'}}/>
    </Grid>
    <Grid item xs={3}>
   <Link href="#" underline="hover">
      <Typography textAlign={"start"} fontSize={"0.8rem"}>Schedule service downtime </Typography>
    </Link>
    </Grid>
    </Grid>
    <Grid container mt={1}>
      <Grid item xs={2.7}></Grid>
      <Grid item xs={8} sx={{display:'flex'}}>
      <Typography fontSize={'0.8rem'} fontWeight={"bold"}>Host Name
        <Divider style={{width:'100%'}} />
        </Typography>
        <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Entry Time
        <Divider style={{width:'100%'}} />
        </Typography>
        <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Author
        <Divider style={{width:'100%'}} />
        </Typography>
        <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Comment
        <Divider style={{width:'100%'}} />
        </Typography>
        <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Start Time
        <Divider style={{width:'100%'}} />
        </Typography>
        <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>End Time
        <Divider style={{width:'100%'}} />
        </Typography>
        <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Type
        <Divider style={{width:'100%'}} />
        </Typography>
        <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Duration
        <Divider style={{width:'100%'}} />
        </Typography>
        <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Downtime
        <Divider style={{width:'100%'}} />
        </Typography>
        <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Trigger ID
        <Divider style={{width:'100%'}} />
        </Typography>
        <Typography fontSize={'0.8rem'} fontWeight={"bold"} sx={{marginLeft:'0.4rem'}}>Actions
        <Divider style={{width:'100%'}} />
        </Typography>
      </Grid>

      <Grid container mt={0.3}>
        <Grid item xs={2.7}></Grid>
          <Grid item xs={7.05}>
            <Typography fontSize={"0.75rem"} sx={{background:'#ededed',paddingLeft:'0.2rem'}}>There are no services with scheduled downtime</Typography>
          </Grid>
      </Grid>
    </Grid>
    </Box>
  )
}
export default SystemDownTimePage
