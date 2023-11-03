import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import {Typography} from "@mui/material";


type Props = {};

const HomePage = (props: Props) => {
  return (
    <div style={{marginTop:'12rem',marginLeft:'8.5rem',display:'flex',alignItems:'center'}}>
      <Typography fontSize={"2.5rem"}> Welcome To Alchemy Monitoring Tool...</Typography>
      <SentimentSatisfiedAltIcon style={{fontSize:'2.5rem',color:'#ca8a04'}}/>
    </div>
  );
};

export default HomePage;
