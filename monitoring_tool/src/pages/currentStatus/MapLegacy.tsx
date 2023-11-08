import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography, Divider,Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const MapLegacy = () => {

  const time = new Date().toLocaleTimeString();
  const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;

  return (
    <div>
      <Box>
        <Grid container>
          <Grid item xs={9}>
            <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Network Map For All Hosts</Typography>
            <Typography fontSize={"0.6rem"}>
              Last Updated: {currentDate} {time}
            </Typography>
            <Typography fontSize={"0.6rem"}> Updated every 90 seconds</Typography>
            <Typography fontSize={"0.6rem"}>Alchemy® Core™
              <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
            </Typography>
            <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>

           <Grid mt={2}>
           <Typography fontSize={"0.6rem"} style={{cursor:'pointer',textDecoration:'underline'}}>View Status Detail For All Hosts</Typography>
            <Typography fontSize={"0.6rem"} style={{cursor:'pointer',textDecoration:'underline'}}>View Status Overview For All Hosts</Typography>
           </Grid>
          </Grid>

          <Grid item xs={3}>
            <Grid container>

              
              <Grid item xs={8}>
                <Typography fontSize={"0.7rem"}>Layout Method:</Typography>
                <select>
                  <option value="user supplied">User-Supplied coords</option>
                  <option value="depthlayer">Depth layers</option>
                  <option value="depthlayer">Collapsed tree</option>
                  <option value="depthlayer">Balanced tree</option>
                  <option value="depthlayer">Circular</option>
                  <option value="depthlayer">Circular (Marked Up)</option>
                  <option value="depthlayer">Circular (Baloon)</option>
                </select>

              <Grid mt={1}>
              <Typography fontSize={"0.7rem"}>Drawing Layers :</Typography>
              </Grid>
              <Grid>
                <Paper elevation={0} style={{padding:'0.5rem',height:'14.4vh',overflowY:'scroll',width:'90%'}}>
                  <Typography fontSize={"0.9rem"}>Network</Typography>
                  <Typography fontSize={"0.9rem"}>Network</Typography>
                  <Typography fontSize={"0.9rem"}>Linux Server</Typography>
                </Paper>
              </Grid>

              <Grid>
                <Typography fontSize={"0.7rem"}>
                Suppress popups:
                </Typography>
               <Grid item xs={9} style={{display:'flex',justifyContent:'flex-end'}}>
               <input type="checkbox" id="include" name="fav_language" value="include"/>
               </Grid>
              </Grid>
              </Grid>


              <Grid item xs={4} >
              <Typography fontSize={"0.7rem"}>Scaling factor:</Typography>

              <input style={{width:'100%',height:'1.1rem'}} type="text" placeholder="0.00"/>
              <Grid mt={1}>
              <Typography fontSize={"0.7rem"}>Layer mode :</Typography>
              </Grid>
              
              <Grid display={"flex"} alignItems={"center"}>
              <input type="radio" id="include" name="fav_language" value="include"/>
                <Typography fontSize={"0.7rem"}>Include</Typography>
              </Grid>
              <Grid display={"flex"} alignItems={"center"}>
              <input type="radio" id="include" name="fav_language" value="include"/>
                <Typography fontSize={"0.7rem"}>Exclude</Typography>
              </Grid>

              <Grid mt={6}>
                <button>Update</button>
                {/* <Button variant="contained" size="small" style={{height:'1.4rem',textTransform:'capitalize'}}>Update</Button> */}
              </Grid>
            
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} mt={5}>
            <Typography fontSize={"0.8rem"} textAlign={"center"}>You have not supplied any host drwaing coordinates, so you cannot use this layout method.</Typography>
            <Typography fontSize={"0.8rem"} textAlign={"center"}>Read the FAQS for more information on specifying drawing coordinates or select a different layout methods.</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MapLegacy;
