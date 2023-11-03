import { useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ReportAdvancedPage = () => {

const [reportType, setReportType] = useState('');
const handleChangeReport = (event: SelectChangeEvent) => {
  setReportType(event.target.value as string);
    };
  
  return (
    <div>
      <Grid container>
      <Grid item xs={12} mt={-1.5}>
          <Typography fontWeight={"500"} fontSize={"0.8rem"}>Statistics Breakdown</Typography>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <Select labelId="demo-simple-select-label"
          id="demo-simple-select" value={reportType}
          onChange={handleChangeReport} size='small' >
          <MenuItem value={1}>--Select Static Breakdown --</MenuItem>
          <MenuItem value={2}>Month</MenuItem>
          <MenuItem value={3}>Day of the Month</MenuItem>
          <MenuItem value={4}>Day of the Week</MenuItem>
          <MenuItem value={5}>Hour of the Day</MenuItem>
        </Select>
        </FormControl>
      </Box>
      </Grid>
        <Grid item xs={12} mt={1}>
          <Typography fontWeight={"500"} fontSize={"0.8rem"}>Events To Graph</Typography>
          <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={reportType}
          onChange={handleChangeReport} size='small' >
          <MenuItem value={10}>-- Select Graph Events --</MenuItem>
        </Select>
        </FormControl>
      </Box>
        </Grid>
        <Grid item xs={12} mt={1}>
          <Typography fontWeight={"500"} fontSize={"0.8rem"}>State Types to Graph</Typography>
          <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={reportType}
          onChange={handleChangeReport} size='small'>
          <MenuItem value={11}>--Select State Type--</MenuItem>
          <MenuItem value={22}>Hard State</MenuItem>
          <MenuItem value={77}>Soft State</MenuItem>
          <MenuItem value={88}>Hard and Soft State</MenuItem>
        </Select>
        </FormControl>
      </Box>
      </Grid>
      <Grid item xs={12} mt={1} sx={{display:'flex',alignItems:'center'}}>
        <input type="checkbox"/>
        <Typography fontSize={"0.8rem"}>Assume State Retention</Typography>
      </Grid>
      <Grid item xs={12} mt={1} sx={{display:'flex',alignItems:'center'}}>
        <input type="checkbox"/>
        <Typography fontSize={"0.8rem"}>Initial State Logged</Typography>
      </Grid>
      <Grid item xs={12} mt={1} sx={{display:'flex',alignItems:'center'}}>
        <input type="checkbox"/>
        <Typography fontSize={"0.8rem"}>Ignore Repeated State</Typography>
      </Grid>
     </Grid>
    </div>
  )
}

export default ReportAdvancedPage
