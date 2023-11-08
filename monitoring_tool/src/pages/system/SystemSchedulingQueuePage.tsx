import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, Grid, Typography } from "@mui/material";

const SystemSchedulingQueuePage = () => {
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
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>
              Check Scheduling Queue</Typography>
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
    <Grid container>
      <Grid item xs={0.5}></Grid>
      <Grid item xs={11.3}>
      <Header/>
      </Grid>
    </Grid>
<Grid container sx={{height:'85vh',overflowY:'scroll'}}  mt={1}>
  <Grid item xs={0.5}></Grid>
  <Grid item xs={11.5}>
     
      <ListData/>
      <ListData/>
      <ListData/>
      <ListData/>
      <ListData/>
      <ListData/>
      <ListData/>
      <ListData/>
      <ListData/>
      <ListData/>
      <ListData/>
      <ListData2/>
      <ListData2/>
      <ListData2/>
      <ListData2/>
      <ListData2/>
      <ListData/>
      <ListData/>
      <ListData2/>
      <ListData2/>
      <ListData2/>
      <ListData2/>
      <ListData/>
      <ListData/>
      <ListData/>
      <ListData/>
  </Grid>
</Grid>
    </>
  )
}
const Header=()=>{
  return(
    <>
    <Box>
      <Grid container>
        <Grid item xs={3.3}>
          <Grid container >
            <Grid item xs={2}>
            <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Host </Typography>
            </Grid>
            <Grid item xs={1}><ArrowDropDownIcon/></Grid>
            <Grid item xs={1}> <ArrowDropUpIcon/></Grid>
          </Grid>

          <Divider style={{width:'99%'}}/>
        </Grid>
        <Grid item xs={1.2}>
           <Grid container >
            <Grid item xs={7}>
            <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Service </Typography>
            </Grid>
            <Grid item xs={1.8}><ArrowDropDownIcon/></Grid>
            <Grid item xs={1}> <ArrowDropUpIcon/></Grid>
          </Grid>
          <Divider style={{width:'97%'}}/>
        </Grid>
        <Grid item xs={1.5}>
           <Grid container >
            <Grid item xs={8.1}>
            <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Last Check </Typography>
            </Grid>
            <Grid item xs={1.4}><ArrowDropDownIcon/></Grid>
            <Grid item xs={1}> <ArrowDropUpIcon/></Grid>
          </Grid>
          <Divider style={{width:'97%'}}/>
        </Grid>
        <Grid item xs={1.5}>
           <Grid container >
            <Grid item xs={8.3}>
            <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Next Check </Typography>
            </Grid>
            <Grid item xs={1.5}><ArrowDropDownIcon/></Grid>
            <Grid item xs={1}> <ArrowDropUpIcon/></Grid>
          </Grid>
          <Divider style={{width:'97%'}}/>
        </Grid>
        <Grid item xs={1}>
           <Grid container >
            <Grid item xs={5}>
            <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Type </Typography>
            </Grid>
            <Grid item xs={2}><ArrowDropDownIcon/></Grid>
            <Grid item xs={1}> <ArrowDropUpIcon/></Grid>
          </Grid>
          <Divider style={{width:'97%'}}/>
        </Grid>
        <Grid item xs={1.5}>
           <Grid container >
            <Grid item xs={8.5}>
            <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Active Checks </Typography>
            </Grid>
            <Grid item xs={1.5}><ArrowDropDownIcon/></Grid>
            <Grid item xs={1.5}> <ArrowDropUpIcon/></Grid>
          </Grid>
          <Divider style={{width:'97%'}}/>
        </Grid>
        <Grid item xs={1}>
           <Grid container >
            <Grid item xs={6}>
            <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Actions </Typography>
            </Grid>
            <Grid item xs={2}><ArrowDropDownIcon/></Grid>
            <Grid item xs={1.5}> <ArrowDropUpIcon/></Grid>
          </Grid>
          <Divider style={{width:'100%'}}/>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

const ListData=()=>{
  return(
    <>
    <Box mt={0.5}>
      <Grid container>
        <Grid item xs={3.3}>
        <div style={{background:'#e8e8e8',width:'99%',paddingLeft:'0.3rem'}}>
        <Typography fontSize={"0.8rem"}>Bhatinda-BB-Synoptics</Typography>
        </div>
        </Grid>
        <Grid item xs={1.2}>
        <div style={{background:'#e8e8e8',width:'97.5%',paddingLeft:'0.3rem'}}>
        <Typography fontSize={"0.8rem"}>PING</Typography>
        </div>
        </Grid>
        <Grid item xs={1.5}>
        <div style={{background:'#e8e8e8',width:'98%',paddingLeft:'0.3rem'}}>
        <Typography fontSize={"0.8rem"}>11-08-2023 12:32:32</Typography>
        </div>
        </Grid>
        <Grid item xs={1.5}>
        <div style={{background:'#e8e8e8',width:'98%',paddingLeft:'0.3rem'}}>
        <Typography fontSize={"0.8rem"}>11-08-2023 12:32:32</Typography>
        </div>
        </Grid>
        <Grid item xs={1}>
        <div style={{background:'#e8e8e8',width:'97.5%',paddingLeft:'0.3rem'}}>
        <Typography fontSize={"0.8rem"}>Normal</Typography>
        </div>
        </Grid>
        <Grid item xs={1.5}>
        <div style={{background:'#27ba58',width:'97.8%',paddingLeft:'0.3rem',border:'0.5px solid #525252',height:'3vh'}}>
        <Typography fontSize={"0.8rem"}>Enabled</Typography>
        </div>
        </Grid>
        <Grid item xs={1}>
        <div style={{background:'#e8e8e8',width:'100%',paddingLeft:'0.3rem',display:'flex',height:'3vh'}}>
       <div><CloseIcon style={{fontSize:'1rem',marginLeft:'0.6rem',color:'red'}}/></div>
       <div><AccessTimeIcon style={{fontSize:'1rem',marginLeft:'1rem'}}/></div>
        </div>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}


const ListData2=()=>{
  return(
    <>
    <Box mt={0.5}>
      <Grid container>
        <Grid item xs={3.3}>
        <div style={{background:'#f0f0f0',width:'99%',paddingLeft:'0.3rem'}}>
        <Typography fontSize={"0.8rem"}>TATA-091AHME623010938005-Ahmedabad</Typography>
        </div>
        </Grid>
        <Grid item xs={1.2}>
        <div style={{background:'#f0f0f0',width:'97.5%',paddingLeft:'0.3rem',height:'3vh'}}>
        <Typography fontSize={"0.8rem"}></Typography>
        </div>
        </Grid>
        <Grid item xs={1.5}>
        <div style={{background:'#f0f0f0',width:'98%',paddingLeft:'0.3rem'}}>
        <Typography fontSize={"0.8rem"}>11-08-2023 12:32:32</Typography>
        </div>
        </Grid>
        <Grid item xs={1.5}>
        <div style={{background:'#f0f0f0',width:'98%',paddingLeft:'0.3rem'}}>
        <Typography fontSize={"0.8rem"}>11-08-2023 12:32:32</Typography>
        </div>
        </Grid>
        <Grid item xs={1}>
        <div style={{background:'#f0f0f0',width:'97.5%',paddingLeft:'0.3rem'}}>
        <Typography fontSize={"0.8rem"}>Normal</Typography>
        </div>
        </Grid>
        <Grid item xs={1.5}>
        <div style={{background:'#27ba58',width:'97.8%',paddingLeft:'0.3rem',border:'0.5px solid #525252',height:'3vh'}}>
        <Typography fontSize={"0.8rem"}>Enabled</Typography>
        </div>
        </Grid>
        <Grid item xs={1}>
        <div style={{background:'#f0f0f0',width:'100%',paddingLeft:'0.3rem',display:'flex',height:'3vh'}}>
       <div><CloseIcon style={{fontSize:'1rem',marginLeft:'0.6rem',color:'red'}}/></div>
       <div><AccessTimeIcon style={{fontSize:'1rem',marginLeft:'1rem'}}/></div>
        </div>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default SystemSchedulingQueuePage
