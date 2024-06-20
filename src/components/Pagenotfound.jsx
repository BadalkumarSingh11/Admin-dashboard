// import React from 'react'
// // import pagenotfound from '../../public/assets/404page.webp'
// import "../Normal Css/Pagenotfound.css"
// function Pagenotfound() {
//     return (
//         <div>
//             {/* <!--Square--> */}
//             <div class="Square404" id="Square">
//                 <div class="Square">
//                     {/* <!--404 inside the square--> */}
//                     <h1>404</h1>
//                 </div>
//             </div>
//             {/* 
// <!--Texts--> */}
//             <div class="texts">
//                 <h4>Oops! page not found</h4>
//                 <p>The page you are looking for does not exist. Go back to the main page or search.</p>
//                 {/* <a href="../../index.html" class="btn">Back to Home</a> */}
//                 <label for="search_box"></label><input type="search" name="search" id="search_box" placeholder="Search" />
//             </div>
//         </div>
//     )
// }

// export default Pagenotfound

// src/Pagenotfound.js
import React from 'react';
import { Container, Box, Typography, TextField,  } from '@mui/material';
import { styled } from '@mui/system';
// import React, { useContext } from 'react';
// import { Container, Box, Typography, TextField, Button } from '@mui/material';
// import {  useTheme } from '@mui/system';
// import { ColorModeContext } from './theme';
const Square = styled(Box)(({ theme }) => ({
  width: '20vw',
  height: '20vw',
  position: 'absolute',
  borderRadius: '1.2rem',
  background: '#1F2A40',
  boxShadow: `#d0d1d5 0 0 5px 30px,
              #040509 0 0 10px 60px,
             #0f2922 0 0 15px 90px,
              #dbf5ee 0 0 20px 120px,
              #dbf5ee 0 0 25px 150px`,
//   background: theme.palette.primary.main,
//   boxShadow: `${theme.palette.primary.light} 0 0 5px 30px,
//               ${theme.palette.primary.dark} 0 0 10px 60px,
//               ${theme.palette.secondary.light} 0 0 15px 90px,
//               ${theme.palette.secondary.dark} 0 0 20px 120px,
//               ${theme.palette.grey[900]} 0 0 25px 150px`,
  transform: 'rotateZ(-21deg)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
}));
const PageNotFound = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          mb: 4,
        }}
      >
        <Square sx={{ bgcolor : '#1F2A40'}}>
          <Typography variant="h1" component="h1" sx={{ fontSize: '10vw', color: 'background.default', userSelect: 'none', textShadow: '0 0 2px rgba(0, 0, 0, .6)' }}>
            404
          </Typography>
        </Square>
      </Box>
      <Box sx={{ zIndex: 5, p: 2, width: '100%', maxWidth: '500px' }}>
        <Typography variant="h4" component="h4" gutterBottom>
          Oops! Page not found
        </Typography>
        <Typography variant="body1" gutterBottom>
          The page you are looking for does not exist. Go back to the main page or search.
        </Typography>
        <TextField
          id="search_box"
          variant="outlined"
          placeholder="Search"
          fullWidth
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              color: 'rgba(255, 255, 255, 0.5)',
              '&.Mui-focused fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
            },
          }}
        />
        {/* Uncomment the below line to add a Back to Home button */}
        {/* <Button href="/" variant="contained" color="primary" sx={{ mt: 2 }}>Back to Home</Button> */}
      </Box>
    </Container>
  );
};

export default PageNotFound;
