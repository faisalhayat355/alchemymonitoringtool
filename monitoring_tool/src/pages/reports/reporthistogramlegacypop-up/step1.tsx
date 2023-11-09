import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React, { useState } from 'react';
import ReportsHistogramLegacyPopupStep2 from './step2';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

const ReportsHistogramLegacyPopupStep1 = ({handleClose,modal}:any) => {
  const [modalStep2, setModalStep2] = useState(false);

  const handleClickStep2Open = () => {
    setModalStep2(true);
  };
const handleCloseStep2 = () => {
  setModalStep2(false);
  };
   
  return (
    <div>
     <Box>
        <Grid container>
            <Grid item xs={12}>
                <Dialog open={modal} 
                // TransitionComponent={Transition} 
                keepMounted aria-describedby="alert-dialog-slide-description" >
                    <div style={{height:'50vh',width:'92vh',marginTop:'0.3rem'}}>
                    <Grid container sx={{display:'flex',alignItems:'center'}}>
                     <Grid item xs={1.5} style={{paddingLeft:'0.5rem'}}>
                      <IconButton onClick={handleClose}  >
                        <ArrowBackIcon/>
                      </IconButton>
                     </Grid>
                    <Grid item xs={10.5} mt={2}>
                    <Typography fontSize={'1rem'} fontWeight={"bold"} textAlign={"center"}>Step 2: Select Host</Typography>
                    </Grid>
                     </Grid>

                    <Grid item xs={7.4} mt={2}>
                   <Grid container sx={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                    <Grid item xs={2}>
                        <Typography fontSize={"0.8rem"}>Host :</Typography>
                    </Grid>
                    <Grid item xs={5}>
                    <select>
                        <option>AIRTEL-13921609-KolkataZO</option>
                        <option>Agra-BB-Synoptics</option>
                        <option>Ahmednagar-BB-Synoptics</option>
                        <option>Airtel-13789199-Kalyani</option>
                        <option>Airtel-13834795-Jammu</option>
                        <option>Airtel-13835054-Indore</option>
                        <option>Airtel-13835057-Lucknow</option>
                        <option>Airtel-13835058-Ahmedabad</option>
                        <option>Airtel-13835059-Che-T.Nagar</option>
                        <option>Airtel-13836055-Kolhapur</option>
                        <option>Airtel-13836048-Vijayawada</option>
                        <option>Airtel-13836082-Sagar</option>
                        <option>Airtel-13836084-Andheri</option>
                        <option>Airtel-13836062-Mehsana</option>
                        <option>Airtel-13838514-Ambala</option>
                        <option>Airtel-13838525-Bilashpur</option>
                        <option>Airtel-13840291-Bang-Mallesware</option>
                        <option>Airtel-13841970-Gwalior</option>
                        <option>Airtel-13843182-Shimla</option>
                        <option>Airtel-13848260-Borivali</option>
                        <option>Airtel-13848262-Thane</option>
                        <option>Airtel-13861478-Belgaum</option>

                    </select>
                    </Grid>
                   </Grid>
                    </Grid>
                    <Grid container sx={{display:'flex',justifyContent:'flex-end'}} mt={0.5}>
                        <Grid item xs={7.69}>
                            <button onClick={handleClickStep2Open}>Continue to Step 3</button>
                        </Grid>
                    </Grid>
                    </div>
                </Dialog>
            </Grid>
        </Grid>
        <ReportsHistogramLegacyPopupStep2 handleCloseStep2={handleCloseStep2} modalStep2={modalStep2}/>
     </Box>
    </div>
  )
}

export default ReportsHistogramLegacyPopupStep1
