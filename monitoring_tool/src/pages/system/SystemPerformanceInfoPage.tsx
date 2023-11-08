import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Card, Divider, Grid, Typography } from "@mui/material";


const SystemPerformanceInfoPage = () => {
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
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Performance Information</Typography>
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
      <Box>
      <Grid container>
        <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{marginTop:'1rem'}}>
      <Typography fontWeight={"bold"} fontSize={"0.8rem"} mt={8}>Services Actively Checked:</Typography>
      </Grid>
      <Grid item xs={3}>
      <Typography textAlign={"center"} fontWeight={"bold"} fontSize={"0.8rem"}>Program-Wide Performance Information</Typography>
      <Card sx={{padding:'0.6rem',background:'#e8e8e8'}} variant="outlined">
       <Grid container sx={{display:'flex'}}>
       <Grid item xs={6} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Time Frame
          <Divider style={{width:'95%'}}/>
        </Typography>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> 1 minute:</Typography>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> 5 minutes:</Typography>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}>15 minutes:</Typography>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> 1 hour:</Typography>
        </div>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Since program start: </Typography>
        </Grid>
        <Grid item xs={6} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Services Checked
          <Divider style={{width:'99%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.6}> 36 (16.0%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.5}> 111 (49.3%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 225 (100.0%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.8}> 225 (100.0%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.4}> 225 (100.0%)</Typography>
        </Grid>
       </Grid>
      </Card>
      </Grid>
      <Grid item xs={4} ml={1} mt={2.3}>
      <Card sx={{padding:'0.6rem',background:'#e8e8e8'}} variant="outlined">
       <Grid container sx={{display:'flex'}}>
       <Grid item xs={6} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
       Metric
          <Divider style={{width:'95%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Check Execution Time: </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Check Latency: </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Percent State Change: </Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
           Min.
        <Divider style={{width:'92%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.6}>	0.00 sec	</Typography>
        <Typography fontSize={"0.75rem"} mt={0.5}> 0.00 sec	</Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 	0.00%</Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Max.
          <Divider style={{width:'90%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.6}> 31.00 sec	</Typography>
        <Typography fontSize={"0.75rem"} mt={0.5}> 0.04 sec</Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 32.50%</Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Average
          <Divider style={{width:'99%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.6}> 8.700 sec</Typography>
        <Typography fontSize={"0.75rem"} mt={0.5}> 0.000 sec</Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 3.33%</Typography>
        </Grid>
       </Grid>
      </Card>
      </Grid>
      </Grid>
      </Box>
      <Box>
      <Grid container mt={0.4}>
        <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{marginTop:'1rem'}}>
      <Typography fontWeight={"bold"} fontSize={"0.8rem"} mt={8}>Services Passively Checked:</Typography>
      </Grid>
      <Grid item xs={3}>
      <Card sx={{padding:'0.6rem',background:'#e8e8e8'}} variant="outlined">
       <Grid container sx={{display:'flex'}}>
       <Grid item xs={6} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Time Frame
          <Divider style={{width:'95%'}}/>
        </Typography>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> 1 minute:</Typography>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> 5 minutes:</Typography>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}>15 minutes:</Typography>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> 1 hour:</Typography>
        </div>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Since program start: </Typography>
        </Grid>
        <Grid item xs={6} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Services Checked
          <Divider style={{width:'99%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.6}> 36 (16.0%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.5}> 111 (49.3%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 225 (100.0%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.8}> 225 (100.0%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.4}> 225 (100.0%)</Typography>
        </Grid>
       </Grid>
      </Card>
      </Grid>
      <Grid item xs={4} ml={1}>
      <Card sx={{padding:'0.6rem',background:'#e8e8e8'}} variant="outlined">
       <Grid container sx={{display:'flex'}}>
       <Grid item xs={6} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
       Metric
          <Divider style={{width:'95%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Percent State Change: </Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
           Min.
        <Divider style={{width:'92%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 	0.00%</Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Max.
          <Divider style={{width:'90%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 32.50%</Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Average
          <Divider style={{width:'99%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 3.33%</Typography>
        </Grid>
       </Grid>
      </Card>
      </Grid>
      </Grid>
      </Box>
      <Box>
      <Grid container mt={0.4}>
        <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{marginTop:'1rem'}}>
      <Typography fontWeight={"bold"} fontSize={"0.8rem"} mt={8}>Hosts Actively Checked:</Typography>
      </Grid>
      <Grid item xs={3}>
      <Card sx={{padding:'0.6rem',background:'#e8e8e8'}} variant="outlined">
       <Grid container sx={{display:'flex'}}>
       <Grid item xs={6} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Time Frame
          <Divider style={{width:'95%'}}/>
        </Typography>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> 1 minute:</Typography>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> 5 minutes:</Typography>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}>15 minutes:</Typography>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> 1 hour:</Typography>
        </div>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Since program start: </Typography>
        </Grid>
        <Grid item xs={6} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Services Checked
          <Divider style={{width:'99%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.6}> 36 (16.0%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.5}> 111 (49.3%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 225 (100.0%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.8}> 225 (100.0%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.4}> 225 (100.0%)</Typography>
        </Grid>
       </Grid>
      </Card>
      </Grid>
      <Grid item xs={4} ml={1}>
      <Card sx={{padding:'0.6rem',background:'#e8e8e8'}} variant="outlined">
       <Grid container sx={{display:'flex'}}>
       <Grid item xs={6} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
            Metric
          <Divider style={{width:'95%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Check Execution Time: </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Check Latency: </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Percent State Change: </Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
           Min.
        <Divider style={{width:'92%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.6}>	0.00 sec	</Typography>
        <Typography fontSize={"0.75rem"} mt={0.5}> 0.00 sec	</Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 	0.00%</Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Max.
          <Divider style={{width:'90%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.6}> 31.00 sec	</Typography>
        <Typography fontSize={"0.75rem"} mt={0.5}> 0.04 sec</Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 32.50%</Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Average
          <Divider style={{width:'99%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.6}> 8.700 sec</Typography>
        <Typography fontSize={"0.75rem"} mt={0.5}> 0.000 sec</Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 3.33%</Typography>
        </Grid>
       </Grid>
      </Card>
      </Grid>
      </Grid>
      </Box>
      <Box>
      <Grid container mt={0.4}>
        <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{marginTop:'1rem'}}>
      <Typography fontWeight={"bold"} fontSize={"0.8rem"} mt={8}>Hosts Passively Checked:</Typography>
      </Grid>
      <Grid item xs={3}>
      <Card sx={{padding:'0.6rem',background:'#e8e8e8'}} variant="outlined">
       <Grid container sx={{display:'flex'}}>
       <Grid item xs={6} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Time Frame
          <Divider style={{width:'95%'}}/>
        </Typography>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> 1 minute:</Typography>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> 5 minutes:</Typography>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}>15 minutes:</Typography>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <ArrowBackIosIcon style={{fontSize:'0.8rem'}}/>=
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> 1 hour:</Typography>
        </div>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Since program start: </Typography>
        </Grid>
        <Grid item xs={6} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Services Checked
          <Divider style={{width:'99%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.6}> 36 (16.0%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.5}> 111 (49.3%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 225 (100.0%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.8}> 225 (100.0%)</Typography>
        <Typography fontSize={"0.75rem"} mt={0.4}> 225 (100.0%)</Typography>
        </Grid>
       </Grid>
      </Card>
      </Grid>
      <Grid item xs={4} ml={1}>
      <Card sx={{padding:'0.6rem',background:'#e8e8e8'}} variant="outlined">
       <Grid container sx={{display:'flex'}}>
       <Grid item xs={6} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
       Metric
          <Divider style={{width:'95%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Percent State Change: </Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
           Min.
        <Divider style={{width:'92%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 	0.00%</Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Max.
          <Divider style={{width:'90%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 32.50%</Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Average
          <Divider style={{width:'99%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} mt={0.7}> 3.33%</Typography>
        </Grid>
       </Grid>
      </Card>
      </Grid>
      </Grid>
      </Box>
      <Box>
      <Grid container mt={0.4}>
        <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{marginTop:'1rem'}}>
      <Typography fontWeight={"bold"} fontSize={"0.8rem"} mt={8}>Check Statistics:</Typography>
      </Grid>
      <Grid item xs={5.5}>
      <Card sx={{padding:'0.6rem',background:'#e8e8e8'}} variant="outlined">
       <Grid container sx={{display:'flex'}}>
       <Grid item xs={6} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          Type
          <Divider style={{width:'95%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Active Scheduled Host Checks </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}>Active On-Demand Host Checks </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Parallel Host Checks </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Serial Host Checks </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Cached Host Checks </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Passive Host Checks </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Active Scheduled Service Checks </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Active On-Demand Service Checks </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Cached Service Checks </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> Passive Service Checks </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> External Commands </Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
       Last 1 Min
        <Divider style={{width:'92%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"}>42</Typography>
        <Typography fontSize={"0.75rem"}>43</Typography>
        <Typography fontSize={"0.75rem"}>98</Typography>
        <Typography fontSize={"0.75rem"}>12</Typography>
        <Typography fontSize={"0.75rem"}>87</Typography>
        <Typography fontSize={"0.75rem"}>54</Typography>
        <Typography fontSize={"0.75rem"}>42</Typography>
        <Typography fontSize={"0.75rem"}>76</Typography>
        <Typography fontSize={"0.75rem"}>21</Typography>
        <Typography fontSize={"0.75rem"}>54</Typography>
        <Typography fontSize={"0.75rem"}>32</Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
       Last 5 Min
          <Divider style={{width:'90%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"}>76</Typography>
        <Typography fontSize={"0.75rem"}>343</Typography>
        <Typography fontSize={"0.75rem"}>234</Typography>
        <Typography fontSize={"0.75rem"}>32</Typography>
        <Typography fontSize={"0.75rem"}>87</Typography>
        <Typography fontSize={"0.75rem"}>535</Typography>
        <Typography fontSize={"0.75rem"}>23</Typography>
        <Typography fontSize={"0.75rem"}>99</Typography>
        <Typography fontSize={"0.75rem"}>213</Typography>
        <Typography fontSize={"0.75rem"}>542</Typography>
        <Typography fontSize={"0.75rem"}>234</Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
       Last 15 Min
          <Divider style={{width:'99%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"}>432</Typography>
        <Typography fontSize={"0.75rem"}>143</Typography>
        <Typography fontSize={"0.75rem"}>398</Typography>
        <Typography fontSize={"0.75rem"}>125</Typography>
        <Typography fontSize={"0.75rem"}>47</Typography>
        <Typography fontSize={"0.75rem"}>24</Typography>
        <Typography fontSize={"0.75rem"}>65</Typography>
        <Typography fontSize={"0.75rem"}>68</Typography>
        <Typography fontSize={"0.75rem"}>34</Typography>
        <Typography fontSize={"0.75rem"}>65</Typography>
        <Typography fontSize={"0.75rem"}>19</Typography>
        </Grid>
       </Grid>
      </Card>
      </Grid>
      </Grid>
      </Box>
      <Box>
      <Grid container mt={0.4}>
        <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{marginTop:'1rem'}}>
      <Typography fontWeight={"bold"} fontSize={"0.8rem"} mt={2}>Buffer Usage:</Typography>
      </Grid>
      <Grid item xs={5}>
      <Card sx={{padding:'0.6rem',background:'#e8e8e8'}} variant="outlined">
       <Grid container sx={{display:'flex'}}>
       <Grid item xs={5.5} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
       Type
          <Divider style={{width:'95%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"} fontWeight={"bold"}> External Commands 	 </Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
       In Used
        <Divider style={{width:'92%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"}>0</Typography>
        </Grid>
        <Grid item xs={2} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
       Max Used
          <Divider style={{width:'90%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"}>0</Typography>
        </Grid>
        <Grid item xs={2.5} >
       <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
       Total Available
          <Divider style={{width:'99%'}}/>
        </Typography>
        <Typography fontSize={"0.75rem"}>0</Typography>
        </Grid>
       </Grid>
      </Card>
      </Grid>
      </Grid>
      </Box>
    </>
  )
}

export default SystemPerformanceInfoPage
