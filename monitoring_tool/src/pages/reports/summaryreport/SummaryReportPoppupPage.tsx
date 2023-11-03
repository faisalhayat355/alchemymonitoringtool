import { Box, Grid, Paper, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '51%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width: 1033,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const SummaryReportPoppupPage = ({open,handleOpen,handleClose}:any) => {
    const time = new Date().toLocaleTimeString();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

  return (
<div>
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
    <Box sx={style}>
     <Grid container>
        <Grid item xs={4}>
        <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Alert Summary Report</Typography>
          <Typography fontSize={"0.6rem"}>
            Last Updated: {currentDate} {time}
          </Typography>
          <Typography fontSize={"0.6rem"}>Alchemy® Core™
            <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
          </Typography>
          <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography fontSize={"0.9rem"} fontWeight={"bold"} textAlign={"center"}>Most Recent Alerts</Typography>
        <Grid mt={0.2}>
        <Typography textAlign={"center"} fontSize={"0.9rem"}>{currentDate} 00:00:00 to {currentDate} 00:00:00</Typography>
        <Typography textAlign={"center"} fontSize={"0.6rem"}>Duration: 0d 0h 0m 0s</Typography>
        </Grid>
        </Grid>
        <Grid item xs={4}>
            <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Report Options Summary:</Typography>
         <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Alert Types:	<span style={{fontSize:'0.6rem',fontWeight:'normal'}} >Host & Service Alerts</span></Typography>
         <Typography fontSize={"0.7rem"} fontWeight={"bold"}>State Types:	<span style={{fontSize:'0.6rem',fontWeight:'normal'}}>Soft & Hard States</span></Typography>
         <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Host States:	<span style={{fontSize:'0.6rem',fontWeight:'normal'}}>Up, Down, Unreachable</span></Typography>
         <Typography fontSize={"0.7rem"} fontWeight={"bold"}>Service States:<span style={{fontSize:'0.6rem',fontWeight:'normal'}}>Ok, Warning, Unknown, Critical</span></Typography>
         <button onClick={handleClose}>Generate New Report</button>
        </Grid>

        <Grid item xs={12} mt={1}>
            <Typography fontSize={"0.8rem"} textAlign={"center"}>Displaying most recent 25 of 8180 total matching alerts</Typography>
        </Grid>
     </Grid>
       <Grid sx={{height:'67vh',overflowY:'scroll'}}>
       <TableHeader/>
        <TableDataOk/>
        <TableDataOk/>
        <TableDataCritical/>
        <TableDataWarning/> 
        <TableDataOk/>
        <TableDataWarning/> 
        <TableDataWarning/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataOk/>
        <TableDataOk/>
        <TableDataWarning/>
        <TableDataCritical/>
        <TableDataOk/>
        <TableDataOk/>
        <TableDataCritical/>
        <TableDataWarning/> 
        <TableDataOk/>
        <TableDataWarning/> 
        <TableDataWarning/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataOk/>
        <TableDataOk/>
        <TableDataWarning/>
        <TableDataCritical/>   
        </Grid>    
        </Box>
      </Modal>
    </div>
  )
}

