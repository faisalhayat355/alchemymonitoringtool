import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import CreateReportHistogramLegacyPage from './CreateReportHistogramLegacyPage';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
const ReportsHistogramLegacyPopupStep2 = ({handleCloseStep2,modalStep2}:any) => {

  const [report, setReport] = React.useState(false);

  const handleClickOpenReport = () => {
    setReport(true);
  };
  const handleCloseReport = () => {
    setReport(false);
  }; 
  return (
    <div>
     <Box>
        <Grid container>
            <Grid item xs={12}>
                <Dialog open={modalStep2} 
                // TransitionComponent={Transition} 
                keepMounted aria-describedby="alert-dialog-slide-description" >
                    <div style={{height:'70vh',width:'92vh',marginTop:'0.3rem'}}>
                     <Grid container sx={{display:'flex',alignItems:'center'}}>
                     <Grid item xs={1.5} style={{paddingLeft:'0.5rem'}}>
                      <IconButton onClick={handleCloseStep2}  >
                        <ArrowBackIcon/>
                      </IconButton>
                     </Grid>
                    <Grid item xs={10.5} mt={2}>
                    <Typography fontSize={'1rem'} fontWeight={"bold"} textAlign={"center"}>Step 3: Select Report Options</Typography>
                    </Grid>
                     </Grid>

                  <Grid item xs={10} mt={2}>
                   <Grid container sx={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                    <Grid item xs={2.4}>
                        <Typography fontSize={"0.8rem"}>Report period:	</Typography>
                    </Grid>
                    <Grid item xs={5} >
                    <select style={{width:'117%'}}>
                        <option>Today</option>
                        <option>Last 24 Hours</option>
                        <option>Yesterday</option>
                        <option>This Week</option>
                        <option>Last 7 Days</option>
                        <option>Last Week</option>
                        <option>This Month</option>
                        <option>Last 31 Days</option>
                        <option>Last Month</option>
                        <option>This Year</option>
                        <option>Last Year</option>
                        <option>* CUSTOM REPORT PERIOD *</option>
                    </select>
                    </Grid>
                   </Grid>
                    </Grid>
                    <Grid item xs={10} mt={0.5}>
                   <Grid container sx={{display:'flex',justifyContent:'flex-end'}}>
                    <Grid item xs={7.4}>
                        <Typography fontSize={"0.8rem"}>If Custom Report Period...</Typography>
                    </Grid>
                   </Grid>
                    </Grid>
                    <Box>
                      <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={2.7}>
                          <Typography fontSize={"0.8rem"}>Start Date (Inclusive):</Typography>
                        </Grid>
                        <Grid item xs={1.7}>
                        <select>
                          <option>January</option>
                          <option>February</option>
                          <option>March</option>
                          <option>April</option>
                          <option>May</option>
                          <option>June</option>
                          <option>July</option>
                          <option>August</option>
                          <option>September</option>
                          <option>October</option>
                          <option>November</option>
                          <option>December</option>
                        </select>
                        </Grid>
                        <Grid item xs={0.7}  ml={1}>
                        <input value={1} style={{width:'90%',marginLeft:'0.1rem',height:'3vh'}}/>
                        </Grid>
                        <Grid item xs={2}>
                        <input value={2023} style={{width:'69%',marginLeft:'0.1rem',height:'3vh'}}/>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={2.7}>
                          <Typography fontSize={"0.8rem"}>Start Date (Inclusive):</Typography>
                        </Grid>
                        <Grid item xs={1.7}>
                        <select>
                          <option>November</option>
                          <option>Service</option>
                        </select>
                        </Grid>
                        <Grid item xs={0.7}  ml={1}>
                        <input value={1} style={{width:'90%',marginLeft:'0.1rem',height:'3vh'}}/>
                        </Grid>
                        <Grid item xs={2}>
                        <input value={2023} style={{width:'69%',marginLeft:'0.1rem',height:'3vh'}}/>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={2.7}>
                          <Typography fontSize={"0.8rem"}>Assume Initial States:	</Typography>
                        </Grid>
                        <Grid item xs={1.7}>
                        <select style={{width:'104%'}}>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={3.6}></Grid>
                        <Grid item xs={3.1}>
                          <Typography fontSize={"0.8rem"}>Assume State Retention:	</Typography>
                        </Grid>
                        <Grid item xs={1.7}>
                        <select style={{width:'104%'}}>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={1.5}></Grid>
                        <Grid item xs={5.2}>
                          <Typography fontSize={"0.8rem"}>Assume States During Program Downtime:</Typography>
                        </Grid>
                        <Grid item xs={1.7}>
                        <select style={{width:'104%'}}>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={4.3}></Grid>
                        <Grid item xs={2.4}>
                          <Typography fontSize={"0.8rem"}>Include Soft States:</Typography>
                        </Grid>
                        <Grid item xs={1.7}>
                        <select style={{width:'104%'}}>
                          <option>No</option>
                          <option>Yes</option>
                        </select>
                      </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={3.4}></Grid>
                        <Grid item xs={3.3}>
                          <Typography fontSize={"0.8rem"}>First Assumed Host State:	</Typography>
                        </Grid>
                        <Grid item xs={2.4}>
                        <select style={{width:'104%'}}>
                          <option>Unspecified</option>
                          <option>Current State</option>
                          <option>Host Up</option>
                          <option>Host Down</option>
                          <option>Host Unreachable</option>
                        </select>
                      </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={0.7}></Grid>
                        <Grid item xs={6}>
                          <Typography fontSize={"0.8rem"}>Backtracked Archives (To Scan For Initial States):	</Typography>
                        </Grid>
                        <Grid item xs={1.7}>
                        <input type='text' value={4} style={{width:'104%'}}/>
                      </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={3.9}></Grid>
                        <Grid item xs={2.7}>
                          <Typography fontSize={"0.8rem"}>Suppress image map:</Typography>
                        </Grid>
                        <Grid item xs={0.5}>
                        <input type='checkbox'/>
                      </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={4.35}></Grid>
                        <Grid item xs={2.25}>
                          <Typography fontSize={"0.8rem"}>Suppress popups:</Typography>
                        </Grid>
                        <Grid item xs={0.5}>
                        <input type='checkbox'/>
                      </Grid>
                      </Grid>
                    </Box>
                    <Grid container sx={{display:'flex',justifyContent:'flex-end'}} mt={2}>
                        <Grid item xs={6.8}>
                            <button onClick={handleClickOpenReport}>Create Report</button>
                        </Grid>
                    </Grid>
                    </div>
                </Dialog>
            </Grid>
        </Grid>
        <CreateReportHistogramLegacyPage report={report} handleCloseReport={handleCloseReport}/>
     </Box>
    </div>
  )
}

export default ReportsHistogramLegacyPopupStep2
