import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ReportsLegacyPopup from "./reportlegacypop-up/step1";
import ReportsHistogramLegacyPopupStep1 from "./reporthistogramlegacypop-up/step1";

const ReportHistogramLegacyPage = () => {
  const [modal, setModal] = useState(false);
  const time = new Date().toLocaleTimeString();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;


const handleClickOpen = () => {
      setModal(true);
    };
const handleClose = () => {
      setModal(false);
    };

  return (
    <>
    <Grid>
    <Box>
     <Grid container>
     <Grid item xs={4}>
         <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Host and Service Alert Histogram</Typography>
         <Typography fontSize={"0.6rem"}>
           Last Updated: {currentDate} {time}
         </Typography>
         <Typography fontSize={"0.6rem"}>Alchemy® Core™
           <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
         </Typography>
         <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>
     </Grid>
   </Grid>
     </Box>
       <Grid item xs={11.5} mt={3}>
           <Typography fontSize={'1rem'} fontWeight={"bold"} textAlign={"center"}>Step 1: Select Report Type</Typography>
       </Grid>
    </Grid>
    <Box>
   <Grid container mt={0.5}>
   <Grid item xs={7.32} mt={0.5}>
         <Grid container  sx={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
          <Grid item xs={0.9}>
            <Typography fontSize={"0.8rem"}>Types:</Typography>
          </Grid>
          <Grid item xs={3}>
          <select>
           <option>Host</option>
            <option>Service</option>
           </select>
          </Grid>
         </Grid>
       </Grid>
       
   </Grid>
    </Box>
    <Grid container mt={0.2}>
    <Grid item xs={6.87} sx={{display:'flex',justifyContent:'flex-end'}}><button onClick={handleClickOpen}>Continue to Step 2</button></Grid>
    </Grid>
    <ReportsHistogramLegacyPopupStep1 handleClose={handleClose} modal={modal}/>
   </>
  )
}

export default ReportHistogramLegacyPage
