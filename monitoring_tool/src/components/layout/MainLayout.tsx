import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";

const MainLayout = ({token,setToken}:any) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* <Topbar /> */}
      <Box component="nav"
        sx={{ width: sizeConfigs.sidebar.width, flexShrink: 0}}>
        <Sidebar token={token} setToken={setToken}/>
      </Box>
      <Box component="main"
        sx={{ flexGrow: 1, p: 1, width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh", backgroundColor: colorConfigs.mainBg}}>
        {/* <Toolbar /> */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;