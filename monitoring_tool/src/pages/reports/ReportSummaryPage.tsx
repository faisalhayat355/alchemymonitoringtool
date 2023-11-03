import React from "react";
import { Grid, Typography,Box,Paper } from "@mui/material";
import SummaryReportPoppupPage from "./summaryreport/SummaryReportPoppupPage";

const ReportSummaryPage = () => {

  const hostData = ["**ALL HOSTS**","Airtel-13848247-Thiruvalla", "Bhilwara-BB-Synoptics", 
  "Bhatinda-BB-Synoptics","Airtel-13838525-Bilashpur","Agra-BB-Synoptics",
  "TATA-091AHME623010938005-Ahmedabad","Airtel-13840293-PimpriChinchwad",
  "Gorakhpur-BB-Synoptics","Airtel-13835815-Sreerampore","Airtel-13835058-Ahmedabad",
  "Ahmednagar-BB-Synoptics","TATA-091KOLK623010971641-Kolkata","Navsari-BB-Alliant","HO-Hathway-ILL",
  "TATA-091UDAI623018301968-Udaipur","Siliguri-BB-Synoptics","Rajkot-BB-Synoptics","Airtel-13840293-PimpriChinchwad",
  "Gorakhpur-BB-Synoptics","Airtel-13835815-Sreerampore","Airtel-13835058-Ahmedabad",
  "Ahmednagar-BB-Synoptics","TATA-091KOLK623010971641-Kolkata","Navsari-BB-Alliant","HO-Hathway-ILL",
  "TATA-091UDAI623018301968-Udaipur","Siliguri-BB-Synoptics","Rajkot-BB-Synoptics","Airtel-13840293-PimpriChinchwad",
  "Gorakhpur-BB-Synoptics","Airtel-13835815-Sreerampore","Airtel-13835058-Ahmedabad",
  "Ahmednagar-BB-Synoptics","TATA-091KOLK623010971641-Kolkata","Navsari-BB-Alliant","HO-Hathway-ILL",
  "TATA-091UDAI623018301968-Udaipur","Siliguri-BB-Synoptics","Rajkot-BB-Synoptics"];
  
  const time = new Date().toLocaleTimeString();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
    <Grid container>
      <Grid item xs={3}>
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Alert Summary Report</Typography>
          <Typography fontSize={"0.6rem"}>
            Last Updated: {currentDate} {time}
          </Typography>
          <Typography fontSize={"0.6rem"}>Alchemy® Core™
            <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
          </Typography>
          <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12} mt={2}>
        <Typography textAlign={"center"} fontWeight={"bold"}>Standard Reports:</Typography>
      </Grid>
      <Grid container mt={1} style={{display:'flex',justifyContent:'flex-end'}}>
      <Grid item xs={7.5} sx={{display:'flex'}}>
      <Typography fontSize={"0.7rem"}>Report Type: </Typography>
        <select>
          <option value="user supplied">25 Most Recent Hard Alerts</option>
          <option value="depthlayer">25 Most Recent Hard Host Alerts</option>
          <option value="depthlayer">25 Most Recent Hard Service Alerts</option>
          <option value="depthlayer">Top 25 Hard Host Alert Producers</option>
          <option value="depthlayer">Top 25 Hard Host Service Producers</option>
        </select>
    </Grid>
      </Grid>
        <Grid container mt={0.3}>
          <Grid item xs={7.35} sx={{display:'flex', justifyContent:'flex-end'}}>
          <button onClick={handleOpen}>Create Summary Report !</button>                  
          </Grid>
          </Grid>  
    </Grid>

    <Grid container>
      <Grid item xs={12} mt={0.5}>
        <Typography textAlign={"center"} fontWeight={"bold"}>Custom Report Options:</Typography>
      </Grid>
      <Grid container mt={1} style={{display:'flex',justifyContent:'flex-end'}}>
      <Grid item xs={7.5} sx={{display:'flex'}}>
      <Typography fontSize={"0.7rem"}>Report Type: </Typography>
        <select>
          <option value="user supplied">Most Recent Alerts</option>
          <option value="depthlayer">Alerts Total</option>
          <option value="depthlayer">Alerts Total by Hostgroup</option>
          <option value="depthlayer">Alerts Total by Host</option>
          <option value="depthlayer">Alerts Total by Servicegroup</option>
          <option value="depthlayer">Alerts Total by Service</option>
          <option value="depthlayer">Top Alerts Producer</option>
        </select>
    </Grid>
      </Grid>

      <Grid item xs={6.05} mt={0.5} style={{display:'flex',justifyContent:'flex-end'}}>
      <Typography fontSize={"0.7rem"}>If Custom Report Period... </Typography>
        </Grid>
      <Grid container mt={0.5} style={{display:'flex',justifyContent:'flex-end'}}>
      <Grid item xs={7.5} sx={{display:'flex'}}>
      <Typography fontSize={"0.7rem"}>Start Date (Inclusive):</Typography>
       <Grid container>
        <Grid item xs={1.27} >
        <select>
          <option value="user supplied">Jan</option>
          <option value="depthlayer">Feb</option>
          <option value="depthlayer">Mar</option>
          <option value="depthlayer">April</option>
          <option value="depthlayer">May</option>
          <option value="depthlayer">June</option>
          <option value="depthlayer">July</option>
        </select>
        </Grid>
        <Grid item xs={0.8} >
        <select>
          <option value="user supplied">1</option>
          <option value="depthlayer">2</option>
          <option value="depthlayer">3</option>
          <option value="depthlayer">4</option>
          <option value="depthlayer">5</option>
          <option value="depthlayer">6</option>
          <option value="depthlayer">7</option>
        </select>
        </Grid>
        <Grid item xs={1.5} >
        <select>
          <option value="user supplied">2016</option>
          <option value="depthlayer">2017</option>
          <option value="depthlayer">2018</option>
          <option value="depthlayer">2019</option>
          <option value="depthlayer">2020</option>
          <option value="depthlayer">2021</option>
          <option value="depthlayer">2022</option>
          <option value="depthlayer">2023</option>
        </select>
        </Grid>
       </Grid>
    </Grid>
      </Grid>

      <Grid container mt={0.5} style={{display:'flex',justifyContent:'flex-end'}}>
      <Grid item xs={7.5} sx={{display:'flex'}}>
      <Typography fontSize={"0.7rem"}>End Date (Inclusive):</Typography>
       <Grid container>
        <Grid item xs={1.28} sx={{marginLeft:'0.2rem'}}>
        <select>
          <option value="user supplied">Jan</option>
          <option value="depthlayer">Feb</option>
          <option value="depthlayer">Mar</option>
          <option value="depthlayer">April</option>
          <option value="depthlayer">May</option>
          <option value="depthlayer">June</option>
          <option value="depthlayer">July</option>
        </select>
        </Grid>
        <Grid item xs={0.8} >
        <select>
          <option value="user supplied">1</option>
          <option value="depthlayer">2</option>
          <option value="depthlayer">3</option>
          <option value="depthlayer">4</option>
          <option value="depthlayer">5</option>
          <option value="depthlayer">6</option>
          <option value="depthlayer">7</option>
        </select>
        </Grid>
        <Grid item xs={1.5} >
        <select>
          <option value="user supplied">2016</option>
          <option value="depthlayer">2017</option>
          <option value="depthlayer">2018</option>
          <option value="depthlayer">2019</option>
          <option value="depthlayer">2020</option>
          <option value="depthlayer">2021</option>
          <option value="depthlayer">2022</option>
          <option value="depthlayer">2023</option>
        </select>
        </Grid>
       </Grid>
    </Grid>
      </Grid>

      <Grid container mt={1} style={{display:'flex',justifyContent:'flex-end'}}>
      <Grid item xs={7.5} sx={{display:'flex'}}>
      <Typography fontSize={"0.7rem"}>Limit To Hostgroup: </Typography>
        <select>
          <option value="user supplied">**ALL HOST GROPS**</option>
          <option value="depthlayer">Broadband</option>
          <option value="depthlayer">Fortigate</option>
          <option value="depthlayer">Linux-server</option>
        </select>
      </Grid>
      </Grid>

      <Grid container mt={1} style={{display:'flex',justifyContent:'flex-end'}}>
      <Grid item xs={7.5} sx={{display:'flex'}}>
      <Typography fontSize={"0.7rem"}>Limit To Servicegroup: </Typography>
        <select>
          <option value="user supplied">**ALL SERVICEGROUPS**</option>
        </select>
      </Grid>
      </Grid>

      <Grid container mt={1} style={{display:'flex',justifyContent:'flex-end'}}>
      <Grid item xs={7.5} sx={{display:'flex'}}>
      <Typography fontSize={"0.7rem"}>Limit To Host: </Typography>
        <select>
          {hostData.map((items)=>{
            return(
              <>    
                <option value="user supplied">{items}</option>
              </>
            )
          })}
        </select>
      </Grid>
      </Grid>

      <Grid container mt={1} style={{display:'flex',justifyContent:'flex-end'}}>
      <Grid item xs={7.5} sx={{display:'flex'}}>
      <Typography fontSize={"0.7rem"}>Alert Types: </Typography>
        <select>
          <option value="user supplied">Host and Service Alert</option>
          <option value="user supplied">Host Alert</option>
          <option value="user supplied">Service Alert</option>
        </select>
      </Grid>
      </Grid>

      <Grid container mt={1} style={{display:'flex',justifyContent:'flex-end'}}>
      <Grid item xs={7.5} sx={{display:'flex'}}>
      <Typography fontSize={"0.7rem"}>State Types: </Typography>
        <select>
          <option value="user supplied">Hard and Soft State</option>
          <option value="user supplied">Hard State</option>
          <option value="user supplied">Soft State</option>
        </select>
      </Grid>
      </Grid>


      <Grid container mt={1} style={{display:'flex',justifyContent:'flex-end'}}>
      <Grid item xs={7.5} sx={{display:'flex'}}>
      <Typography fontSize={"0.7rem"}>Host States: </Typography>
        <select>
          <option value="user supplied">All Host State</option>
          <option value="user supplied">Host Problem State</option>
          <option value="user supplied">Host Up State</option>
          <option value="user supplied">Host Down State</option>
          <option value="user supplied">Host Unreachable State</option>
        </select>
      </Grid>
      </Grid>


      <Grid container mt={1} style={{display:'flex',justifyContent:'flex-end'}}>
      <Grid item xs={7.5} sx={{display:'flex'}}>
      <Typography fontSize={"0.7rem"}>Service States: </Typography>
        <select>
          <option value="user supplied">All Service State</option>
          <option value="user supplied">Service Problem State</option>
          <option value="user supplied">Service OK State</option>
          <option value="user supplied">Service UP State</option>
          <option value="user supplied">Service Down State</option>
          <option value="user supplied">Service Unreachable State</option>
        </select>
      </Grid>
      </Grid>


      <Grid container mt={1} style={{display:'flex',justifyContent:'flex-end'}}>
      <Grid item xs={7.5} sx={{display:'flex'}}>
      <Typography fontSize={"0.7rem"}>Max List Items: </Typography>
       <input type="number" value={0}  style={{width:'10%'}}/>
      </Grid>
      </Grid>

      
      <Grid container mt={0.5}>
          <Grid item xs={7.35} sx={{display:'flex', justifyContent:'flex-end'}}>
          <button onClick={handleOpen}>Create Summary Report !</button>                  
          </Grid>
          </Grid>  
    
      
    </Grid>


<SummaryReportPoppupPage open={open} handleOpen={handleOpen} handleClose={handleClose}/>

    </Box>
  )
}

export default ReportSummaryPage
