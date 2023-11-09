import React from "react";
import ApartmentIcon from '@mui/icons-material/Apartment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Divider, Grid, IconButton, Link, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CreateReportAvailabilityPage = ({report,handleCloseReport}:any) => {
    const time = new Date().toLocaleTimeString();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
  return (
    <div>
      <Dialog
        open={report}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseReport}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "100rem",
              marginLeft: "16rem",
             height: "110vh",
            }
          }
        }}
      >
     <Grid >
     <Box>
      <Grid container>
        <Grid item xs={0.5} sx={{paddingLeft:'0.2rem'}}>
        <IconButton onClick={handleCloseReport}>
                <ArrowBackIcon/>
            </IconButton>
        </Grid>
      <Grid item xs={3.5} mt={1}>
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Host State Trends</Typography>
          <Typography fontSize={"0.7rem"}>
            Last Updated: {currentDate} {time}
          </Typography>
          <Typography fontSize={"0.7rem"}>Alchemy® Core™
            <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
          </Typography>
          <Typography fontSize={"0.7rem"}>Logged in as <i>alchemyadmin </i></Typography>

          <Link href="#" underline="hover">
          <Typography fontSize={"0.7rem"} mt={2}>View Availability Report For This Host</Typography>
          </Link>
          <Link href="#" underline="hover">
          <Typography fontSize={"0.7rem"}>View Alert Histogram For This Host</Typography>
          </Link>
          <Link href="#" underline="hover">
          <Typography fontSize={"0.7rem"}>View Status Detail For This Host</Typography>
          </Link>
          <Link href="#" underline="hover">
          <Typography fontSize={"0.7rem"}>View Alert History For This Host</Typography>
          </Link>
          <Link href="#" underline="hover">
          <Typography fontSize={"0.7rem"}>View Notifications For This Host</Typography>
          </Link>
      </Grid>

      <Grid item xs={4.5} mt={1}>
        <Grid container>
            <Grid item xs={9}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"} textAlign={"center"}>Host 'TATA-091PATN723013251880-Patna'</Typography>
            </Grid>
            <Grid item xs={10} sx={{display:'flex',justifyContent:'space-around'}}> <ApartmentIcon style={{color:'#9fb833'}}/></Grid>
            <Grid item xs={12}>
                <Typography fontSize={"0.9rem"}>{currentDate} to {time} {currentDate} to {time}</Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography fontSize={"0.7rem"} textAlign={"center"}>Duration: 7d 0h 0m 0s</Typography>
            </Grid>
        </Grid>         
      </Grid>
      <Grid item xs={3.5} mt={1}>
            <Grid container>
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <Typography fontSize={"0.8rem"}>First assumed host state:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <select>
                        <option>Unspecified</option>
                        <option>Current State</option>
                        <option>Host Up</option>
                        <option>Host Down</option>
                        <option>Host Unreachable</option>
                    </select>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography fontSize={"0.8rem"}>Report period:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <select style={{width:'86%'}}>
                        <option>Today</option>
                        <option>Last 24 Hours</option>
                        <option>Yesterday</option>
                        <option>This Week</option>
                        <option>Last 7 Days </option>
                        <option>Last Week</option>
                        <option>This Month</option>
                        <option>Last 31 Days</option>
                        <option>Last Month</option>
                        <option>This Year</option>
                        <option>Last Year</option>
                        <option>Next Host Problem</option>
                    </select>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <Typography fontSize={"0.8rem"} textAlign={"center"}>Backtracked archives:</Typography>
                    </Grid>
                    <Grid item xs={8.4} sx={{display:'flex',justifyContent:'space-around'}}>
                    <input type="text" value={4} style={{width:'73%'}}/>
                    </Grid>
                    <Grid item xs={8.2}>
                        <Typography fontSize={"0.8rem"} textAlign={"center"}>Zoom factor:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{display:'flex',justifyContent:'flex-end',marginLeft:'1rem'}}>
                    <select style={{width:'100%'}}>
                        <option>4</option>  
                    </select>
                    </Grid>

                    <Grid item xs={10.8} mt={2} sx={{display:'flex',justifyContent:'flex-end'}}>
                    <button>Update</button>
                    </Grid>

                </Grid>
            </Grid>
      </Grid>
    </Grid>
    <Box>
    <Grid container>
        <Grid item xs={12}>
            <Typography fontSize={'1rem'} fontWeight={"bold"} textAlign={'center'}>Hostgroup 'Broadband' Host State Breakdowns:</Typography>
        </Grid>
    </Grid>
    </Box>

    <Box>
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={0.6}>
            </Grid>
            <Grid item xs={9}>
              <Header/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
            </Grid>
            <Grid item xs={1}>   
            </Grid>
        </Grid>
    </Box>


    <Box mt={2}>
    <Grid container>
        <Grid item xs={12}>
            <Typography fontSize={'1rem'} fontWeight={"bold"} textAlign={'center'}>Hostgroup 'Fortigate' Host State Breakdowns:</Typography>
        </Grid>
    </Grid>
    </Box>
    <Box>
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={0.3}>
            </Grid>
            <Grid item xs={9.7}>
              <Header/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
            </Grid>
        </Grid>
    </Box>


    <Box mt={2}>
    <Grid container>
        <Grid item xs={12}>
            <Typography fontSize={'1rem'} fontWeight={"bold"} textAlign={'center'}>Hostgroup 'linux-servers' Host State Breakdowns:</Typography>
        </Grid>
    </Grid>
    </Box>
    <Box>
        <Grid container>
         
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
              <Header/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
              <BodyData/>
            </Grid>
        </Grid>
    </Box>


      </Box>
     </Grid>
      </Dialog>
    </div>
  )
}

