import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Divider, Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import React from "react";
import ReportTrendsTabPage from "./reportTrendsTab/ReportTrendsTabHomePage";


type Props = {};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const ReportTrendsPage = (props: Props) => {

  const time = new Date().toLocaleTimeString();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
    <Box sx={{marginTop:'0.5rem'}}>
    <Grid container>
      <Grid item xs={4.3}>
          <Typography fontSize={"0.7rem"}>Host and Service State Trends</Typography>
          <Typography fontSize={"0.6rem"}>
            Last Updated: none
          </Typography>
          <Typography fontSize={"0.6rem"}>Alchemy® Core™
            <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
          </Typography>
          <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography textAlign={"center"} fontSize={"1rem"} fontWeight={"bold"}>Histogram</Typography>
        <Grid mt={3}>
        <Typography textAlign={"center"} fontSize={"0.9rem"}>{currentDate} 00:00:00 to {currentDate} 00:00:00</Typography>
        <Typography textAlign={"center"} fontSize={"0.6rem"}>Duration: 0d 0h 0m 0s</Typography>
        </Grid>
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs={10} style={{display:'flex',justifyContent:'flex-end'}}>
      <div>
      <MenuIcon onClick={handleClickOpen} sx={{cursor:'pointer'}}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={{width:'93vh', paddingTop:"1rem",paddingBottom:'0.5rem'}}>
        <Grid container>
      <Grid item xs={6}>
        <Typography ml={2}>Alchemy Trends</Typography>
       </Grid>
       <Grid item xs={5.7} sx={{display:'flex', justifyContent:'flex-end'}}>
        <CloseIcon onClick={handleClose} sx={{cursor:'pointer'}}/>
       </Grid>
       <Divider sx={{width:'100%',marginTop:'1rem'}}/>
      </Grid>
      <Grid container>
        <Grid item xs={12} ml={2}>
        <ReportTrendsTabPage/>
        </Grid>
        <Divider sx={{width:'100%',marginTop:'1rem'}}/>
        <Grid item xs={12}>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" disabled size="small" sx={{textTransform:'capitalize',marginRight:'1rem'}} autoFocus>Apply</Button>
        </DialogActions>
        </Grid>
      </Grid>
      </Box>
      </Dialog>
      </div>
      </Grid>
    </Grid>



    </Box>
    </div>
  );
};

export default ReportTrendsPage;
