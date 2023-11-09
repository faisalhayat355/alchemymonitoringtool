import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import assets from "../../assets";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


type Props = {};

const GeneralHomePage = (props: Props) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <img src={assets.images.logo} style={{ height: "110px", width: "100%" }}/>
         <Grid container>
          <Grid item xs={12} style={{display:'flex',alignItems:'center'}}>
          <CheckCircleIcon color="success"/>
          <Typography fontSize={"1.1rem"} style={{fontWeight:'bold',marginLeft:'0.5rem'}}>Daemon running with PID 1477</Typography>
          </Grid>
         </Grid>
        </Grid>
      </Grid>

    <Grid container mt={2} >
      <Grid item xs={12} style={{justifyContent:'center',display:"flex"}}>
        <Typography style={{fontSize:'1.2rem', fontWeight:'bold'}}>Alchemy® Core™</Typography>
      </Grid>
      <Grid item xs={12} style={{justifyContent:'center',display:"flex"}}>
        <Typography style={{fontSize:'1.2rem', fontWeight:'bold'}}>Version 4.4.5</Typography>
      </Grid>
      <Grid item xs={12} style={{justifyContent:'center',display:"flex"}}>
        <Typography style={{fontSize:'0.85rem', }}>August 20, 2019</Typography>
      </Grid>
      <Grid item xs={12} style={{justifyContent:'center',display:"flex"}}>
        <Typography style={{fontSize:'0.9rem', fontWeight:'500',color:'#0284c7'}}>Check for updates</Typography>
      </Grid>
    </Grid>


    <Grid container spacing={1} style={{paddingLeft:'7rem',paddingRight:'7rem',marginTop:'1rem'}}>
      <Grid item xs={4}>
        <Paper variant="outlined">
          <Typography style={{fontSize:'1rem', fontWeight:'600',paddingLeft:'1rem',paddingTop:'0.5rem'}}>Get Started</Typography>
          <div style={{paddingLeft:'1rem'}}>
          <li style={{fontSize:'0.8rem',color:'#0284c7'}}> Start monitoring your infrastructure</li>
          <li style={{fontSize:'0.8rem',color:'#0284c7'}}> Change the look and feel of Alchemy</li>
          <li style={{fontSize:'0.8rem',color:'#0284c7'}}> Extend Alchemy with hundreds of addons</li>
          <li style={{fontSize:'0.8rem',color:'#0284c7'}}> Get support</li>
          <li style={{fontSize:'0.8rem',color:'#0284c7'}}> Get training</li>
          <li style={{fontSize:'0.8rem',color:'#0284c7'}}> Get certified</li>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={4}>
      <Paper variant="outlined">
          <Typography style={{fontSize:'1rem', fontWeight:'600',paddingLeft:'1rem',paddingTop:'0.5rem'}}>Quick Links</Typography>
          <div style={{paddingLeft:'1rem'}}>
          <li style={{fontSize:'0.8rem',color:'#0284c7'}}> Alchemy Library <span style={{fontSize:'0.8rem',color:'black'}}> (tutorials and docs)</span> </li>
          <li style={{fontSize:'0.8rem',color:'#0284c7'}}> Alchemy Labs <span style={{fontSize:'0.8rem',color:'black'}}>(development blog)</span></li>
          <li style={{fontSize:'0.8rem',color:'#0284c7'}}> Alchemy Exchange <span style={{fontSize:'0.8rem',color:'black'}}> (plugins and addons)</span></li>
          <li style={{fontSize:'0.8rem',color:'#0284c7'}}> Alchemy Support <span style={{fontSize:'0.8rem',color:'black'}}> (tech support)</span></li>
          <li style={{fontSize:'0.8rem',color:'#0284c7'}}> Alchemy.com <span style={{fontSize:'0.8rem',color:'black'}}>(company)</span></li>
          <li style={{fontSize:'0.8rem',color:'#0284c7'}}> Alchemy.org <span style={{fontSize:'0.8rem',color:'black'}}>(project)</span></li>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper variant="outlined" style={{height:'28.76vh'}}>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper variant="outlined" style={{height:'28.76vh'}}>
        <Typography style={{fontSize:'1rem', fontWeight:'600',paddingLeft:'1rem',paddingTop:'0.5rem'}}>Latest News</Typography>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper variant="outlined" style={{height:'28.76vh'}}>
        <Typography style={{fontSize:'1rem', fontWeight:'600',paddingLeft:'1rem',paddingTop:'0.5rem'}}>Don't Miss...</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Typography style={{fontSize:'0.7rem',textAlign:'center'}}>
        Copyright © 2010-2019 Alchemy Core Development Team and Community Contributors. Copyright © 1999-2009 Ethan Galstad. See the THANKS file for more information on contributors.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography style={{fontSize:'0.7rem',textAlign:'center'}}>
       Alchemy Core is licensed under the GNU General Public License and is provided AS IS with NO WARRANTY OF ANY KIND, INCLUDING THE WARRANTY OF DESIGN, MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE. Alchemy, Alchemy Core and the Alchemy logo are trademarks, servicemarks, registered trademarks or registered servicemarks owned by Alchemy Enterprises, LLC. Use of the Alchemy marks is governed by the trademark use restrictions.
        </Typography>
      </Grid>


      <Grid item xs={4}></Grid>
      <Grid item xs={6} mt={1}>
      <img src={assets.images.logo} style={{ borderRadius:'5px',height: "60px", width: "33%", border:'1px solid #cbd5e1',padding:'0.2rem' }}/>
      <img src={assets.images.logo} style={{ borderRadius:'5px',marginLeft:'3rem',height: "60px", width: "33%", border:'1px solid #cbd5e1',padding:'0.2rem' }}/>
      </Grid>

    </Grid>
    

    </Box>
  );
};

export default GeneralHomePage;