const Header=()=>{
  return(
    <>
    <Box>
    <Grid container>
      <Grid item xs={2.5}>
        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Host</Typography>
        <Divider style={{width:'99%'}}/>
      </Grid>
      <Grid item xs={2.3}>
      <Typography fontSize={"0.8rem"} fontWeight={"bold"}>% Time Up</Typography>
      <Divider style={{width:'99%'}}/>
      </Grid>
      <Grid item xs={2.3}>
      <Typography fontSize={"0.8rem"} fontWeight={"bold"}>% Time Down</Typography>
      <Divider style={{width:'99%'}}/>
      </Grid>
      <Grid item xs={2.5}>
      <Typography fontSize={"0.8rem"} fontWeight={"bold"}>% Time Unreachable</Typography>
      <Divider style={{width:'98.5%'}}/>
      </Grid>
      <Grid item xs={2.3}>
      <Typography fontSize={"0.8rem"} fontWeight={"bold"}>% Time Undetermined</Typography>
      <Divider style={{width:'100%'}}/>
      </Grid>
    </Grid>
    </Box>
    </>
  )
}

const BodyData=()=>{
  return(
    <>
    <Box>
    <Grid container mt={0.5}>
      <Grid item xs={2.5}>
        <Typography fontSize={"0.65rem"} sx={{background:"#dbdbdb", width:'99%',paddingLeft:'0.2rem'}}>Agra-BB-Synoptics</Typography>
      </Grid>
      <Grid item xs={2.3}>
      <Typography fontSize={"0.65rem"} sx={{background:"#a6ffad", width:'99%',paddingLeft:'0.2rem'}}>0.000% (0.000%)</Typography>
      </Grid>
      <Grid item xs={2.3}>
      <Typography fontSize={"0.65rem"} sx={{background:"#ff9cee", width:'99%',paddingLeft:'0.2rem'}}>100.000% (100.000%)</Typography>
      </Grid>
      <Grid item xs={2.5}>
      <Typography fontSize={"0.65rem"} sx={{background:"#ffbd96", width:'98.3%',paddingLeft:'0.2rem'}}>0.000% (0.000%)</Typography>
      </Grid>
      <Grid item xs={2.3}>
      <Typography fontSize={"0.65rem"} sx={{background:"#dbdbdb", width:'100%',paddingLeft:'0.2rem'}}>	0.000%</Typography>
      </Grid>
    </Grid>
    </Box>
    </>
  )
}

export default CreateReportAvailabilityPage