const TableHeader = () => {
    return(
    <>
     <Box mt={2} >
        <Paper variant="outlined" sx={{paddingLeft:'1rem'}}>
          <Grid container>
            <Grid item xs={1}>
              <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
                Time
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
                Alert Type
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography fontSize={"0.8rem"} variant="subtitle2" noWrap display={"flex"} justifyContent={"space-around"}>
                Host
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle2" noWrap display={"flex"} justifyContent={"space-around"} fontSize={"0.8rem"}>
                Service
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle2" display={"flex"} justifyContent={"space-around"} noWrap fontSize={"0.8rem"}>
                State
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography variant="subtitle2" display={"flex"} justifyContent={"space-around"} noWrap fontSize={"0.8rem"}>
                State Type
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2" display={"flex"} noWrap fontSize={"0.8rem"} >
                State Type
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
    )
    }

    const TableDataOk = () => {
        return(
        <>
         <Box mt={0.3} >
            <Paper variant="outlined" sx={{paddingLeft:'1rem'}}>
              <Grid container>
                <Grid item xs={1}>
                  <Typography fontSize={"0.6rem"}>
                  10-31-2023 15:49:08
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography  noWrap fontSize={"0.6rem"} sx={{marginTop:'0.5rem'}}>
                  Service Alert
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography fontSize={"0.6rem"}  noWrap display={"flex"} sx={{marginTop:'0.5rem'}} justifyContent={"space-around"}>
                  Airtel-13836086-Cochin-Ernakulam
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography display={"flex"} justifyContent={"space-around"} fontSize={"0.6rem"} sx={{marginTop:'0.5rem'}}>
                  MPLS-BW
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                    <div style={{background:'#4ade80',width:'60%',marginTop:'0.5rem',marginLeft:'1rem',border:'1px solid black'}} >
                        <Typography textAlign={"center"} fontSize={"0.6rem"}>OK</Typography>
                    </div>    
                </Grid>
                <Grid item xs={1.5}>
                  <Typography  display={"flex"} justifyContent={"space-around"} noWrap fontSize={"0.6rem"} sx={{marginTop:'0.5rem'}}>
                  HARD
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography  display={"flex"} fontSize={"0.6rem"} >
                  OK - Average IN: 1.37Mb (22.83%), Average OUT: 375.36Kb (6.26%)Total RX: 414.84Mbits, Total TX: 146.34Mbits
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </>
        )
        }

    const TableDataCritical = () => {
            return(
            <>
             <Box mt={0.3} >
                <Paper variant="outlined" sx={{paddingLeft:'1rem'}}>
                  <Grid container>
                    <Grid item xs={1}>
                      <Typography fontSize={"0.6rem"}>
                      10-31-2023 15:49:08
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography  noWrap fontSize={"0.6rem"} sx={{marginTop:'0.5rem'}}>
                      Service Alert
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography fontSize={"0.6rem"}  noWrap display={"flex"} sx={{marginTop:'0.5rem'}} justifyContent={"space-around"}>
                      Airtel-13843181-Cuttack
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography display={"flex"} justifyContent={"space-around"} fontSize={"0.6rem"} sx={{marginTop:'0.5rem'}}>
                      MPLS-BW
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <div style={{background:'#f87171',width:'60%',marginTop:'0.5rem',marginLeft:'1rem',border:'1px solid black'}} >
                            <Typography textAlign={"center"} fontSize={"0.6rem"}>CRITICAL</Typography>
                        </div>    
                    </Grid>
                    <Grid item xs={1.5}>
                      <Typography  display={"flex"} justifyContent={"space-around"} noWrap fontSize={"0.6rem"} sx={{marginTop:'0.5rem'}}>
                      HARD
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography  display={"flex"} fontSize={"0.6rem"} >
                      OK - Average IN: 333.98Kb (33.40%), Average OUT: 40.30Kb (4.03%)Total RX: 7.98Gbits, Total TX: 1.06Gbits
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </>
            )
        }

        const TableDataWarning = () => {
            return(
            <>
             <Box mt={0.3} >
                <Paper variant="outlined" sx={{paddingLeft:'1rem'}}>
                  <Grid container>
                    <Grid item xs={1}>
                      <Typography fontSize={"0.6rem"}>
                      10-31-2023 15:44:49
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography  noWrap fontSize={"0.6rem"} sx={{marginTop:'0.5rem'}}>
                      Service Alert
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography fontSize={"0.6rem"}  noWrap display={"flex"} sx={{marginTop:'0.5rem'}} justifyContent={"space-around"}>
                      TATA-091BHIL623030159632-Bhilwara
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography display={"flex"} justifyContent={"space-around"} fontSize={"0.6rem"} sx={{marginTop:'0.5rem'}}>
                      MPLS-BW
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <div style={{background:'#fde047',width:'60%',marginTop:'0.5rem',marginLeft:'1rem',border:'1px solid black'}} >
                            <Typography textAlign={"center"} fontSize={"0.6rem"}>WARNING</Typography>
                        </div>    
                    </Grid>
                    <Grid item xs={1.5}>
                      <Typography  display={"flex"} justifyContent={"space-around"} noWrap fontSize={"0.6rem"} sx={{marginTop:'0.5rem'}}>
                      HARD
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography  display={"flex"} fontSize={"0.6rem"} sx={{marginTop:'0.5rem'}}>
                      WARNING - IN bandwidth (85.80%) too high
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </>
            )
        }        
        
export default SummaryReportPoppupPage
