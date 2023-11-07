import React, {useState} from "react";
import { Grid, Typography,Box,Divider,Paper } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
 
 
const dataOk = [
  {
    id: 10021,
    name: "Faisal",
    email: "anna@greatcompany.com",
    statusp:'DOWN'
  },
  {
    id: 10022,
    name: "Riley",
    email: "riley@greatcompany.com",
    statusp:'DOWN'
  },
  {
    id: 10023,
    name: "Nathan",
    email: "nathan@greatcompany.com",
    statusp:'DOWN'
  },
  {
    id: 10024,
    name: "Jessica",
    email: "jessica@greatcompany.com",
    statusp:'DOWN'
  }
];
 
const dataCriti = [
  {
    id: 10021,
    name: "Hayat",
    email: "anna@greatcompany.com",
    statusp:'DOWN'
  },
  {
    id: 10022,
    name: "Riley",
    email: "riley@greatcompany.com",
    statusp:'DOWN'
  },
  {
    id: 10023,
    name: "Nathan",
    email: "nathan@greatcompany.com",
    statusp:'DOWN'
  },
  {
    id: 10024,
    name: "Jessica",
    email: "jessica@greatcompany.com",
    statusp:'DOWN'
  }
];
 
 
const data = [
  {
    // id: 1,
    host: "AIRTEL-13921609-KolkataZO",
    status: "UP",
    lastcheck: "11-02-2023 11:57:03",
    duration: "5d 23h 21m 51s",
    statusinformation: "PING OK - Packet loss = 0%, RTA = 58.42 ms",
    
  },
  {
    // id: 2,
    host: "Airtel-13789199-Kalyani",
    status: "UP",
    lastcheck: "11-07-2023 11:57:41",
    duration: "12d 21h 52m 7s",
    statusinformation: "PING OK - Packet loss = 0%, RTA = 50.48 ms"
  },
  {
    // id: 3,
    host: "Akola-BB-Synoptics",
    status: "UP",
    lastcheck: "11-07-2023 11:57:13",
    duration: "2d 16h 44m 28s",
    statusinformation: "PING OK - Packet loss = 0%, RTA = 49.69 ms"
  },
  {
    // id: 4,
    host: "Ambala-BB-Local ",
    status: "UP",
    lastcheck: "11-07-2023 12:00:03",
    duration: "1d 2h 36m 36s",
    statusinformation: "PING OK - Packet loss = 0%, RTA = 50.12 ms"
  },
  
];
 
const dataCritical = [
  {
    // id: 1,
    hostc: "Agra-BB-Synoptics",
    statusc: "DOWN",
    lastcheckc: "11-02-2023 12:26:41",
    durationc: "389d 8h 12m 33s",
    statusinformationc: "(Host check timed out after 30.01 seconds)"
  },
  {
    // id: 2,
    hostc: "Amritsar-BB-Synoptics ",
    statusc: "DOWN",
    lastcheckc: "11-07-2023 11:58:25",
    durationc: "  441d 22h 34m 27s",
    statusinformationc: "(Host check timed out after 30.01 seconds) "
  },
  {
    // id: 3,
    hostc: "Gwalior-BB-Synoptics",
    statusc: "DOWN",
    lastcheckc: " 11-07-2023 12:00:00",
    durationc: "456d 0h 55m 24s",
    statusinformationc: "(Host check timed out after 30.01 seconds)"
  },
  {
    // id: 4,
    hostc: "Himmatnagar-BB-Synoptics ",
    statusc: "DOWN",
    lastcheckc: "11-07-2023 12:00:07",
    durationc: "67d 18h 32m 18s",
    statusinformationc: "(Host check timed out after 30.01 seconds)"
  },
];
// const hostData = data.concat(dataCritical);
const combinedArray = [...data, ...dataCritical];
 
