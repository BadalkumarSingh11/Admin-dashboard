// import { Box,  Typography } from '@mui/material';
// import React from 'react'
// import { useParams } from 'react-router-dom';
// import {  useMediaQuery } from '@mui/material';
// import { styled } from '@mui/system';
// import logo from './bg-banner.jpg'
// import bgimage from './default-profile-picture.png'
// import Badge from '@mui/material/Badge';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// function Tabularview() {
//     const { id  } = useParams();
//   return (
//     <Box m="20px">
//        {/* <h2>Tabular Data : {id}</h2> */}
//        {/* Add your detailed view content here */}
//        <Box display="flex" justifyContent="space-between" alignItems="center">
//         {/* <Header title="Tabular Data : " subtitle="" /> */}
//         <Box> <Typography variant='h3' >Tabular Data </Typography> </Box>

//         <Box>
//             {/* Dashboard - Tabular Data */}
//             <Typography variant='h6' >Dashboard - Tabular Data </Typography>
//         </Box>
//       </Box>

//       <Box display="flex" justifyContent="space-between" alignItems="center">
            
//       </Box>
//       <ResponsiveBanner />
//     </Box>
//   )
// }

// export default Tabularview

// // Define overlay box styles
// const OverlayBox = styled(Box)(({ theme }) => ({
//     position: 'absolute',
//     color: 'white',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: theme.spacing(2),
//     borderRadius: theme.shape.borderRadius,
//   }));
  


// const BannerImage = styled('img')(({ theme }) => ({
//     width: '100%',
//     height: 'auto',
//     [theme.breakpoints.up('sm')]: {
//       height: '300px', // Adjust height for small and up screens
//     },
//     [theme.breakpoints.up('md')]: {
//       height: '400px', // Adjust height for medium and up screens
//     },
//     [theme.breakpoints.up('lg')]: {
//       height: '300px', // Adjust height for large and up screens
//     },
//   }));
  
//   const StyledBadge = styled(Badge)(({ theme }) => ({
//     '& .MuiBadge-badge': {
//       backgroundColor: '#44b700',
//       color: '#44b700',
//     //   boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//       '&::after': {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         borderRadius: '50%',
//         animation: 'ripple 1.2s infinite ease-in-out',
//         border: '1px solid currentColor',
//         content: '""',
//       },
//     },
//     '@keyframes ripple': {
//       '0%': {
//         transform: 'scale(.8)',
//         opacity: 1,
//       },
//       '100%': {
//         transform: 'scale(2.4)',
//         opacity: 0,
//       },
//     },
//   }));
//   const SmallAvatar = styled(Avatar)(({ theme }) => ({
//     width: 80,
//     height: 80,
//     border: `2px solid ${theme.palette.background.paper}`,
//   }));

//   const ResponsiveBox = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: 'column',
//       alignItems: 'flex-start',
//     },
//   }));

//   // Styled component for the responsive box
// const ResponsiveBox2 = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     [theme.breakpoints.up('md')]: {
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   }));

//   function ResponsiveBanner() {
//     const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
  
//     return (
//     <Box
//     sx={{
//       position: 'relative',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: isSmallScreen ? '200px' : 'auto',
//       overflow: 'hidden',
//     }}
//   >
//  <BannerImage src={logo} alt="Banner Image" />
    
//     {/* Overlay Box 1 */}
//     <OverlayBox sx={{ top: 16, left: 16  }}>
//       {/* <Typography variant="h6">Box 1 Title</Typography> */}
//       <ResponsiveBox>
//       <StyledBadge 
//   overlap="circular"
//   anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//   variant="dot"
// >
//   <SmallAvatar  sx={{backgroundColor: 'white'}} alt="Remy Sharp" src={bgimage} />
// </StyledBadge>
//     <Box ml={{ xs: 0, sm: 2 }} mt={{ xs: 2, sm: 0 }} >
//     <div>ielecssol (SAMPLE)</div>
//         <div>6vj4mb04</div>
//         <div>866496060549261</div>
//     </Box>
//       </ResponsiveBox>
     
//     </OverlayBox>

//     {/* Overlay Box 2 */}
//     <OverlayBox sx={{ top: 16, right: 16 }}>
//       <ResponsiveBox2 >
//       <Box>
//           <Typography variant="h6">System Status</Typography>
//           <img src="https://via.placeholder.com/100" alt="System Status" height={10} />
//         </Box>
//         <Box>
//           <Typography variant="body1">N/A</Typography>
//           <Typography variant="caption">LONGITUDE</Typography>
//         </Box>
//         <Box>
//           <Typography variant="body1">N/A</Typography>
//           <Typography variant="caption">LATITUDE</Typography>
//         </Box>
//       </ResponsiveBox2>
//     </OverlayBox>

