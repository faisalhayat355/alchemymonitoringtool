import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, Grid, Typography,Link,IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Chart } from "react-google-charts";


export const data = [
    [
      { type: "number", label: "x" },
      { type: "number", label: "values" },
      { id: "i0", type: "number", role: "interval" },
      { id: "i1", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
    ],
    [1, 100, 90, 110, 85, 96, 104, 120],
    [2, 120, 95, 130, 90, 113, 124, 140],
    [3, 130, 105, 140, 100, 117, 133, 139],
    [4, 90, 85, 95, 85, 88, 92, 95],
    [5, 70, 74, 63, 67, 69, 70, 72],
    [6, 30, 39, 22, 21, 28, 34, 40],
    [7, 80, 77, 83, 70, 77, 85, 90],
    [8, 100, 90, 110, 85, 95, 102, 110],
  ];
  
  export const options = {
    curveType: "function",
    intervals: { color: "series-color" },
    interval: {
      i0: {
        color: "#4374E0",
        style: "bars",
        barWidth: 0,
        lineWidth: 4,
        pointSize: 10,
        fillOpacity: 1,
      },
      i1: {
        color: "#E49307",
        style: "bars",
        barWidth: 0,
        lineWidth: 4,
        pointSize: 10,
        fillOpacity: 1,
      },
      i2: { style: "area", curveType: "function", fillOpacity: 0.3 },
    },
    legend: "none",
  };
  


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateReportPage = ({report,handleCloseReport}:any) => {
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
        TransitionComponent={Transition}
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
            <Typography fontSize={'0.7rem'} textAlign={'center'}>State History For Host 'TATA-091PATN723013251880-Patna'</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography fontSize={'0.7rem'} textAlign={'center'}>Thu Nov 2 15:03:40 2023 to Thu Nov 2 15:03:40 2023</Typography>
        </Grid>
    </Grid>
    </Box>

    <Box>
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={0.6}>
            </Grid>
            <Grid item xs={9}>
            <Chart chartType="LineChart" width="100%" height="330px"data={data} options={options}/>
            </Grid>
            <Grid item xs={1}>   
            </Grid>
        </Grid>
    </Box>

      </Box>
     </Grid>
      </Dialog>
    </div>
  )
}

export default CreateReportPage
