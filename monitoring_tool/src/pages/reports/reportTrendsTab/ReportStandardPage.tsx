import React, {useState} from "react"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid, Typography,Box,Paper,TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ReportStandardPage = () => {
    
    const [reportType, setReportType] = useState('');

    const handleChangeReport = (event: SelectChangeEvent) => {
        setReportType(event.target.value as string);
    };
  
  return (
    <div>
       <Grid container>
        <Grid item xs={12}>
            <Typography>
                URL for JSON CGIs
            </Typography>
            <TextField fullWidth size='small'/>
        </Grid>

        <Grid item xs={12} mt={2}>
            <Typography>
            Report Type
            </Typography>
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={reportType}
          onChange={handleChangeReport} size='small' 
        >
          <MenuItem value={10}>--Select Report Type--</MenuItem>
          <MenuItem value={20}>Host</MenuItem>
          <MenuItem value={30}>Service</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </Grid>
     </Grid>
    </div>
  )
}

export default ReportStandardPage
