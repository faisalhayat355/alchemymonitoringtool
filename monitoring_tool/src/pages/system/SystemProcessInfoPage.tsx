import { Box, Grid, Typography,Card,Link } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import DoneIcon from '@mui/icons-material/Done';



const SystemProcessInfoPage = () => {
  const time = new Date().toLocaleTimeString();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  return (
    <>
      <Box>
       <Grid container>
        <Grid item xs={3.5}>
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Alchemy Process Information</Typography>
          <Typography fontSize={"0.6rem"}>
            Last Updated: {currentDate} {time}
          </Typography>
          <Typography fontSize={"0.6rem"}> Updated every 90 seconds</Typography>
          <Typography fontSize={"0.6rem"}>Alchemy® Core™
            <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
          </Typography>
          <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>
        </Grid>
      </Grid>
    </Box>

    <Box mt={4}>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
          <Typography textAlign={"center"} fontWeight={"bold"} fontSize={"0.8rem"}>Process Information</Typography>
          <Card sx={{padding:'0.6rem',background:'#e8e8e8'}} variant="outlined">
            <Grid container>
              <Grid item xs={7}>
                <Typography fontWeight={"bold"} fontSize={"0.8rem"}>Program Version</Typography>
              </Grid>
              <Grid item xs={1}>
              <Typography>:</Typography>
              </Grid>
              <Grid item xs={4}>
              <Typography fontSize={"0.8rem"} mt={0.3}>4.4.5</Typography>
              </Grid>

              <Grid item xs={7}>
                <Typography fontWeight={"bold"} fontSize={"0.8rem"}>Program Start Time</Typography>
              </Grid>
              <Grid item xs={1}>
              <Typography>:</Typography>
              </Grid>
              <Grid item xs={4}>
              <Typography fontSize={"0.8rem"} mt={0.3}>10-19-2023 00:39:37</Typography>
              </Grid>

              <Grid item xs={7}>
                <Typography fontWeight={"bold"} fontSize={"0.8rem"}>Total Running Time</Typography>
              </Grid>
              <Grid item xs={1}>
              <Typography>:</Typography>
              </Grid>
              <Grid item xs={4}>
              <Typography fontSize={"0.8rem"} mt={0.3}>20d 9h 55m 57s</Typography>
              </Grid>

              <Grid item xs={7}>
                <Typography fontWeight={"bold"} fontSize={"0.8rem"}>Last Log File Rotation</Typography>
              </Grid>
              <Grid item xs={1}>
              <Typography>:</Typography>
              </Grid>
              <Grid item xs={4}>
              <Typography fontSize={"0.8rem"} mt={0.3}>{currentDate} {time}</Typography>
              </Grid>

              <Grid item xs={7}>
                <Typography fontWeight={"bold"} fontSize={"0.8rem"}>Alchemy PID</Typography>
              </Grid>
              <Grid item xs={1}>
              <Typography>:</Typography>
              </Grid>
              <Grid item xs={4}>
              <Typography fontSize={"0.8rem"} mt={0.3}>1477</Typography>
              </Grid>


              <Grid item xs={7}>
                <Typography fontWeight={"bold"} fontSize={"0.8rem"}>Notifications Enabled?</Typography>
              </Grid>
              <Grid item xs={1}>
              <Typography>:</Typography>
              </Grid>
              <Grid item xs={4}>
              <div style={{background:'#34c75b',border:"1px solid black",width:'92%'}}>
              <Typography fontSize={"0.8rem"} mt={0.3} ml={0.8} fontWeight={"bold"}>Yes</Typography>
              </div>
              </Grid>

              <Grid item xs={7}>
                <Typography fontWeight={"bold"} fontSize={"0.8rem"}>Service Checks Being Executed?</Typography>
              </Grid>
              <Grid item xs={1}>
              <Typography>:</Typography>
              </Grid>
              <Grid item xs={4} mt={0.1}>
              <div style={{background:'#34c75b',border:"1px solid black",width:'92%'}}>
              <Typography fontSize={"0.8rem"} mt={0.3} ml={0.8} fontWeight={"bold"}>Yes</Typography>
              </div>
              </Grid>


              <Grid item xs={7}>
                <Typography fontWeight={"bold"} fontSize={"0.8rem"}>Passive Service Checks Being Accepted?</Typography>
              </Grid>
              <Grid item xs={1}>
              <Typography>:</Typography>
              </Grid>
              <Grid item xs={4} mt={0.1}>
              <div style={{background:'#34c75b',border:"1px solid black",width:'92%'}}>
              <Typography fontSize={"0.8rem"} mt={0.3} ml={0.8} fontWeight={"bold"}>Yes</Typography>
              </div>
              </Grid>


              <Grid item xs={7}>
                <Typography fontWeight={"bold"} fontSize={"0.8rem"}>Host Checks Being Executed?</Typography>
              </Grid>
              <Grid item xs={1}>
              <Typography>:</Typography>
              </Grid>
              <Grid item xs={4} mt={0.1}>
              <div style={{background:'#34c75b',border:"1px solid black",width:'92%'}}>
              <Typography fontSize={"0.8rem"} mt={0.3} ml={0.8} fontWeight={"bold"}>Yes</Typography>
              </div>
              </Grid>


              <Grid item xs={7}>
                <Typography fontWeight={"bold"} fontSize={"0.8rem"}>Passive Host Checks Being Accepted?</Typography>
              </Grid>
              <Grid item xs={1}>
              <Typography>:</Typography>
              </Grid>
              <Grid item xs={4} mt={0.1}>
              <div style={{background:'#34c75b',border:"1px solid black",width:'92%'}}>
              <Typography fontSize={"0.8rem"} mt={0.3} ml={0.8} fontWeight={"bold"}>Yes</Typography>
              </div>
              </Grid>

            </Grid>
          </Card>
        </Grid>
        <Grid item xs={0.1}></Grid>
        <Grid item xs={3}>
          <Typography textAlign={"center"} fontWeight={"bold"} fontSize={"0.8rem"}>Process Commands</Typography>
          <Card sx={{padding:'0.6rem',background:'#e8e8e8',height:'40.8vh'}} variant="outlined">
            <Grid item xs={12} sx={{display:'flex',alignItems:'center'}}>
                <ArrowDropDownIcon/>
                <Link href="#" underline="hover">
                <Typography fontSize={"0.8rem"}>Shutdown the Alchemy process</Typography>
                </Link>
            </Grid>

            <Grid item xs={12} sx={{display:'flex',alignItems:'center'}}>
                <SwapVertIcon style={{fontSize:'1.2rem',marginLeft:'0.2rem'}}/>
                <Link href="#" underline="hover">
                <Typography fontSize={"0.8rem"} ml={0.3}>Restart the Alchemy process</Typography>
                </Link>
            </Grid>

            <Grid item xs={12} sx={{display:'flex',alignItems:'center'}}>
                <CloseIcon style={{fontSize:'1.2rem',marginLeft:'0.2rem',color:'red'}}/>
                <Link href="#" underline="hover">
                <Typography fontSize={"0.8rem"} ml={0.3}>Disable notifications</Typography>
                </Link>
            </Grid>

            <Grid item xs={12} sx={{display:'flex',alignItems:'center'}}>
                <CloseIcon style={{fontSize:'1.2rem',marginLeft:'0.2rem',color:'red'}}/>
                <Link href="#" underline="hover">
                <Typography fontSize={"0.8rem"} ml={0.3}>	Stop executing service checks</Typography>
                </Link>
            </Grid>

            <Grid item xs={12} sx={{display:'flex',alignItems:'center'}}>
                <CloseIcon style={{fontSize:'1.2rem',marginLeft:'0.2rem',color:'red'}}/>
                <Link href="#" underline="hover">
                <Typography fontSize={"0.8rem"} ml={0.3}>	Stop accepting passive service checks</Typography>
                </Link>
            </Grid>

            <Grid item xs={12} sx={{display:'flex',alignItems:'center'}}>
                <CloseIcon style={{fontSize:'1.2rem',marginLeft:'0.2rem',color:'red'}}/>
                <Link href="#" underline="hover">
                <Typography fontSize={"0.8rem"} ml={0.3}>Stop executing host checks</Typography>
                </Link>
            </Grid>

            <Grid item xs={12} sx={{display:'flex',alignItems:'center'}}>
                <CloseIcon style={{fontSize:'1.2rem',marginLeft:'0.2rem',color:'red'}}/>
                <Link href="#" underline="hover">
                <Typography fontSize={"0.8rem"} ml={0.3}>	Stop accepting passive host checks</Typography>
                </Link>
            </Grid>

            <Grid item xs={12} sx={{display:'flex',alignItems:'center'}}>
                <CloseIcon style={{fontSize:'1.2rem',marginLeft:'0.2rem',color:'red'}}/>
                <Link href="#" underline="hover">
                <Typography fontSize={"0.8rem"} ml={0.3}>	Disable event handlers</Typography>
                </Link>
            </Grid>

            <Grid item xs={12} sx={{display:'flex',alignItems:'center'}}>
                <DoneIcon style={{fontSize:'1.2rem',marginLeft:'0.2rem',color:'green'}}/>
                <Link href="#" underline="hover">
                <Typography fontSize={"0.8rem"} ml={0.3}>	Start obsessing over services</Typography>
                </Link>
            </Grid>

            <Grid item xs={12} sx={{display:'flex',alignItems:'center'}}>
                <DoneIcon style={{fontSize:'1.2rem',marginLeft:'0.2rem',color:'green'}}/>
                <Link href="#" underline="hover">
                <Typography fontSize={"0.8rem"} ml={0.3}>	Start obsessing over hosts</Typography>
                </Link>
            </Grid>


            <Grid item xs={12} sx={{display:'flex',alignItems:'center'}}>
                <CloseIcon style={{fontSize:'1.2rem',marginLeft:'0.2rem',color:'red'}}/>
                <Link href="#" underline="hover">
                <Typography fontSize={"0.8rem"} ml={0.3}>Disable flap detection</Typography>
                </Link>
            </Grid>


            <Grid item xs={12} sx={{display:'flex',alignItems:'center'}}>
                <CloseIcon style={{fontSize:'1.2rem',marginLeft:'0.2rem',color:'red'}}/>
                <Link href="#" underline="hover">
                <Typography fontSize={"0.8rem"} ml={0.3}>Disable performance data</Typography>
                </Link>
            </Grid>

          </Card>
        </Grid>
      </Grid>
    </Box>

    </>
  )
}

export default SystemProcessInfoPage
