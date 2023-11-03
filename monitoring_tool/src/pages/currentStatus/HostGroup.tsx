import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Divider, Grid, Typography } from "@mui/material";

const HostGroup = () => {
  const time = new Date().toLocaleTimeString();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return (
<div>
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
      <Typography fontWeight={"bold"} textAlign={"center"}>Service Overview For All Host Groups</Typography>
    </Grid>
  <Grid container>
    <Grid item xs={3.5}>
      <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Network (Broadband)</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Network (Fortigate)</Typography>
    </Grid>
    <Grid item xs={2.5}>
      <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Linux Servers (linux-servers)</Typography>
    </Grid>
  </Grid>
   <Grid style={{height:'62vh',overflowY:'scroll'}}>
   <Box>
    <Grid container>
      <Grid item xs={3.3} sx={{display:'flex'}}>
        <Grid item xs={4.5}>
          <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Host</Typography>
          <Divider style={{width:'80%'}}/>
            <div style={{background:'#fecaca',marginTop:'0.5rem',width:'97.6%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <Typography fontSize={"0.65rem"} style={{marginLeft:'0.2rem',color:'#1e3a8a'}}>Agra-BB-Synoptics</Typography>
            </div>
        </Grid>
        <Grid item xs={2}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Status</Typography>
        <Divider style={{width:'80%'}}/>
        <div style={{background:'#fecaca',marginTop:'0.5rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
        <Typography fontSize={"0.7rem"} style={{marginLeft:'0.5rem'}}>DOWN</Typography>
        </div>
        </Grid>
        <Grid item xs={2.5}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Services</Typography>
        <Divider style={{width:'80%'}}/>
        <div style={{background:'#fecaca',marginTop:'0.5rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
       <div style={{background:'#f87171',height:'5.5vh',marginLeft:'0.2rem',marginRight:'0.1rem',width:'90%',border:'1px solid black'}}>
       <Typography fontSize={"0.7rem"} style={{color:'#1e3a8a'}} textAlign={"center"}>1 CRITICAL</Typography>
       </div>
        </div>
        </Grid>
        <Grid item xs={3}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Actions</Typography>
        <Divider style={{width:'99%'}}/>
        <div style={{background:'#fecaca',marginTop:'0.5rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <SearchIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <AutoGraphIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <SearchIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <AccountTreeIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
        </div>
        </Grid>
      </Grid>
      <Grid item xs={6} sx={{display:'flex'}}>
      <Grid item xs={6.5}>
          <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Host</Typography>
          <Divider style={{width:'99%'}}/>
          <div style={{background:'#e7e5e4',marginTop:'0.5rem',width:'99%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <Typography fontSize={"0.65rem"} style={{marginLeft:'0.2rem',color:'#1e3a8a'}}>AIRTEL-13921609-KolkataZO</Typography>
          </div>
        </Grid>
        <Grid item xs={1}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Status</Typography>
        <Divider style={{width:'95%'}}/>
        <div style={{background:'#bee8ba',marginTop:'0.5rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
        <Typography fontSize={"0.65rem"} style={{marginLeft:'0.5rem'}}>UP</Typography>
        </div>
        </Grid>
        <Grid item xs={2.5}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Services</Typography>
        <Divider style={{width:'98%'}}/>
        <div style={{background:'#e7e5e4',marginTop:'0.5rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
       <div style={{background:'#f87171',height:'3.5vh',marginLeft:'0.2rem',marginRight:'0.1rem',width:'90%',border:'1px solid black'}}>
       <Typography fontSize={"0.7rem"} style={{color:'#1e3a8a'}} textAlign={"center"}>1 CRITICAL</Typography>
       </div>
        </div>
        </Grid>
        <Grid item xs={2}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Actions</Typography>
        <Divider style={{width:'95%'}}/>
        <div style={{background:'#e7e5e4',marginTop:'0.5rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <SearchIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <AutoGraphIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <SearchIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <AccountTreeIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
        </div>
        </Grid>
      </Grid>
      <Grid item xs={2.5} sx={{display:'flex'}}>
      <Grid item xs={3.5}>
          <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Host</Typography>
          <Divider style={{width:'80%'}}/>
          <div style={{background:'#e7e5e4',marginTop:'0.5rem',width:'99%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <Typography fontSize={"0.65rem"} style={{marginLeft:'0.2rem',color:'#1e3a8a'}}>localhost</Typography>
          </div>
        </Grid>
        <Grid item xs={2.5}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Status</Typography>
        <Divider style={{width:'80%'}}/>
        <div style={{background:'#bee8ba',marginTop:'0.5rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
        <Typography fontSize={"0.65rem"} style={{marginLeft:'0.5rem'}}>UP</Typography>
        </div>
        </Grid>
        <Grid item xs={3}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Services</Typography>
        <Divider style={{width:'93%'}}/>
        <div style={{background:'#fecaca',marginTop:'0.5rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
       <div style={{background:'#bee8ba',height:'3vh',marginLeft:'0.2rem',marginRight:'0.1rem',width:'90%',border:'1px solid black'}}>
       <Typography fontSize={"0.7rem"} style={{color:'#1e3a8a'}} textAlign={"center"}>8 OK</Typography>
       </div>
        </div>
        
        </Grid>
        <Grid item xs={3.3}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Actions</Typography>
        <Divider style={{width:'112%'}}/>
        <div style={{background:'#fecaca',marginTop:'0.5rem',width:'112%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <SearchIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <AutoGraphIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <SearchIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <AccountTreeIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
        </div>
        </Grid>
      </Grid>
    </Grid>
   </Box>
   <Data/>
   <Data2/>
   <Data/>
   <Data/>
   <Data2/>
   <Data/>
   <Data/>
   <Data/>
   <Data2/>
   <Data2/>
   <Data2/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data2/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data2/>
   <Data/>
   <Data/>
   <Data/>
   <Data2/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data2/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data2/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   <Data/>
   </Grid>
</div>
  )
}

const Data=()=>{
  return(
    <>
      <Grid container>
      <Grid item xs={3.3} sx={{display:'flex'}}>
        <Grid item xs={4.5}>
            <div style={{background:'#fecaca',marginTop:'0.15rem',width:'97.6%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <Typography fontSize={"0.65rem"} style={{marginLeft:'0.2rem',color:'#1e3a8a'}}>Agra-BB-Synoptics</Typography>
            </div>
        </Grid>
        <Grid item xs={2}>
            <div style={{background:'#fecaca',marginTop:'0.15rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <Typography fontSize={"0.7rem"} style={{marginLeft:'0.5rem'}}>DOWN</Typography>
            </div>
        </Grid>
        <Grid item xs={2.5}>
            <div style={{background:'#fecaca',marginTop:'0.15rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <div style={{background:'#f87171',height:'5.5vh',marginLeft:'0.2rem',marginRight:'0.1rem',width:'90%',border:'1px solid black'}}>
            <Typography fontSize={"0.7rem"} style={{color:'#1e3a8a'}} textAlign={"center"}>1 CRITICAL</Typography>
            </div>
            </div>
        </Grid>
        <Grid item xs={3}>
            <div style={{background:'#fecaca',marginTop:'0.15rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
                <SearchIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
                <AutoGraphIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
                <SearchIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
                <AccountTreeIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            </div>
        </Grid>
      </Grid>
      <Grid item xs={6} sx={{display:'flex'}}>
      <Grid item xs={6.5}>
          <div style={{background:'#e7e5e4',marginTop:'0.15rem',width:'99%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <Typography fontSize={"0.65rem"} style={{marginLeft:'0.2rem',color:'#1e3a8a'}}>AIRTEL-13921609-KolkataZO</Typography>
          </div>
        </Grid>
        <Grid item xs={1}>
          <div style={{background:'#bee8ba',marginTop:'0.15rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
          <Typography fontSize={"0.65rem"} style={{marginLeft:'0.5rem'}}>UP</Typography>
          </div>
        </Grid>
        <Grid item xs={2.5}>
          <div style={{background:'#e7e5e4',marginTop:'0.15rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
          <div style={{background:'#f87171',height:'3.5vh',marginLeft:'0.2rem',marginRight:'0.1rem',width:'90%',border:'1px solid black'}}>
          <Typography fontSize={"0.7rem"} style={{color:'#1e3a8a'}} textAlign={"center"}>1 CRITICAL</Typography>
          </div>
          </div>
        
        </Grid>
        <Grid item xs={2}>
        <div style={{background:'#e7e5e4',marginTop:'0.15rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <SearchIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <AutoGraphIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <SearchIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <AccountTreeIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
        </div>
        </Grid>
      </Grid>
      </Grid>
    </>
  )
}

const Data2=()=>{
  return(
    <>
      <Grid container>
      <Grid item xs={3.3} sx={{display:'flex'}}>
        <Grid item xs={4.5}>
            <div style={{background:'#e5e7eb',marginTop:'0.15rem',width:'97.6%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <Typography fontSize={"0.65rem"} style={{marginLeft:'0.2rem',color:'#1e3a8a'}}>Agra-BB-Synoptics</Typography>
            </div>
        </Grid>
        <Grid item xs={2}>
        <div style={{background:'#fecaca',marginTop:'0.15rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
        <Typography fontSize={"0.7rem"} style={{marginLeft:'0.5rem'}}>DOWN</Typography>
        </div>
        </Grid>
        <Grid item xs={2.5}>
        <div style={{background:'#fecaca',marginTop:'0.15rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
       <div style={{background:'#f87171',height:'5.5vh',marginLeft:'0.2rem',marginRight:'0.1rem',width:'90%',border:'1px solid black'}}>
       <Typography fontSize={"0.7rem"} style={{color:'#1e3a8a'}} textAlign={"center"}>1 CRITICAL</Typography>
       </div>
        </div>
        </Grid>
        <Grid item xs={3}>
        <div style={{background:'#fecaca',marginTop:'0.15rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <SearchIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <AutoGraphIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <SearchIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <AccountTreeIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
        </div>
        </Grid>
      </Grid>
      <Grid item xs={6} sx={{display:'flex'}}>
        <Grid item xs={6.5}>
          <div style={{background:'#e5e7eb',marginTop:'0.15rem',width:'99%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <Typography fontSize={"0.65rem"} style={{marginLeft:'0.2rem',color:'#1e3a8a'}}>AIRTEL-13921609-KolkataZO</Typography>
          </div>
        </Grid>
        <Grid item xs={1}>
          <div style={{background:'#bee8ba',marginTop:'0.15rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
          <Typography fontSize={"0.65rem"} style={{marginLeft:'0.5rem'}}>UP</Typography>
          </div>
        </Grid>
        <Grid item xs={2.5}>
          <div style={{background:'#e7e5e4',marginTop:'0.15rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <div style={{background:'#fffb00',height:'3.5vh',marginLeft:'0.2rem',marginRight:'0.1rem',width:'90%',border:'1px solid black'}}>
            <Typography fontSize={"0.7rem"} style={{color:'#1e3a8a'}} textAlign={"center"}>1 WARNING</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
        <div style={{background:'#e7e5e4',marginTop:'0.15rem',width:'95%',height:'6.5vh',display:'flex',alignItems:'center'}}>
            <SearchIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <AutoGraphIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <SearchIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
            <AccountTreeIcon style={{fontSize:'1rem', cursor:'pointer',color:'#334155'}}/>
        </div>
        </Grid>
      </Grid>
    </Grid>
    </>
  )
}


export default HostGroup
