import React from "react";
import { Grid, Typography,Box,Divider,Paper } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const ReportNotificationPage = () => {

  const time = new Date().toLocaleTimeString();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  return (
     <>
    <Box>
     <Grid container>
     <Grid item xs={4}>
         <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Current Event Log</Typography>
         <Typography fontSize={"0.6rem"}>
           Last Updated: {currentDate} {time}
         </Typography>
         <Typography fontSize={"0.6rem"}>Alchemy® Core™
           <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
         </Typography>
         <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>
     </Grid>
     <Grid item xs={5.5}>
       <Grid container>
         <Grid item xs={2}>
         <Typography fontSize={'0.7rem'} color={"black"} mt={3}>Latest Archive</Typography>
         <Grid fontSize={'0.7rem'} color={"black"} mt={1} ml={3}>
           <ArrowBackIcon/>
         </Grid>
         </Grid>
         <Grid item xs={9}>
         <Typography fontSize={'0.9rem'} fontWeight={'medium'} color={"black"} ml={3.5}>Log File Navigation</Typography>
         <Typography fontSize={'0.7rem'} color={"black"} ml={2.2}>Wed Nov 8 00:00:00 IST 2023</Typography>
         <Typography fontSize={'0.7rem'} color={"black"} ml={11}>to</Typography>
         <Typography fontSize={'0.7rem'} color={"black"} ml={9.5}>Present...</Typography>
         <Typography fontSize={'0.7rem'} color={"black"} mt={2}>File: /usr/local/nagios/var/nagios.log</Typography>
       </Grid>
       </Grid>
     </Grid>
     <Grid item xs={2.5}>
       <Grid container>
         <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}} mt={0.3}>
           <Typography  fontSize={'0.8rem'}>Notification detail level for all contacts:</Typography>
         </Grid>
         <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}} mt={0.3}>
         <select>
            <option>All notifications</option>
            <option>All Service notifications</option>
            <option>All Host notifications</option>
            <option>Service custom</option>
            <option>Service acknowledgement</option>
            <option>Service warnings</option>
            <option>Service unknown</option>
            <option>Service critical</option>
            <option>Service recovery</option>
            <option>Service flapping</option>
            <option>Service downtime</option>
            <option>Host custom</option>
            <option>Host unreachable</option>
            <option>Host recovery</option>
            <option>Host flapping</option>
            <option>Host downtime</option>
           </select>
         </Grid>
         <Grid item xs={8.3} sx={{display:'flex',justifyContent:'flex-end'}} mt={0.3}>
           <Typography  fontSize={'0.8rem'}>Older Entires First :</Typography>
         </Grid>
         <Grid item xs={8} sx={{display:'flex',justifyContent:'flex-end'}} mt={0.3}>
         <input type="checkbox"/>
         </Grid>
         <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}} mt={0.3}>
          <button>Update</button>
         </Grid>
        
       </Grid>
     </Grid>
   </Grid>
     </Box>

     <TableHeader/>
     <TableBodyCritical/>
     <TableBodyCritical/>
     <TableBodyOk/>
     <TableBodyCritical/>
     <TableBodyCritical/>
     <TableBodyCritical/>
     <TableBodyWarning/>
     <TableBodyCritical/>
     <TableBodyOk/>
     <TableBodyWarning/>
     <TableBodyOk/>
     <TableBodyOk/>
     <TableBodyOk/>
     <TableBodyOk/>
     <TableBodyWarning/>
     <TableBodyWarning/>
     <TableBodyWarning/>
     <TableBodyCritical/>
     <TableBodyCritical/>
     <TableBodyWarning/>
     <TableBodyWarning/>
     <TableBodyWarning/>
     <TableBodyCritical/>
     <TableBodyCritical/>
     <TableBodyCritical/>
     <TableBodyCritical/>
    </>
  )
}

