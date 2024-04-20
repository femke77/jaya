// // import { Grid } from "@mui/material";
// import { Container, Box } from "@mui/system";
// import React from "react";
// import { ArrowRight } from "@mui/icons-material";

// export default function Intro() {
//     return (
//         <Box>
//             {/* <Box> */}
//         <h2>Jaya Baldwin</h2>
//         <h1>Web +</h1>
//         <h1>Developer</h1>
//         <h3>Lets connect <ArrowRight /></h3>
//             {/* </Box> */}
//         </Box>
//     )
// };

import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Item = styled('div')(() => ({
  backgroundColor: 'transparent',
  marginTop: '12rem',
  marginBottom: '18rem'
}));

const styles = {
    dev: {
        marginTop: '-30px'
    }
}

export default function Intro() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item
            sx={{
                textAlign: 'left'
            }}>
            <h2>Jaya Baldwin</h2>
            <h1>Web +</h1>
            <h1 style={styles.dev}>Developer</h1>
            <h3>Lets connect <ArrowCircleRightOutlinedIcon fontSize='medium' /></h3>
          </Item>
        </Grid>
      </Grid>
    // </Box>
  );
}