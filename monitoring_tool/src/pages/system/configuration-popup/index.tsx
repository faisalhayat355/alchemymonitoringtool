import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, Grid, Typography,Button } from "@mui/material";
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '59.2%',
    transform: 'translate(-50%, -50%)',
    width: 1118,
    height:"100vh",
    bgcolor: 'white',
    boxShadow: 24,
    paddingTop: 1,
    paddingLeft:1,
    paddingBottom:2
  };

const ConfigurationPopup = ({handleClose,open}:any) => {
    const time = new Date().toLocaleTimeString();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
  return (
    <div>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" 
                aria-describedby="modal-modal-description">
            <Box sx={style}>
        <div style={{height:'91vh'}}>
                <Grid container>
                    <Grid item xs={9.6}>
                    <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Configuration</Typography>
                    <Typography fontSize={"0.6rem"}>
                        Last Updated: {currentDate} {time}
                    </Typography>
                    <Typography fontSize={"0.6rem"}>Alchemy® Core™
                        <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
                    </Typography>
                    <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>
                    </Grid>

                    <Grid item xs={2.35}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography fontSize={"0.8rem"}>Object Type:</Typography>
                            </Grid>
                            <Grid item xs={12} mt={0.2}>
                            <select style={{width:'27vh',height:'3.5vh',border:'1px solid #000000',borderRadius:'3px'}}>
                                <option>Hosts</option>
                                <option>Host Dependencies</option>
                                <option>Host Escalations</option>
                                <option>Host Groups</option>
                                <option>Services</option>
                                <option>Service Group</option>
                                <option>Service Dependencies</option>
                                <option>Service Escalations</option>
                                <option>Contacts</option>
                                <option>Contact Groups</option>
                                <option>Time Periods</option>
                                <option>Commands</option>
                                <option>Command Expansion</option>
                            </select>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography fontSize={"0.8rem"}>Show Only Dependencies on/of Host:</Typography>
                            </Grid>
                            <Grid item xs={12} mt={0.2}>
                            <input type='text' style={{width:'27vh',height:'3.5vh',border:'1px solid #000000',borderRadius:'3px'}}/>
                            </Grid>
                            <Grid item xs={12} mt={0.4}>
                            <button>Update</button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item xs={12} mt={2}>
                <Typography textAlign={"center"} fontWeight={"bold"} fontSize={"1rem"}>Host Dependencies</Typography>
                </Grid>
                <Grid container>
                    <Grid item xs={2}></Grid>
                <Grid item xs={9}>
                    <Grid container>
                    <Grid item xs={2}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"} style={{cursor:'pointer'}}>Dependent Host</Typography>
                        <Divider style={{width:'88%'}}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"} style={{cursor:'pointer'}}>Master Host</Typography>
                        <Divider style={{width:'88%'}}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"} style={{cursor:'pointer'}}>Dependency Type</Typography>
                        <Divider style={{width:'88%'}}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"} style={{cursor:'pointer'}}>Dependency Period</Typography>
                        <Divider style={{width:'88%'}}/>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"} style={{cursor:'pointer'}}>Dependency Failure Options</Typography>
                        <Divider style={{width:'92%'}}/>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
               
            </div>
            <Grid container>
               <Grid item xs={11}></Grid>
               <Grid item xs={1}>
               <Button onClick={handleClose} variant='contained' size='small' style={{textTransform:'capitalize'}}>Cancel</Button>
               </Grid>
                </Grid>
            </Box>
        </Modal>
    </div>
  )
}

export default ConfigurationPopup