//     {/* Overlay Box 3 */}
//     <OverlayBox sx={{ top: 160, left: 16 }}>
//             <ResponsiveBox  sx={{  gap: 3 }} >
//             <Button variant="outlined"  sx={{ color: 'white', borderColor: 'white' }} >Parameters</Button>
//             <Button variant="outlined"  sx={{ color: 'white', borderColor: 'white' }}>Alerts</Button>
//             <Button variant="outlined"  sx={{ color: 'white', borderColor: 'white' }}>Faults</Button>
//             <Button variant="outlined"  sx={{ color: 'white', borderColor: 'white' }}>Graphical</Button>
//             <Button variant="outlined"  sx={{ color: 'white', borderColor: 'white' }}>Servicing</Button>
//             <Button variant="outlined"  sx={{ color: 'white', borderColor: 'white' }}>Gallery</Button>
//             </ResponsiveBox>
//     </OverlayBox>

//     {/* Overlay Box 2 */}
//     <OverlayBox sx={{ top: 160, right: 16 }}>
//     {/* <Button variant="contained"   sx={{ color: 'white'}}>Edit Controller</Button> */}
//     <Button variant="contained">Edit Controller</Button>
//     </OverlayBox>
//   </Box>
//     );
//   }

import React, { useState } from 'react';
import { Box, Typography, useMediaQuery, Badge, Avatar, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom';
import logo from './bg-banner.jpg';
import bgimage from './default-profile-picture.png';
// import ParameterSection from './ParameterSection';
import { TextField, MenuItem, Select, InputLabel, FormControl, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
// import { styled } from '@mui/system';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DataGrid } from '@mui/x-data-grid';
import TrafficIcon from "@mui/icons-material/Traffic";
import EmailIcon from "@mui/icons-material/Email";

// import { BarChart } from '@mui/x-charts/BarChart';
import Line from '../line/index';
import { tokens } from '../../theme';
import {useTheme} from '@mui/material';
// import StatBox from './StatBox';
import StatBox from '../../components/StatBox'
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
// Define styled components
const OverlayBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));
 const BannerImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  [theme.breakpoints.up('sm')]: {
    height: '300px',
  },
  [theme.breakpoints.up('md')]: {
    height: '400px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '300px',
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const ResponsiveBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

const ResponsiveBox2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  '& > *': {
    margin: theme.spacing(1),
  },
}));

// ResponsiveBanner component
function ResponsiveBanner({ handleButtonClick }) {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: isSmallScreen ? '200px' : 'auto',
        overflow: 'hidden',
      }}
    >
      <BannerImage src={logo} alt="Banner Image" />

      <OverlayBox sx={{ top: 16, left: 16 }}>
        <ResponsiveBox>
          <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
            <SmallAvatar sx={{ backgroundColor: 'white' }} alt="Remy Sharp" src={bgimage} />
          </StyledBadge>
          <Box ml={{ xs: 0, sm: 2 }} mt={{ xs: 2, sm: 0 }}>
            <div>ielecssol (SAMPLE)</div>
            <div>6vj4mb04</div>
            <div>866496060549261</div>
          </Box>
        </ResponsiveBox>
      </OverlayBox>

      <OverlayBox sx={{ top: 16, right: 16 }}>
        <ResponsiveBox2>
          <Box>
            <Typography variant="h6">System Status</Typography>
            <img src="https://via.placeholder.com/100" alt="System Status" height={10} />
          </Box>
          <Box>
            <Typography variant="body1">N/A</Typography>
            <Typography variant="caption">LONGITUDE</Typography>
          </Box>
          <Box>
            <Typography variant="body1">N/A</Typography>
            <Typography variant="caption">LATITUDE</Typography>
          </Box>
        </ResponsiveBox2>
      </OverlayBox>

      <OverlayBox sx={{ top: 160, left: 16 }}>
        <ResponsiveBox sx={{ gap: 3 }}>
          <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }} onClick={() => handleButtonClick('parameters')}>Parameters</Button>
          <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}  onClick={() => handleButtonClick('showAlert')}>Alerts</Button>
          <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}   onClick={() => handleButtonClick('showFault')}>Faults</Button>
          <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }} onClick={() => handleButtonClick('graphs')} > Graphical </Button>
          <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>Servicing</Button>
          <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>Gallery</Button>
        </ResponsiveBox>
      </OverlayBox>

      <OverlayBox sx={{ top: 160, right: 16 }}>
        <Button variant="contained">Edit Controller</Button>
      </OverlayBox>

      <OverlayBox sx={{ top: 180, right: 16 }} >
          
      </OverlayBox>
    </Box>
  );
}

