import React from "react";
import { Grid, Typography,Box,Paper } from "@mui/material";

type Props = {};

const ReportsHomePage = (props: Props) => {
  const time = new Date().toLocaleTimeString();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return (
    <Box>
    <Grid container>
      <Grid item xs={3}>
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Availability Report</Typography>
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
        <Typography textAlign={"center"} fontWeight={"bold"}>Step 1: Select Report Type</Typography>
      </Grid>
      <Grid item xs={8} style={{display:'flex'}}>
                <Typography fontSize={"0.7rem"}>Type:</Typography>
                <select>
                  <option value="user supplied">User-Supplied coords</option>
                  <option value="depthlayer">Depth layers</option>
                  <option value="depthlayer">Collapsed tree</option>
                  <option value="depthlayer">Balanced tree</option>
                  <option value="depthlayer">Circular</option>
                  <option value="depthlayer">Circular (Marked Up)</option>
                  <option value="depthlayer">Circular (Baloon)</option>
                </select>
              </Grid>
    </Grid>
    </Box>
  );
};

export default ReportsHomePage;
