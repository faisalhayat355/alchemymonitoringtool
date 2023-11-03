import * as React from 'react';
import { Box, Typography } from "@mui/material";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import ReportAdvancedPage from './ReportAdvancedPage';
import ReportStandardPage from './ReportStandardPage';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ReportHistogramTabPage() {


  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',height:'59vh' }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Standard" {...a11yProps(0)} />
          <Tab label="Advanced" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
    <ReportStandardPage/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
     <ReportAdvancedPage/>
      </CustomTabPanel>
     
    </Box>
  );
}
