import { Box,  Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import {  useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import logo from './bg-banner.jpg'
import bgimage from './default-profile-picture.png'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Tabularview() {
    const { id  } = useParams();
  return (
    <Box m="20px">
       {/* <h2>Tabular Data : {id}</h2> */}
       {/* Add your detailed view content here */}
       <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* <Header title="Tabular Data : " subtitle="" /> */}
        <Box> <Typography variant='h3' >Tabular Data </Typography> </Box>

        <Box>
            {/* Dashboard - Tabular Data */}
            <Typography variant='h6' >Dashboard - Tabular Data </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center">
            
      </Box>
      <ResponsiveBanner />
    </Box>
  )
}

export default Tabularview

// Define overlay box styles
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
      height: '300px', // Adjust height for small and up screens
    },
    [theme.breakpoints.up('md')]: {
      height: '400px', // Adjust height for medium and up screens
    },
    [theme.breakpoints.up('lg')]: {
      height: '300px', // Adjust height for large and up screens
    },
  }));
  
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
    //   boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
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

  // Styled component for the responsive box
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

  function ResponsiveBanner() {
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
    
    {/* Overlay Box 1 */}
    <OverlayBox sx={{ top: 16, left: 16  }}>
      {/* <Typography variant="h6">Box 1 Title</Typography> */}
      <ResponsiveBox>
      <StyledBadge 
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
>
  <SmallAvatar  sx={{backgroundColor: 'white'}} alt="Remy Sharp" src={bgimage} />
</StyledBadge>
    <Box ml={{ xs: 0, sm: 2 }} mt={{ xs: 2, sm: 0 }} >
    <div>ielecssol (SAMPLE)</div>
        <div>6vj4mb04</div>
        <div>866496060549261</div>
    </Box>
      </ResponsiveBox>
     
    </OverlayBox>

    {/* Overlay Box 2 */}
    <OverlayBox sx={{ top: 16, right: 16 }}>
      <ResponsiveBox2 >
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

    {/* Overlay Box 3 */}
    <OverlayBox sx={{ top: 160, left: 16 }}>
            <ResponsiveBox  sx={{  gap: 3 }} >
            <Button variant="outlined"  sx={{ color: 'white', borderColor: 'white' }} >Parameters</Button>
            <Button variant="outlined"  sx={{ color: 'white', borderColor: 'white' }}>Alerts</Button>
            <Button variant="outlined"  sx={{ color: 'white', borderColor: 'white' }}>Faults</Button>
            <Button variant="outlined"  sx={{ color: 'white', borderColor: 'white' }}>Graphical</Button>
            <Button variant="outlined"  sx={{ color: 'white', borderColor: 'white' }}>Servicing</Button>
            <Button variant="outlined"  sx={{ color: 'white', borderColor: 'white' }}>Gallery</Button>
            </ResponsiveBox>
    </OverlayBox>

    {/* Overlay Box 2 */}
    <OverlayBox sx={{ top: 160, right: 16 }}>
    {/* <Button variant="contained"   sx={{ color: 'white'}}>Edit Controller</Button> */}
    <Button variant="contained">Edit Controller</Button>
    </OverlayBox>
  </Box>
    );
  }