import { Box, Grid, TextField, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";

const ReportAdvancedPage = () => {
    
    const [reportType, setReportType] = useState('');

    const handleChangeReport = (event: SelectChangeEvent) => {
        setReportType(event.target.value as string);
    };
  
  return (
    <div>
       <Grid container>
      <Grid item xs={12} sx={{display:'flex',alignItems:'center'}}>
        <input type="checkbox"/>
        <Typography fontSize={"0.8rem"}>Assume Initial States</Typography>
      </Grid>
      <Grid item xs={12} mt={1} sx={{display:'flex',alignItems:'center'}}>
        <input type="checkbox"/>
        <Typography fontSize={"0.8rem"}>Assume State Retention</Typography>
      </Grid>
      <Grid item xs={12} mt={1} sx={{display:'flex',alignItems:'center'}}>
        <input type="checkbox"/>
        <Typography fontSize={"0.8rem"}>Assume States During Program Downtime</Typography>
      </Grid>
      <Grid item xs={12} mt={1} sx={{display:'flex',alignItems:'center'}}>
        <input type="checkbox"/>
        <Typography fontSize={"0.8rem"}>Include Soft States</Typography>
      </Grid>

      <Grid item xs={12} mt={1}>
          <Typography fontWeight={"500"} fontSize={"0.8rem"}>First Assumed State</Typography>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <Select labelId="demo-simple-select-label"
          id="demo-simple-select" value={reportType}
          onChange={handleChangeReport} size='small' >
          <MenuItem value={10}>--Select Report Type--</MenuItem>
        </Select>
        </FormControl>
      </Box>
      </Grid>

        <Grid item xs={12} mt={1}>
            <Typography fontWeight={"500"} fontSize={"0.8rem"}>URL for JSON CGIs</Typography>
            <TextField fullWidth size='small' type="number"/>
        </Grid>

        <Grid item xs={12} sx={{display:'flex',alignItems:'center'}} mt={0.5}>
          <input type="checkbox"/>
          <Typography fontSize={"0.8rem"}>Suppress Image Map</Typography>
        </Grid>

        <Grid item xs={12} sx={{display:'flex',alignItems:'center'}} mt={0.5}>
          <input type="checkbox"/>
          <Typography fontSize={"0.8rem"}>Suppress Popup</Typography>
        </Grid>
        
     </Grid>
    </div>
  )
}

export default ReportAdvancedPage
