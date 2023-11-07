import React from "react";
import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MessageIcon from '@mui/icons-material/Message';

type Props = {};
const SystemCommentsPage = (props: Props) => {
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
    </Grid>
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
      <Typography textAlign={"center"} fontWeight={"bold"} fontSize={"0.8rem"} color={"#191a19"}>Host Comments</Typography>
    </Grid>

    <Grid container >
    <Grid item xs={4.9}></Grid>
    <Grid item xs={0.3}>
    <MessageIcon style={{color:'#555755',fontSize:'1.2rem'}}/>
    </Grid>
    <Grid item xs={3}>
   <Link href="#" underline="hover">
      <Typography textAlign={"start"} fontSize={"0.8rem"}>Add a New host Comment </Typography>
    </Link>
    </Grid>
    </Grid>

    </Box>

    <Grid sx={{width:'98.7%'}}>
    <HeaderHostComment/>
    </Grid>
    <Grid sx={{height:'41vh',overflowY:'scroll',width:'100%'}}>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
   </Grid>

   <Grid item xs={12} mt={1.5}>
      <Typography textAlign={"center"} fontWeight={"bold"} fontSize={"0.8rem"} color={"#191a19"}>Service Comment</Typography>
    </Grid>

    <Grid container >
      <Grid item xs={4.9}></Grid>
        <Grid item xs={0.3}>
          <MessageIcon style={{color:'#555755',fontSize:'1.2rem'}}/>
        </Grid>
      <Grid item xs={3}>
        <Link href="#" underline="hover">
          <Typography textAlign={"start"} fontSize={"0.8rem"}>Add a New service Comment </Typography>
        </Link>
      </Grid>
    </Grid>

    <Grid sx={{width:'98.7%'}}>
    <HeaderHostComment/>
    </Grid>
    <Grid sx={{height:'41vh',overflowY:'scroll',width:'100%'}}>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
        <BodyHostCOmment/>
   </Grid>
    </>
  );
};

const HeaderHostComment=()=>{
  return(
    <>
    <Box>
      <Grid container>
        <Grid item xs={2.5}>
          <Typography fontSize={'0.8rem'} fontWeight={'600'}>Host Name</Typography>
          <Divider sx={{width:'98.5%'}}/>
        </Grid>
        <Grid item xs={1}>
        <Typography fontSize={'0.8rem'} fontWeight={'600'}>Entry Time</Typography>
        <Divider sx={{width:'95%'}}/>
        </Grid>
        <Grid item xs={1}>
        <Typography fontSize={'0.8rem'} fontWeight={'600'}>Author</Typography>
        <Divider sx={{width:'95%'}}/>
        </Grid>
        <Grid item xs={3.8}>
        <Typography fontSize={'0.8rem'} fontWeight={'600'}>Comment</Typography>
        <Divider sx={{width:'99%'}}/>
        </Grid>
        <Grid item xs={1}>
        <Typography fontSize={'0.8rem'} fontWeight={'600'}>Comment ID</Typography>
        <Divider sx={{width:'95%'}}/>
        </Grid>
        <Grid item xs={0.8}>
        <Typography fontSize={'0.8rem'} fontWeight={'600'}>Persistent</Typography>
        <Divider sx={{width:'95%'}}/>
        </Grid>
        <Grid item xs={0.5}>
        <Typography fontSize={'0.8rem'} fontWeight={'600'}>Type</Typography>
        <Divider sx={{width:'95%'}}/>
        </Grid>
        <Grid item xs={0.5}>
        <Typography fontSize={'0.8rem'} fontWeight={'600'}>Expires</Typography>
        <Divider sx={{width:'95%'}}/>
        </Grid>
        <Grid item xs={0.8}>
        <Typography fontSize={'0.8rem'} fontWeight={'600'} style={{textAlign:'center'}}>Action</Typography>
        <Divider sx={{width:'95%'}}/>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

const BodyHostCOmment=()=>{
  return(
    <>
    <Box>
      <Grid container mt={"0.2rem"}>
        <Grid item xs={2.5} >
        <Link href="#" underline="hover">
          <Typography fontSize={'0.7rem'} style={{background:'#ededed',width:'98.5%',paddingLeft:'0.3rem',height:'6.3vh',paddingTop:'0.8rem'}}>TATA-091KOLK623010971641-Kolkata</Typography>
        </Link>
        </Grid>
        <Grid item xs={1}>
        <Typography fontSize={'0.7rem'} style={{background:'#ededed',width:'96.5%',padding:'0.3rem',height:'6.3vh'}}>09-01-2022 13:35:23</Typography>
        </Grid>
        <Grid item xs={1}>
        <Typography fontSize={'0.7rem'} style={{background:'#ededed',width:'96%',padding:'0.3rem',height:'6.3vh'}}>Alchemy Admin</Typography>
        </Grid>
        <Grid item xs={3.82}>
        <Typography fontSize={'0.7rem'} style={{background:'#ededed',width:'99.2%',padding:'0.3rem',height:'6.3vh'}}>May have false-positive error report. Check IP before reporting. Ping error.</Typography>
        </Grid>
        <Grid item xs={1}>
        <div style={{background:'#ededed',width:'95%',height:'6.3vh',paddingTop:'0.8rem',paddingLeft:'0.3rem'}}>
          <Typography fontSize={'0.7rem'} >15633</Typography>
          </div>        
          </Grid>
        <Grid item xs={0.8}>
        <div style={{background:'#ededed',width:'95%',height:'6.3vh',paddingTop:'0.8rem',paddingLeft:'0.3rem'}}>
          <Typography fontSize={'0.7rem'} >Yes</Typography>
          </div>        
          </Grid>
        <Grid item xs={0.5}>
        <div style={{background:'#ededed',width:'95%',height:'6.3vh',paddingTop:'0.8rem',paddingLeft:'0.3rem'}}>
          <Typography fontSize={'0.7rem'} >User</Typography>
          </div>        
          </Grid>
        <Grid item xs={0.5} >
          <div style={{background:'#ededed',width:'95%',height:'6.3vh',paddingTop:'0.8rem',paddingLeft:'0.2rem'}}>
          <Typography fontSize={'0.7rem'} >N/A</Typography>
          </div>
        </Grid>
        <Grid item xs={0.8} style={{background:'#ededed',width:'95%',height:'6.3vh'}}>
        <Typography fontSize={'0.7rem'} sx={{marginTop:'0.7rem',textAlign:'center'}}>
          <DeleteOutlineIcon style={{fontSize:'1.2rem'}}/>
        </Typography>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}



export default SystemCommentsPage;