const TableHeader = () => {
  return(
  <>
   <Box mt={0.5} >
        <Grid container>
          <Grid item xs={2.5} ml={0.1}>
           <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Host
            </Typography>
            <Divider style={{width:'97%'}}/>
           </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
             Service
            </Typography>
            <Divider style={{width:'95%'}}/>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container>
            <Typography fontSize={"0.8rem"} variant="subtitle2" noWrap >
             Type
            </Typography>
            <Divider style={{width:'95%'}}/>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Time
            </Typography>
            <Divider style={{width:'95%'}}/>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Contact
            </Typography>
            <Divider style={{width:'95%'}}/>
            </Grid>
          </Grid>
          <Grid item xs={1.8}>
            <Grid container>
            <Typography variant="subtitle2" fontSize={"0.8rem"}>
              Notification  Command
            </Typography>
            <Divider style={{width:'97%'}}/>
            </Grid>
          </Grid>
          <Grid item xs={3.5}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Information
            </Typography>
            <Divider style={{width:'100%'}}/>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  </>
  )
  }

const TableBodyCritical = () => {
    return(
    <>
     <Box mt={0.5} >
          <Grid container>
            <Grid item xs={2.5} ml={0.1}>
             <Grid container>
              <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'97%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
              TATA-091KOLK623030199469-Kharagpur
              </Typography>
             </Grid>
            </Grid>
            <Grid item xs={1}>
              <Grid container>
              <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'95%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
              MPLS-BW
              </Typography>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Grid container>
              <Typography fontSize={"0.7rem"} sx={{background:'#f74373',width:'95%',paddingLeft:'0.3rem',border:'0.5px solid black'}}>
               CRITICAL
              </Typography>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Grid container>
              <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'95%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
              11-08-2023
              </Typography>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Grid container>
              <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'95%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
                alchemyadmin
              </Typography>
              </Grid>
            </Grid>
            <Grid item xs={1.8}>
              <Grid container>
              <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'97%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
              notify-service-by-email
              </Typography>
              </Grid>
            </Grid>
            <Grid item xs={3.5}>
              <Grid container>
              <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'100%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
              CRITICAL - IN bandwidth (97.33%) too high
              </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
    </>
    )
  }

const TableBodyOk = () => {
      return(
      <>
       <Box mt={0.5} >
            <Grid container>
              <Grid item xs={2.5} ml={0.1}>
               <Grid container>
                <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'97%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
                Varanasi-BB-Alliant
                </Typography>
               </Grid>
              </Grid>
              <Grid item xs={1}>
                <Grid container>
                <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'95%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
                MPLS-BW
                </Typography>
                </Grid>
              </Grid>
              <Grid item xs={1}>
                <Grid container>
                <Typography fontSize={"0.7rem"} sx={{background:'#27d658',width:'95%',paddingLeft:'0.3rem',border:'0.5px solid black'}}>
                 OK
                </Typography>
                </Grid>
              </Grid>
              <Grid item xs={1}>
                <Grid container>
                <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'95%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
                11-08-2023
                </Typography>
                </Grid>
              </Grid>
              <Grid item xs={1}>
                <Grid container>
                <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'95%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
                  alchemyadmin
                </Typography>
                </Grid>
              </Grid>
              <Grid item xs={1.8}>
                <Grid container>
                <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'97%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
                notify-service-by-email
                </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3.5}>
                <Grid container>
                <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'100%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
                PING OK - Packet loss = 0%, RTA = 70.19 ms
                </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
      </>
      )
  }

const TableBodyWarning = () => {
        return(
        <>
         <Box mt={0.5} >
              <Grid container>
                <Grid item xs={2.5} ml={0.1}>
                 <Grid container>
                  <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'97%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
                  TATA-091ASAN623014569549-Asansol
                  </Typography>
                 </Grid>
                </Grid>
                <Grid item xs={1}>
                  <Grid container>
                  <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'95%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
                  MPLS-BW
                  </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={1}>
                  <Grid container>
                  <Typography fontSize={"0.7rem"} sx={{background:'#f5f525',width:'95%',paddingLeft:'0.3rem',border:'0.5px solid black'}}>
                   WARNING
                  </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={1}>
                  <Grid container>
                  <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'95%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
                  11-08-2023
                  </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={1}>
                  <Grid container>
                  <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'95%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
                    alchemyadmin
                  </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={1.8}>
                  <Grid container>
                  <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'97%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
                  notify-service-by-email
                  </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={3.5}>
                  <Grid container>
                  <Typography fontSize={"0.7rem"} sx={{background:'#e1e2e3',width:'100%',paddingLeft:'0.3rem',border:'0.5px solid #e1e2e3'}}>
                  WARNING - IN bandwidth (89.34%) too high
                  </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
        </>
        )
  }
export default ReportNotificationPage