// Main component
function Tabularview() {
  const { id } = useParams();
  const [showParameters, setShowParameters] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [faults, setShowFaults] = useState(false);
  const [graphs, setGraphs] = useState(false);

  const handleButtonClick = (buttonType) => {
    if (buttonType === 'parameters') {
      setShowAlert(false);
      setShowFaults(false);
      setGraphs(false);
      setShowParameters(true);
    } else if (buttonType === 'showAlert') {
      setShowAlert(true);
      setShowFaults(false);
      setGraphs(false);
      setShowParameters(false);
    } else if (buttonType === 'showFault') {
      setShowAlert(false);
      setShowFaults(true);
      setGraphs(false);
      setShowParameters(false);
    } else if (buttonType === 'graphs') {
      setShowAlert(false);
      setShowFaults(false);
      setGraphs(true);
      setShowParameters(false);
    }
  };

  const exportData = () => {
    console.log('Exporting data...');
    // Implement export logic here
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant='h3'>Tabular Data</Typography>
        </Box>
        <Box>
          <Typography variant='h6'>Dashboard - Tabular Data</Typography>
        </Box>
      </Box>
      <ResponsiveBanner handleButtonClick={handleButtonClick} />
      {showParameters && (
        <ParameterSection
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          exportData={exportData}
        />
      )}
      {showAlert && <AlertSection />}
      {faults && <FaultSection />}
      {graphs && <Graphical />}
    </Box>
  );
}
export default Tabularview;
// import React, { useState } from 'react';
const OverlayBoxBottom = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  // left:'50px',
  top:'350px',
  width: '75%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

function ParameterSection({ rowsPerPage, setRowsPerPage, searchTerm, setSearchTerm, exportData }) {
  const [dateRange, setDateRange] = useState(null);
  const handleDateChange = (newValue) => {
    setDateRange(newValue);
  };
  const handleExport = () => {
    exportData();
  };
  let data = [];
  for (let i = 1; i <= 50; i++) {
    data.push({
      id: i,
      serialNumber: i,
      date: `2024-06-${i.toString().padStart(2, '0')}`,
      time: `12:00 PM`,
      pvParameters: `PV Param ${i}`,
      loadOnOff: `Load ${i % 2 === 0 ? 'On' : 'Off'}`,
      brightnessLevel: `${Math.floor(Math.random() * 100)}%`,
      pvVoltage: `${(Math.random() * 20 + 10).toFixed(2)}V`,
      pvCurrent: `${(Math.random() * 5 + 2).toFixed(2)}A`,
      pvPower: `${(Math.random() * 100).toFixed(2)}W`,
      batteryVoltage: `${(Math.random() * 12).toFixed(2)}V`,
      batteryCurrent: `${(Math.random() * 2).toFixed(2)}A`,
      batteryPower: `${(Math.random() * 20).toFixed(2)}W`,
      loadVoltage: `${(Math.random() * 10).toFixed(2)}V`,
      loadCurrent: `${(Math.random() * 1).toFixed(2)}A`,
      loadPower: `${(Math.random() * 10).toFixed(2)}W`,
    });
  }

  const columns = [
    { field: 'serialNumber', headerName: 'S.No', width: 90 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'time', headerName: 'Time', width: 130 },
    { field: 'pvParameters', headerName: 'PV Parameters', width: 150 },
    { field: 'loadOnOff', headerName: 'Load On/Off', width: 120 },
    { field: 'brightnessLevel', headerName: 'Brightness Level', width: 150 },
    { field: 'pvVoltage', headerName: 'PV Voltage', width: 120 },
    { field: 'pvCurrent', headerName: 'PV Current', width: 120 },
    { field: 'pvPower', headerName: 'PV Power', width: 120 },
    { field: 'batteryVoltage', headerName: 'Battery Voltage', width: 150 },
    { field: 'batteryCurrent', headerName: 'Battery Current', width: 150 },
    { field: 'batteryPower', headerName: 'Battery Power', width: 150 },
    { field: 'loadVoltage', headerName: 'Load Voltage', width: 120 },
    { field: 'loadCurrent', headerName: 'Load Current', width: 120 },
    { field: 'loadPower', headerName: 'Load Power', width: 120 },
  ];

  return (
    <OverlayBoxBottom>
      <Box display="flex" flexDirection="column" gap={2}>
        <Box>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
           initialState={{
            // ...data.initialState,
            pagination: { paginationModel: { pageSize: 15, page: 0 }, },
          }}
          pageSizeOptions={[5, 10, 25]}
            rows={data}
            columns={columns}
            disableSelectionOnClick
            autoPageSize
          />
        </Box>
        </Box>
      </Box>
    </OverlayBoxBottom>
  );
}

