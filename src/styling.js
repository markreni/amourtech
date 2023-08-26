import { createTheme } from '@mui/material/styles'
import imageBig from './images/amourtech_frontpage_big.jpg'
import imageSmall from './images/amourtech_frontpage_small.jpg'

export const theme = createTheme({
  palette: {
    primary: {
      //light: '#f8bbd0',
      main: '#040406',
      dark: '#0B0B0D',
      //contrastText: '#880e4f',
    },
    secondary: {
      //light: '#f8bbd0',
      main: '#FFFFFF',
      dark: '#0000FF',
      //contrastText: '#880e4f',
    },
  },
  typography: {
    fontFamily: 'Monospace, Arial',
    fontSize: 16
  },
  components: {
    MuiContainer: {
      styleOverrides: {
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 'max(1.5vw, 12px)',
          fontWeight: 300,
          fontFamily: 'Oswald, Arial',
          '&:hover': { opacity: '50%' }
        },
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 'max(15px, 1.4vw)',
          color: 'white'
        },
        caption: {
          fontSize: 17,
          color: 'white',
          textDecoration: 'none',
        },
        h1: {
          fontSize: 'max(25px, 3vw)',
          color: 'white',
          textDecoration: 'none',
        },
        h2: {
          fontSize: 'max(20px, 2vw)',
          color: 'white',
          textDecoration: 'none',
        },
        h4: {
          fontSize: 'max(15px, 1.1vw)',
          color: 'black',
          textDecoration: 'none',
        },
        body1: {
          fontSize: 'max(17px, 1.1vw)',
          color: 'white',
          textDecoration: 'none',
        },
        body2: {
          fontSize: 'max(10px, 1.5vw)',
          color: 'white',
          textDecoration: 'none',
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: '50px',
          height: '50px',
          backgroundColor: 'transparent',
          '&:hover': { opacity: '50%' }
        }
      }
    }
  }
})

export const containerStyling = {
  height: '100vh',
  width: '100vw',
  //maxHeight: '1000px',
  margin: '0px',
  opacity: '80%'
}

export const backgroundImageStyling = {
  backgroundImage: {
    xs: `url(${imageSmall})`,
    md: `url(${imageBig})`
  },
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100%',
  maxHeight: '100vh',
  opacity: '80%',
  backgroundPosition: 'right',
}

export const navigationBarStyling = {
  color: 'white',
  background: 'transparent',
  boxShadow: 'none',
}

export const logoStyling = {
  position: 'absolute',
  right: '0vw',
  top: '0vw',
  backgroundSize: 'contain',
  height: '14vw',
  '&:hover': { opacity: '50%' }
}

export const socialMediaStyling = {
  position: 'absolute',
  right: 'max(5vw, 100px)',
  top: 'max(40vh, 130px)',
  width: '200px',
  height: '100px',
  justifyContent: 'center',
}

export const gigBoxStyling = {
  width: '75vw',
  minWidth: 'max(320px, 60vw)',
  maxWidth: 'min(80vw, 600px)',
  height: '70vh',
  marginTop: '7vh',
  marginLeft: 'max(30px, 5vw)',
  overflow: 'hidden'
}

export const gigCardStyling = {
  width: '75vw',
  minWidth: 'max(320px, 60vw)',
  maxWidth: 'min(80vw, 600px)',
  height: '65vh',
  backgroundColor: 'RGB(255,255,255,0.1)',
  color: 'secondary.main',
  marginTop: '2vh',
  overflow: 'scroll'
}

export const footerStyling = {
  position: 'fixed',
  bottom: '0vh',
  backgroundColor: 'primary.main',
  width:'95vw',
  minWidth: 'max(100px, 95vw)',
  //marginTop: '10px',
}

export const contactStyling = {
  width: '75vw',
  height: '75vh',
  background: 'transparent',
  borderColor: 'RGB(255,255,255,0.1)',
  //borderStyle: 'solid',
  borderRadius: '10px',
  display: 'static',
  marginTop: '7vh',
  marginLeft: 'max(30px, 5vw)',
  overflow: 'scroll'
}