const Hosts = () => {
//   const dataOk =[
//     {
//       id: 1,
//       host:'AIRTEL-13921609-KolkataZO',
//       status:'UP',
//       lastcheck:'11-02-2023 11:57:03',
//       duration:'5d 23h 21m 51s',
//       statusinformation:'PING OK - Packet loss = 0%, RTA = 58.42 ms'
//     }
// ];
 
// const dataCritical =[
//   {
//     id: 1,
//     host:'Agra-BB-Synoptics',
//     status:'DOWN',
//     lastcheck:'11-02-2023 12:26:41',
//     duration:'389d 8h 12m 33s',
//     statusinformation:'(Host check timed out after 30.01 seconds)'
//   }
// ];
 
// let obj = dataOk.map((e, i) => Object.assign({}, e, dataCritical[i]));
 
// console.log("objobjobj",obj);
 
// const people = [
//   {
//     id: 1,
//     host: "AIRTEL-13921609-KolkataZO",
//     status: "UP",
//     lastcheck:'11-02-2023 11:57:03',
//     duration:'5d 23h 21m 51s',
//     statusinformation:'PING OK - Packet loss = 0%, RTA = 58.42 ms'
//   },
//   {
//     id: 2,
//     host: "Airtel-13789199-Kalyani",
//     status: "UP",
//     lastcheck:'11-07-2023 10:57:41',
//     duration:'12d 20h 50m 19s',
//     statusinformation:'PING OK - Packet loss = 0%, RTA = 50.71 ms'
//   },
//   {
//     id: 3,
//     host: "Bhilai-BB-Alliant",
//     status: "UP",
//     lastcheck:'  11-07-2023 10:57:14',
//     duration:'2d 15h 42m 37s',
//     statusinformation:'PING OK - Packet loss = 0%, RTA = 40.24 ms'
//   },
 
//   {
//     id: 4,
//     host: "Bhilwara-BB-Synoptics",
//     status: "UP",
//     lastcheck:'  11-07-2023 10:58:09',
//     duration:'0d 2h 4m 8s',
//     statusinformation:'PING OK - Packet loss = 20%, RTA = 62.59 ms '
//   },
 
// ];
 
// const jobs = [
//   {
//     id: 1,
//     host: "Amritsar-BB-Synoptics",
//     status: "DOWN",
//     lastcheck:'11-07-2023 10:58:25',
//     duration:'441d 21h 32m 42s',
//     statusinformation:'(Host check timed out after 30.01 seconds)'
//   },
//   {
//     id: 2,
//     host: "Anand-BB-Synoptics",
//     status: "DOWN",
//     lastcheck:'11-07-2023 10:59:47',
//     duration:' 23d 10h 58m 8s',
//     statusinformation:'(Host check timed out after 30.01 seconds) '
//   },
//   {
//     id: 3,
//     host: "Anna Nagar-BB-Synoptics",
//     status: "DOWN",
//     lastcheck:'11-07-2023 10:59:49',
//     duration:'474d 18h 16m 3s',
//     statusinformation:'(Host check timed out after 30.01 seconds) '
//   },
 
//   {
//     id: 4,
//     host: "Calicut-BB-Synoptics",
//     status: "DOWN",
//     lastcheck:'11-07-2023 16:32:23',
//     duration:'268d 20h 12m 20s',
//     statusinformation:'  (Host check timed out after 30.00 seconds)  '
//   },
// ];
 
// let obj = people.map((e, i) => Object.assign({}, e, jobs[i]));
 
// const [data,setData]=useState([dataOk])
// const [dataCritical,setDataCritical]=useState([dataCriti])
 
// const children = data.concat(dataCritical);
 
 
// const [item,setItem]=useState([children])
 
// console.log("Itemmmmm",item);
 
// var finalArray = children.map(function (obj) {
//   return obj.name;
// });
 
// console.log("children",children);
 
 
// const jobs = [
//   {
//     id: 10021,
//     title: "Engineer",
//     status:'UP'
//   },
//   {
//     id: 10022,
//     title: "Quality Assurance",
//     status:'UP'
//   },
//   {
//     id: 10023,
//     title: "Product Owner",
//     status:'UP'
//   }
// ];
 
// let obj = people.map((e, i) => Object.assign({}, e, jobs[i]));
 
 
// console.log("datttttaaaaa",data);
 
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
      <Grid item xs={3}>
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Current Network Status</Typography>
          <Typography fontSize={"0.6rem"}>
            Last Updated: {currentDate} {time}
          </Typography>
          <Typography fontSize={"0.6rem"}> Updated every 90 seconds</Typography>
          <Typography fontSize={"0.6rem"}>Alchemy® Core™
            <span style={{ color: "#0284c7" }}>4.4.5 - www.alchemy.org </span>
          </Typography>
          <Typography fontSize={"0.6rem"}>Logged in as <i>alchemyadmin </i></Typography>
         <Grid mt={2}>
         <Typography fontSize={"0.6rem"} style={{cursor:'pointer',textDecoration:'underline',color:'#0284c7'}}>View Service Status Detail For All Host Groups</Typography>
          <Typography fontSize={"0.6rem"} style={{cursor:'pointer',textDecoration:'underline'}}>View Host Status Detail For All Host Groups</Typography>
          <Typography fontSize={"0.6rem"} style={{cursor:'pointer',textDecoration:'underline'}}>View Status Overview For All Host Groups</Typography>
          <Typography fontSize={"0.6rem"} style={{cursor:'pointer',textDecoration:'underline'}}>View Status Grid For All Host Groups</Typography>
         </Grid>
      </Grid>
      <Grid item xs={3}>
      <Typography fontSize={"0.9rem"} fontWeight={"bold"} textAlign={"center"}>Host Status Totals</Typography>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Up
          </Typography>
          <div style={{background:'#22c55e',width:'88%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>256</Typography>
          </div>
        </Grid>
        <Grid item xs={2}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Down
          </Typography>
          <div style={{background:'#f87171',width:'88%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>87</Typography>
          </div>
        </Grid>
        <Grid item xs={4.8}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Unreachable
          </Typography>
          <div style={{background:'#d1d5db',width:'95%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>7</Typography>
          </div>
        </Grid>
        <Grid item xs={2}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Pending
          </Typography>
          <div style={{background:'#d1d5db',width:'105%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>5</Typography>
          </div>
        </Grid>
      </Grid>
      <Grid mt={1}>
      <Grid container>
        <Grid item xs={4.8}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            <i>All Problems</i>
          </Typography>
          <div style={{background:'#0ea5e9',width:'95%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>42</Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            <i>All Types</i>
          </Typography>
          <div style={{background:'#d1d5db',width:'105%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>124</Typography>
          </div>
        </Grid>
      </Grid>
      </Grid>
      </Grid>
      <Grid item xs={3}>
      <Typography fontSize={"0.9rem"} fontWeight={"bold"} textAlign={"center"}>Service Status Totals</Typography>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Ok
          </Typography>
          <div style={{background:'#22c55e',width:'88%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>87</Typography>
          </div>
        </Grid>
        <Grid item xs={2.25}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Warning
          </Typography>
          <div style={{background:'#eab308',width:'88%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>75</Typography>
          </div>
        </Grid>
        <Grid item xs={3.1}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Unknown
          </Typography>
          <div style={{background:'#d1d5db',width:'91%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>4</Typography>
          </div>
        </Grid>
        <Grid item xs={2.5}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Critical
          </Typography>
          <div style={{background:'#f87171',width:'89%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>5</Typography>
          </div>
        </Grid>
        <Grid item xs={2}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            Pending
          </Typography>
          <div style={{background:'#d1d5db',width:'105%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>10</Typography>
          </div>
        </Grid>
      </Grid>
 
      <Grid mt={1}>
      <Grid container>
        <Grid item xs={4.8}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            <i>All Problems</i>
          </Typography>
          <div style={{background:'#0ea5e9',width:'95%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>90</Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
        <Typography fontSize={"0.7rem"} fontWeight={"bold"} color={"#1e40af"}>
            <i>All Types</i>
          </Typography>
          <div style={{background:'#d1d5db',width:'105%',height:'19px',border:'1px solid black '}}>
          <Typography style={{color:'white',fontWeight:'bold',fontSize:'0.7rem',textAlign:'center',padding:'0.1rem'}}>124</Typography>
          </div>
        </Grid>
      </Grid>
      </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Typography fontSize={"1rem"} fontWeight={"bold"} textAlign={"center"}>
      Host Status Details For All Host Groups
      </Typography>
    </Grid>
    <TableHeader/>
      <Grid sx={{height:'55.5vh',overflowY:'scroll'}}>
       
       {/* <TableDataOk combinedArray={combinedArray}/> */}
       
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        <TableDataCritical/>
        </Grid>
         <Grid container>
        <Grid item xs={11.9} sx={{display:'flex',justifyContent:'flex-end'}}>
        <Pagination count={10} size="small" />
        </Grid>
      </Grid>  
 
 
      {/* {data.map((items)=>{
        return(
          <>
          {items.name}
          </>
        )
      })} */}
 
{/* {combinedArray.map((items:any)=>{
  return(
    <>
    <div>
    <div>{items.host}</div>
    <div>{items.status}</div>
    <div>{items.lastcheck}</div>
    <div>{items.duration}</div>
    <div>{items.statusinformation}</div>
 
    </div>
 
<div>
<div>{items.hostc}</div>
<div>{items.statusc}</div>
<div>{items.lastcheckc}</div>
<div>{items.durationc}</div>
<div>{items.statusinformationc}</div>
 
</div>
</>
  )
})} */}
     
     </Box>
    </div>
  )
}
 
const TableHeader = () => {
  return(
  <>
   <Box mt={2} >
        <Grid container>
          <Grid item xs={3.1} ml={0.1}>
           <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Host
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
           </Grid>
          </Grid>
          <Grid item xs={1.17}>
            <Grid container>
 
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
             Status
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container>
            <Typography fontSize={"0.8rem"} variant="subtitle2" noWrap >
              Last Check
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
            </Grid>
          </Grid>
          <Grid item xs={1.6}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Duration
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container>
            <Typography variant="subtitle2" noWrap fontSize={"0.8rem"}>
              Status information
            </Typography>
            <ArrowDropDownIcon/>
              <ArrowDropUpIcon/>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  </>
  )
  }
 
  // const TableDataOk = ({combinedArray}:any) => {
  //     return(
  //     <>
     
  //     {combinedArray.map((items:any)=>{
  //         return(
  //      <Box mt={0.3}>
 
  //           <Grid container>
  //             <Grid item xs={3.1} sx={{background:'#bee8ba'}}>
  //              <Grid container sx={{display:'flex',alignItems:'center',}}>
  //               <Grid item xs={9}>
  //               <Typography fontSize={"0.7rem"} ml={'1rem'}>
  //               {items.host} 
  //               </Typography>
  //               </Grid>
  //               <Grid item xs={3} mt={0.2}>
  //                 <AutoGraphIcon style={{fontSize:'1rem'}}/>
  //                 <SearchIcon style={{fontSize:'1rem',marginLeft:'0.8rem'}}/>
  //               </Grid>
  //              </Grid>
  //             </Grid>
  //             <Grid item xs={1.14} sx={{background:'#bee8ba',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
  //               <Typography noWrap fontSize={"0.7rem"} ml={"0.2rem"}>
  //               {items.status}
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={1.99} sx={{background:'#e5e5e5',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
  //               <Typography fontSize={"0.7rem"}  noWrap display={"flex"} justifyContent={"space-around"}>
  //               {items.lastcheck}
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={1.6} sx={{background:'#e5e5e5',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
  //               <Typography display={"flex"} justifyContent={"space-around"} fontSize={"0.7rem"}>
  //               {items.duration}
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={4} sx={{background:'#e5e5e5',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
  //             <Typography fontSize={"0.7rem"}>
  //             {items.statusinformation}
  //               </Typography>  
  //             </Grid>
 
  //           </Grid>
       
 
           
         
  //       </Box>
  //       )
  //     })}
  //     </>
  //     )
  //     }
 
  const TableDataCritical = () => {
          return(
          <>
           <Box mt={0.3}>
            <Grid container>
              <Grid item xs={3.1} sx={{background:'#fee2e2'}}>
               <Grid container sx={{display:'flex',alignItems:'center',}}>
                <Grid item xs={9}>
                <Typography fontSize={"0.7rem"} ml={'1rem'}>
                Agra-BB-Synoptics
                </Typography>
                </Grid>
                <Grid item xs={3} mt={0.2}>
                  <AutoGraphIcon style={{fontSize:'1rem'}}/>
                  <SearchIcon style={{fontSize:'1rem',marginLeft:'0.8rem'}}/>
                </Grid>
               </Grid>
              </Grid>
              <Grid item xs={1.14} sx={{background:'#fee2e2',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
                <Typography noWrap fontSize={"0.7rem"} ml={"0.2rem"}>
                DOWN
                </Typography>
              </Grid>
              <Grid item xs={1.99} sx={{background:'#fee2e2',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
                <Typography fontSize={"0.7rem"}  noWrap display={"flex"} justifyContent={"space-around"}>
                11-02-2023 12:26:41
                </Typography>
              </Grid>
              <Grid item xs={1.6} sx={{background:'#fee2e2',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
                <Typography display={"flex"} justifyContent={"space-around"} fontSize={"0.7rem"}>
                389d 8h 12m 33s
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{background:'#fee2e2',marginLeft:'0.1rem',alignItems:'center',display:'flex'}}>
              <Typography fontSize={"0.7rem"}>
              (Host check timed out after 30.01 seconds)
                </Typography>  
              </Grid>
 
            </Grid>
         
        </Box>
          </>
          )
      }
 
export default Hosts
 