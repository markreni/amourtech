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
          fontSize: 'max(1.5vw, 15px)',
          fontWeight: 300,
          fontFamily: 'Oswald, Arial',
          '&:hover': { opacity: '50%' }
        },
        /* contained: {
          fontFamily: 'sans-serif',
          fontWeight: 'lighter',
          fontSize: 17,
          padding: '1px 10px',
          marginTop: '5px'
        } */
      }
    },
    /* MuiTextField: {
      styleOverrides: {
        root: {
          height: '10px',
          marginBottom: 40,
          input: {
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #f8bbd0 inset',
              WebkitTextFillColor: 'default',
            },
          },
        },
      }
    }, */
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
        h4: {
          fontSize: 'max(15px, 1.1vw)',
          color: 'black',
          textDecoration: 'none',
        },
        body1: {
          fontSize: 'max(17px, 1.1vw)',
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
  height: '70vh',
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
  height: '150%',
  width: '100%',
  maxHeight: '150%',
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
  right: '-1.5vw',
  top: '0vw',
  backgroundSize: 'contain',
  height: '14vw',
  '&:hover': { opacity: '50%' }
}

export const socialMediaStyling = {
  position: 'absolute',
  right: 'max(18vw, 200px)',
  top: 'max(25vh, 130px)',
  width: '40px',
}

export const gigStyling = {
  width: '80vw',
  minWidth: 'max(320px, 60vw)',
  maxWidth: 'min(80vw, 600px)',
  height: '75vh',
  backgroundColor: 'RGB(255,255,255,0.1)',
  color: 'secondary.main',
  marginTop: '7vh',
  marginLeft: 'max(30px, 5vw)',
  overflow: 'scroll'
}