import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography,Divider } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

const TacticalOverviewPage = () => {

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
          <Grid item xs={12}>
            <Typography fontSize={"0.9rem"} fontWeight={"bold"}>
              Tactical Status Overview
            </Typography>
            <Typography fontSize={"0.6rem"}>
              Last Updated: {currentDate} {time}
            </Typography>
            <Typography fontSize={"0.6rem"}>
              {" "}
              Updated every 90 seconds{" "}
            </Typography>
            <Typography fontSize={"0.6rem"}>
              {" "}
              Alchemy® Core™{" "}
              <span style={{ color: "#0284c7" }}>
                4.4.5 - www.alchemy.org
              </span>{" "}
            </Typography>
            <Typography fontSize={"0.6rem"}>
              {" "}
              Logged in as <i>alchemyadmin </i>{" "}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container style={{display:'flex', justifyContent:'flex-end'}}>
      <Grid item xs={4}>
        <Paper variant="outlined">
      <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',marginLeft:'0.2rem'}}> Monitoring Performance</Typography>
        </Paper>
        <Paper variant="outlined" style={{marginTop:'0.3rem'}}>
          <Grid container style={{padding:'0.55rem'}}>
            <Grid item xs={7}>
              <Typography style={{fontSize:'0.7rem',color:'#0284c7',fontWeight:'600'}}>Service Check Execution Time:</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography style={{fontSize:'0.7rem',color:'#0284c7'}}>0.00 / 31.04 / 9.639 sec</Typography>
            </Grid>

            <Grid item xs={7}>
              <Typography style={{fontSize:'0.7rem',color:'#0284c7',fontWeight:'600'}}>Service Check Latency:</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography style={{fontSize:'0.7rem',color:'#0284c7'}}>0.00 / 0.00 / 0.000 sec</Typography>
            </Grid>

            <Grid item xs={7}>
              <Typography style={{fontSize:'0.7rem',color:'#0284c7',fontWeight:'600'}}>Host Check Execution Time:</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography style={{fontSize:'0.7rem',color:'#0284c7'}}>0.03 / 30.01 / 12.636 sec</Typography>
            </Grid>

            <Grid item xs={7}>
              <Typography style={{fontSize:'0.7rem',color:'#0284c7',fontWeight:'600'}}>Host Check Latency:</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography style={{fontSize:'0.7rem',color:'#0284c7'}}>0.00 / 0.00 / 0.000 sec</Typography>
            </Grid>

            <Grid item xs={7}>
              <Typography style={{fontSize:'0.7rem',color:'#1e40af',fontWeight:'600'}}># Active Host / Service Checks:</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography style={{fontSize:'0.7rem',color:'#1e40af'}}>218 / 225</Typography>
            </Grid>
            
            <Grid item xs={7}>
              <Typography style={{fontSize:'0.7rem',color:'#1e40af',fontWeight:'600'}}># Passive Host / Service Checks:</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography style={{fontSize:'0.7rem',color:'#1e40af'}}>0 / 0</Typography>
            </Grid>


          </Grid>
        </Paper>
      </Grid>
      </Grid>

      <Box mt={2}>
        <Grid container>
          <Grid item xs={3}>
          <Paper variant="outlined">
        <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',marginLeft:'0.2rem'}}>  Network Outages</Typography>
          </Paper>
        <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',marginLeft:'0.2rem'}}>  0 Outages</Typography>
        <Divider/>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}>
          <Paper variant="outlined">
        <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem'}}>  Network Outages</Typography>
          </Paper>
          <Grid container style={{paddingLeft:'1rem',marginTop:'0.5rem',alignItems:'center'}}>
            <Grid item xs={5}>
              <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Host Health :</Typography>
            </Grid>
            <Grid item xs={6.5}>
              <Paper elevation={0} style={{padding:'0.2rem',background:'gray',}}>
                <Paper variant="outlined" style={{padding:'0.6rem',width:'60%',background:'#ef4444',border:'1px solid black'}}>
                </Paper>
              </Paper>
            </Grid>
          </Grid>

          <Grid container style={{paddingLeft:'1rem',marginTop:'0.5rem',alignItems:'center'}}>
            <Grid item xs={5}>
              <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Service Health :</Typography>
            </Grid>
            <Grid item xs={6.5}>
              <Paper elevation={0} style={{padding:'0.2rem',background:'gray',}}>
                <Paper variant="outlined" style={{padding:'0.6rem',width:'40%',background:'#ef4444',border:'1px solid black'}}>
                </Paper>
              </Paper>
            </Grid>
          </Grid>

          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container>
          <Grid item xs={6}>
          <Paper variant="outlined">
              <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',marginLeft:'0.2rem'}}>  Network Outages</Typography>
                </Paper>
          </Grid>
        </Grid>
        <Grid container>
         <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
            <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',marginLeft:'0.2rem'}}> 56 Down</Typography>
              <Divider/>
              <Box style={{background:'#0284c7',marginTop:'0.5rem',width:'80%',height:'5.5vh',marginLeft:'1rem'}}>
                <Typography style={{fontSize:'0.7rem',color:'#bae6fd',marginLeft:'0.5rem'}}>56 Unhandled</Typography>
                <Typography style={{fontSize:'0.7rem',color:'#bae6fd',marginLeft:'0.5rem'}}>Problems</Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
            <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',marginLeft:'0.2rem'}}>  0 Unreachable</Typography>
              <Divider/>
            </Grid>
            <Grid item xs={3}>
            <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',marginLeft:'0.2rem'}}>  162 Up</Typography>
              <Divider/>
            </Grid>
            <Grid item xs={3}>
            <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',marginLeft:'0.2rem'}}> 	0 Pending</Typography>
              <Divider/>
            </Grid>

          </Grid>
         </Grid>
        </Grid>
      </Box>

      <Box style={{marginTop:'0.7rem'}}>
        <Grid container>
          <Grid item xs={7.7}>
          <Paper variant="outlined">
              <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',marginLeft:'0.2rem'}}>Services</Typography>
                </Paper>
          </Grid>
        </Grid>
        <Grid container>
         <Grid item xs={8}>
          <Grid container spacing={1}>
            <Grid item xs={2.4}>
            <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',}}> 103 Critical</Typography>
              <Divider/>
              <Box style={{background:'#0284c7',marginTop:'0.5rem',width:'80%',height:'5.5vh',marginLeft:'1rem'}}>
                <Typography style={{fontSize:'0.7rem',color:'#bae6fd',marginLeft:'0.5rem'}}>56 Unhandled</Typography>
                <Typography style={{fontSize:'0.7rem',color:'#bae6fd',marginLeft:'0.5rem'}}>Problems</Typography>
              </Box>
              <Box style={{background:'#38bdf8',marginTop:'0.5rem',width:'80%',height:'5.5vh',marginLeft:'1rem'}}>
                <Typography style={{fontSize:'0.7rem',color:'#0369a1',marginLeft:'0.5rem'}}>55 on Problem</Typography>
                <Typography style={{fontSize:'0.7rem',color:'#0369a1',marginLeft:'0.5rem'}}>Hosts</Typography>
              </Box>
            </Grid>
            <Grid item xs={2.3}>
            <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',}}>6 Warning</Typography>
              <Divider/>
              <Box style={{background:'#0284c7',marginTop:'0.5rem',width:'80%',height:'5.5vh',marginLeft:'1rem'}}>
                <Typography style={{fontSize:'0.7rem',color:'#bae6fd',marginLeft:'0.5rem'}}>8 Unhandled</Typography>
                <Typography style={{fontSize:'0.7rem',color:'#bae6fd',marginLeft:'0.5rem'}}>Problems</Typography>
              </Box>
            </Grid>
            <Grid item xs={2.3}>
            <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',}}>0 Unknown</Typography>
              <Divider/>
            </Grid>
            <Grid item xs={2.3}>
            <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',}}>117 Ok</Typography>
              <Divider/>
            </Grid>
            <Grid item xs={2.3}>
            <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',}}>0 Pending</Typography>
              <Divider/>
            </Grid>

          </Grid>
         </Grid>
        </Grid>
      </Box>

      <Box style={{marginTop:'0.7rem'}}>
        <Grid container>
          <Grid item xs={9.87}>
          <Paper variant="outlined">
              <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',marginLeft:'0.2rem'}}>Monitoring Features</Typography>
                </Paper>
          </Grid>
        </Grid>
        <Grid container>
         <Grid item xs={10}>
          <Grid container spacing={1}>
            <Grid item xs={2.4}>
            <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',}}> Flap Detection</Typography>
              <Divider/>
              <Grid style={{display:'flex',alignItems:'center'}}>
              <DoneIcon style={{color:"#84cc16"}}/>
              <Box style={{background:'#84cc16',marginTop:'0.3rem',width:'73%',height:'5.5vh',marginLeft:'0.5rem',border:'1px solid black'}}>
                <Typography style={{fontSize:'0.65rem',color:'black',marginLeft:'0.3rem'}}>All Services</Typography>
                <Typography style={{fontSize:'0.65rem',color:'black',marginLeft:'0.3rem'}}>Enabled</Typography>
              </Box>
              </Grid>
              <Box style={{background:'#f87171',marginTop:'0.2rem',width:'73%',height:'5.8vh',marginLeft:'2rem',border:'1px solid black'}}>
                <Typography style={{fontSize:'0.65rem',color:'#0369a1',marginLeft:'0.3rem'}}>14 Services</Typography>
                <Typography style={{fontSize:'0.65rem',color:'#0369a1',marginLeft:'0.3rem'}}>Flapping</Typography>
              </Box>

              <Box style={{background:'#84cc16',marginTop:'0.2rem',width:'73%',marginLeft:'2rem',border:'1px solid black'}}>
                <Typography style={{fontSize:'0.65rem',color:'black',marginLeft:'0.3rem'}}>All Host Enabled</Typography>
              </Box>
              <Box style={{background:'#f87171',marginTop:'0.2rem',width:'73%',marginLeft:'2rem',border:'1px solid black'}}>
                <Typography style={{fontSize:'0.65rem',color:'#0369a1',marginLeft:'0.5rem'}}>3 Host Flapping</Typography>
              </Box>
            </Grid>

            <Grid item xs={2.4}>
              <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',}}> Notifications</Typography>
                <Divider/>
                <Grid style={{display:'flex',alignItems:'center'}}>
                <DoneIcon style={{color:"#84cc16"}}/>
                <Box style={{background:'#f87171',marginTop:'0.2rem',width:'73%',height:'3.4vh',marginLeft:'0.5rem',border:'1px solid black'}}>
                  <Typography style={{fontSize:'0.65rem',color:'#0369a1',marginLeft:'0.3rem'}}>1 Services Disabled</Typography>
                </Box>
                </Grid>
                <Box style={{background:'#84cc16',marginTop:'0.2rem',width:'73%',height:'3.4vh',marginLeft:'2rem',border:'1px solid black'}}>
                  <Typography style={{fontSize:'0.65rem',color:'black',marginLeft:'0.3rem'}}>All Host Enabled</Typography>
                </Box>
            </Grid>
            <Grid item xs={2.4}>
            <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',}}> Event Handler</Typography>
              <Divider/>
              <Grid style={{display:'flex',alignItems:'center'}}>
              <DoneIcon style={{color:"#84cc16"}}/>
              <Box style={{background:'#84cc16',marginTop:'0.2rem',width:'73%',height:'3.4vh',marginLeft:'0.5rem',border:'1px solid black'}}>
                <Typography style={{fontSize:'0.65rem',color:'black',marginLeft:'0.3rem'}}>All Services Enabled</Typography>
              </Box>
              </Grid>
              <Box style={{background:'#84cc16',marginTop:'0.2rem',width:'73%',height:'3.4vh',marginLeft:'2rem',border:'1px solid black'}}>
                <Typography style={{fontSize:'0.65rem',color:'black',marginLeft:'0.3rem'}}>All Host Enabled</Typography>
              </Box>
            </Grid>
            <Grid item xs={2.4}>
            <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',}}> Active Check</Typography>
              <Divider/>
              <Grid style={{display:'flex',alignItems:'center'}}>
              <DoneIcon style={{color:"#84cc16"}}/>
              <Box style={{background:'#84cc16',marginTop:'0.2rem',width:'73%',height:'3.4vh',marginLeft:'0.5rem',border:'1px solid black'}}>
                <Typography style={{fontSize:'0.65rem',color:'black',marginLeft:'0.3rem'}}>All Services Enabled</Typography>
              </Box>
              </Grid>
              <Box style={{background:'#84cc16',marginTop:'0.2rem',width:'73%',height:'3.4vh',marginLeft:'2rem',border:'1px solid black'}}>
                <Typography style={{fontSize:'0.65rem',color:'black',marginLeft:'0.3rem'}}>All Host Enabled</Typography>
              </Box>
            </Grid>
            <Grid item xs={2.4}>
            <Typography style={{padding:'0.3rem',fontWeight:'550',fontSize:'0.85rem',}}> Passive Check</Typography>
              <Divider/>
              <Grid style={{display:'flex',alignItems:'center'}}>
              <DoneIcon style={{color:"#84cc16"}}/>
              <Box style={{background:'#84cc16',marginTop:'0.2rem',width:'73%',height:'3.4vh',marginLeft:'0.5rem',border:'1px solid black'}}>
                <Typography style={{fontSize:'0.65rem',color:'black',marginLeft:'0.3rem'}}>All Services Enabled</Typography>
              </Box>
              </Grid>
              <Box style={{background:'#84cc16',marginTop:'0.2rem',width:'73%',height:'3.4vh',marginLeft:'2rem',border:'1px solid black'}}>
                <Typography style={{fontSize:'0.65rem',color:'black',marginLeft:'0.3rem'}}>All Host Enabled</Typography>
              </Box>
            </Grid>

          </Grid>
         </Grid>
        </Grid>
      </Box>

    </div>
  );
};

export default TacticalOverviewPage;
