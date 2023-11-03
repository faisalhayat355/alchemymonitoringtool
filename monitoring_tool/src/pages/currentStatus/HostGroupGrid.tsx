import React from "react";
import { Grid, Typography,Box,Divider} from "@mui/material";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SearchIcon from '@mui/icons-material/Search';

const HostGroupGrid = () => {
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
          <Typography fontSize={"0.6rem"} style={{cursor:'pointer',textDecoration:'underline'}}>View Status Summary For All Host Groups</Typography>
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
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>12</Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            <i>All Types</i>
          </Typography>
          <div style={{background:'#d1d5db',width:'105%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>432</Typography>
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
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>76</Typography>
          </div>
        </Grid>
        <Grid item xs={2.25}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Warning
          </Typography>
          <div style={{background:'#eab308',width:'88%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>65</Typography>
          </div>
        </Grid>
        <Grid item xs={3.1}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Unknown
          </Typography>
          <div style={{background:'#d1d5db',width:'91%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>34</Typography>
          </div>
        </Grid>
        <Grid item xs={2.5}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Critical
          </Typography>
          <div style={{background:'#f87171',width:'89%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>13</Typography>
          </div>
        </Grid>
        <Grid item xs={2}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Pending
          </Typography>
          <div style={{background:'#d1d5db',width:'105%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>23</Typography>
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
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>43</Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            <i>All Types</i>
          </Typography>
          <div style={{background:'#d1d5db',width:'105%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>233</Typography>
          </div>
        </Grid>
      </Grid>
      </Grid>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12} mt={1}>
        <Typography textAlign={"center"} fontWeight={"bold"} fontSize={"1.1rem"}>Status Grid For All Service Groups</Typography>
      </Grid> 
      <Grid item xs={12} mt={1}>
      <Typography textAlign={"center"} fontSize={"0.9rem"}>Network (Broadband)</Typography>
      </Grid>
      <Grid container>
      <Grid item xs={4}>
      
      </Grid>
      <Grid item xs={4}>
        <Grid container mt={1}>
          <Grid item xs={5.7}>
          <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Host</Typography>
          <Divider style={{width:'94.5%'}}/>
          </Grid>
          <Grid item xs={3}>
          <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Services</Typography>
          <Divider style={{width:'93%'}}/>
          </Grid>
          <Grid item xs={3}>
          <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Actions</Typography>
          <Divider style={{width:'95.5%'}}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}></Grid>
      </Grid> 
    </Grid>
  <Grid container style={{height:'60vh',overflowY:"scroll"}}>
    <Data/>
    <Data2/>
    <Data2/>
    <Data2/>
    <Data3/>
    <Data3/>
    <Data2/>
    <Data3/>
    <Data2/>
    <Data2/>
    <Data3/>
    <Data3/>
    <Data2/>
    <Data2/>
    <Data3/>
    <Data2/>
    <Data3/>
    <Data2/>
    <Data2/>
    <Data3/>
    <Data3/>
    <Data2/>
    <Data3/>
    <Data2/>
    <Data2/>
    <Data3/>
    <Data3/>
    <Data2/>
    <Data3/>
    <Data2/>
    <Data2/>
    <Data3/>
    <Data3/>
    <Data2/>
    <Data3/>
    <Data2/>
    <Data2/>
    <Data3/>
    <Data3/>
    <Data2/>
    <Data3/>
    <Data2/>
    <Data3/>
    <Data2/>
    <Data2/>
    <Data3/>
    <Data3/>
    <Data2/>
    <Data3/>
    <Data2/>
    <Data2/>
    <Data3/>
    <Data3/>
    <Data2/>
    <Data3/>
    <Data2/>
    <Data2/>
    <Data3/>
    <Data3/>
    <Data2/>
    <Data3/>
    <Data2/>
    <Data2/>
    <Data3/>
    <Data3/>
</Grid>
    </Box>
  </div>
  )
}

const Data=()=>{
  return(
    <>
    <Grid container>
  <Grid item xs={4}></Grid>
  <Grid item xs={4}>
    
    <Grid container>
      <Grid item xs={6}>
        <div style={{background:'#fee2e2', marginTop:'0.2rem',width:'95%'}}>
          <Typography fontSize={"0.7rem"} style={{padding:'0.3rem'}} color={"#1e3a8a"}>Agra-BB-Synoptics</Typography>
        </div>
      </Grid>
      <Grid item xs={3}>
      
      <div style={{background:'#fee2e2', height:'4.5vh',marginTop:'0.2rem',width:'95%',padding:'0.3rem'}}>
         <div style={{background:'#fca5a5',height:'3vh',width:'90%',marginLeft:'0.2rem',border:'1px solid black'}}>
         <Typography fontSize={"0.7rem"} textAlign={"center"} color={"#1e3a8a"}>PING</Typography>
         </div>
        </div>
      </Grid>
      <Grid item xs={3}>
     
      <div style={{background:'#fee2e2', marginTop:'0.2rem',width:'100%',height:'4.5vh',}}>
          <SearchIcon style={{fontSize:'1rem',marginTop:'0.3rem',marginLeft:'0.3rem'}}/>
          <AutoGraphIcon style={{fontSize:'1rem',marginLeft:'0.2rem'}}/>
          <SearchIcon style={{fontSize:'1rem',marginLeft:'0.2rem'}}/> 
          <AccountTreeIcon style={{fontSize:'1rem',marginLeft:'0.2rem'}}/>
        </div>
      </Grid>
    </Grid>
  </Grid>
  <Grid item xs={4}></Grid>
</Grid>
    </>
  )
}

const Data2=()=>{
  return(
    <>
  <Grid container>
  <Grid item xs={4}></Grid>
  <Grid item xs={4}>
    <Grid container>
      <Grid item xs={6}>
        <div style={{background:'#fee2e2', marginTop:'0.2rem',width:'95%'}}>
          <Typography fontSize={"0.7rem"} style={{padding:'0.3rem'}} color={"#1e3a8a"}>Agra-BB-Synoptics</Typography>
        </div>
      </Grid>
      <Grid item xs={3}>
      <div style={{background:'#fee2e2', height:'4.5vh',marginTop:'0.2rem',width:'95%',padding:'0.3rem'}}>
         <div style={{background:'#fca5a5',height:'3vh',width:'90%',marginLeft:'0.2rem',border:'1px solid black'}}>
         <Typography fontSize={"0.7rem"} textAlign={"center"} color={"#1e3a8a"}>PING</Typography>
         </div>
        </div>
      </Grid>
      <Grid item xs={3}>
      <div style={{background:'#fee2e2', marginTop:'0.2rem',width:'100%',height:'4.5vh',}}>
          <SearchIcon style={{fontSize:'1rem',marginTop:'0.3rem',marginLeft:'0.3rem'}}/>
          <AutoGraphIcon style={{fontSize:'1rem',marginLeft:'0.2rem'}}/>
          <SearchIcon style={{fontSize:'1rem',marginLeft:'0.2rem'}}/> 
          <AccountTreeIcon style={{fontSize:'1rem',marginLeft:'0.2rem'}}/>
        </div>
      </Grid>
    </Grid>
  </Grid>
  <Grid item xs={4}></Grid>
</Grid>
    </>
  )
}

const Data3=()=>{
  return(
    <>
  <Grid container>
  <Grid item xs={4}></Grid>
  <Grid item xs={4}>
    <Grid container>
      <Grid item xs={6}>
        <div style={{background:'#e7e5e4', marginTop:'0.2rem',width:'95%'}}>
          <Typography fontSize={"0.7rem"} style={{padding:'0.3rem'}} color={"#1e3a8a"}>Agra-BB-Synoptics</Typography>
        </div>
      </Grid>
      <Grid item xs={3}>
      <div style={{background:'#e7e5e4', height:'4.5vh',marginTop:'0.2rem',width:'95%',padding:'0.3rem'}}>
         <div style={{background:'#86efac',height:'3vh',width:'90%',marginLeft:'0.2rem',border:'1px solid black'}}>
         <Typography fontSize={"0.7rem"} textAlign={"center"} color={"#1e3a8a"}>PING</Typography>
         </div>
        </div>
      </Grid>
      <Grid item xs={3}>
      <div style={{background:'#e7e5e4', marginTop:'0.2rem',width:'100%',height:'4.5vh',}}>
          <SearchIcon style={{fontSize:'1rem',marginTop:'0.3rem',marginLeft:'0.3rem'}}/>
          <AutoGraphIcon style={{fontSize:'1rem',marginLeft:'0.2rem'}}/>
          <SearchIcon style={{fontSize:'1rem',marginLeft:'0.2rem'}}/> 
          <AccountTreeIcon style={{fontSize:'1rem',marginLeft:'0.2rem'}}/>
        </div>
      </Grid>
    </Grid>
  </Grid>
  <Grid item xs={4}></Grid>
</Grid>
    </>
  )
}


export default HostGroupGrid