function AlertSection(){
  let data = [];
  for (let i = 1; i <= 50; i++) {
    data.push({
      id: i,
      serialNumber: i,
      luminaireOnTime: `08:00 PM`,  // Example data
      luminaireOffTime: `06:00 AM`, // Example data
      batteryStateOfCharge: `${Math.floor(Math.random() * 100)}`, // Adjusted to remove '%' for consistency
      batteryDOD: `${Math.floor(Math.random() * 100)}`, // Adjusted to remove '%' for consistency
    });
  }

  const columns = [
    { field: 'luminaireOnTime', headerName: 'Luminaire On Time', width: 150 },
    { field: 'luminaireOffTime', headerName: 'Luminaire Off Time', width: 150 },
    { field: 'batteryStateOfCharge', headerName: 'Battery State of Charge (%)', width: 200 },
    { field: 'batteryDOD', headerName: 'Battery DOD', width: 150 },
    { field: 'serialNumber', headerName: 'S.No', width: 90 },
  ];

  return (
    <OverlayBoxBottom>
      <Box display="flex" flexDirection="column" gap={2}>
        <Box>
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              initialState={{
                pagination: { paginationModel: { pageSize: 15, page: 0 } },
              }}
              pageSizeOptions={[5, 10, 25]}
              columns={columns}
              rows={data}
              disableSelectionOnClick
              autoPageSize
            />
          </Box>
        </Box>
      </Box>
    </OverlayBoxBottom>
  );
}

function FaultSection(){
  let data = [];
  for (let i = 1; i <= 50; i++) {
    data.push({

      
      id: i,
      serialNumber: i,
      date: `2024-06-${i.toString().padStart(2, '0')}`,
      time: `12:00 PM`,
      batteryFault: `Battery Fault ${i}`,
      moduleFault: `Module Fault ${i}`,
      luminaryFault: `Luminary Fault ${i}`,
      faultRectificationDate: `2024-07-${i.toString().padStart(2, '0')}`,
    });
  }

  const columns = [
    { field: 'serialNumber', headerName: 'S.No', width: 90 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'time', headerName: 'Time', width: 150 },
    { field: 'batteryFault', headerName: 'Battery Fault', width: 150 },
    { field: 'moduleFault', headerName: 'Module Fault', width: 150 },
    { field: 'luminaryFault', headerName: 'Luminary Fault', width: 150 },
    { field: 'faultRectificationDate', headerName: 'Fault Rectification Date', width: 200 },
  ];

  // S.No	Date	Time	Luminaire On Time	Luminaire Off Time	Battery Sate of charge (%)	Battery DOD(%)

  return(
    <OverlayBoxBottom>
    <Box display="flex" flexDirection="column" gap={2}>
      <Box>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
         initialState={{
          // ...data.initialState,
          pagination: { paginationModel: { pageSize: 15, page: 0 }, },

          
        }}
        pageSizeOptions={[5, 10, 25]}
          rows={data}
          columns={columns}
          disableSelectionOnClick
          autoPageSize
        />
      </Box>
      </Box>
    </Box>
  </OverlayBoxBottom>
  )
}

function Graphical(){
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return(
    <OverlayBoxBottom   >
    <Box display="flex" flexDirection="column" gap={2}>
        <Line />
        <Box sx={{ width: 'calc(100% - 20px)', margin: '20px auto' }}>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="10px"
        justifyContent="space-between"
      >
        <Box
          flex="1 1 calc(25% - 10px)"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth="240px"
        >
          <StatBox
            title="92.21"
            subtitle="CO2 EMISSION REDUCED"
            // progress="0.75"
            // increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          flex="1 1 calc(25% - 10px)"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth="240px"
        >
          <StatBox
            title="97.07 KWH"
            subtitle="ENERGY SAVING"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          flex="1 1 calc(25% - 10px)"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth="240px"
        >
          <StatBox
            title="7.4"
            subtitle="100% BRIGHTNESS HRS"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          flex="1 1 calc(25% - 10px)"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth="240px"
        >
          <StatBox
            title="3.8"
            subtitle="50% BRIGHTNESS HRS"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
    </Box>
  </OverlayBoxBottom>
  )
}