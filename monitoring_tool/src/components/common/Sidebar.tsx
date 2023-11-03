import { Drawer, List, Toolbar,Typography,Grid,TextField } from "@mui/material";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import Logout from "../Logout/Logout";


const Sidebar = ({token,setToken}:any) => {
  return (
    <Drawer variant="permanent"
      sx={{ width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box", borderRight: "0px",backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,height:'100vh' }}}>
           <Toolbar sx={{ marginBottom: "20px" }}>
        <img src={assets.images.logo} style={{ height: "70px", width: "100%", marginTop: "0.5rem"}}/>
        </Toolbar>  
        <Grid container style={{display:'flex', justifyContent:'space-around'}} >
    <Grid item xs={10} mb={1}>
    {/* <TextField id="outlined-basic" variant="outlined" fullWidth size="small" placeholder="Quick Search..."/> */}
    <input type="text" placeholder="Quick Search..." style={{width:'100%',height:'5vh',border:'1px solid #cbd5e1', borderRadius:'4px',padding:'0.7rem', outline:'none',background:'#f1f5f9'}}/>
    </Grid>
    </Grid>
      <List disablePadding style={{overflowY:'auto'}}>
       
       
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        ))}
      </List>
   <Grid container>
    <Grid item xs={12} pl={3} pr={3} mt={15}>
      {/* <Typography fontSize={"0.9rem"} textAlign={"center"}>
      Extra Tools "<span>{">"}</span> MRTG stats "<span>{">"}</span> Nagios Graph
      </Typography> */}

      {token ? <Logout setToken={setToken} /> : ""}
    </Grid>
   </Grid>

    </Drawer>
  );
};

export default Sidebar;