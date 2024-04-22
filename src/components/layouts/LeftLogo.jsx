import React from "react";
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Nav from "./Nav";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    height: '90vh', 
    justifyContent: 'space-between',
  },
  logo: {
    width: '160px',
    height: 'auto',
    position: 'fixed'
  },
  up: {
    background: 'transparent',
    position: 'fixed',
    top: '87vh'
  }
}

export default function LeftLogo() {
  return (
    <Grid
      container
      // flexDirection='column'
      style={styles.container}
    >
      {/* Logo */}
      <img src="src/assets/images/jaya-logo.png" alt="Logo" style={styles.logo} />
      {/* Nav */}
      <Nav style={styles.nav}/>
      {/* Return to top icon */}
      <Fab 
        color="primary" 
        aria-label="up"
        style={styles.up}
        >
        <KeyboardArrowUpIcon />
      </Fab>
    </Grid>
  );
}
