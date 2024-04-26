import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
// import TrackVisibility from 'react-on-screen';

// Completely rework color pallete 
const theme = createTheme({
  palette: {
    // background: {
    //   default: '#EDBAAB',
    // },
    primary: {
      main: '#000000',
      // light: '#EFEAE3',
      // dark: '#655446',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      // light: '#EFEAE3',
      // dark: '#655446',
      contrastText: '#000000',
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 670,
      md: 900,
      lg: 1024,
      xl: 1200
    }
  }
});


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      {/* <TrackVisibility> */}
      <CssBaseline />
      <main>
        <Outlet />
      </main>
      {/* </TrackVisibility> */}
    </ThemeProvider>
    </>
  );
}

export default App;
