import Bio from './components/Bio'
import Gigs from './components/Gigs'
import Footer from './components/Footer'
import Social from './components/Social'
import Contact from './components/Contact'
import logo from './images/logo.png'

import {
  useNavigate,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import { containerStyling, backgroundImageStyling, navigationBarStyling, logoStyling, theme } from './styling'
import { Container, AppBar, Toolbar, Stack, Button, Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

function App() {
  const navigate = useNavigate()

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters sx={containerStyling}>
        <Box sx={backgroundImageStyling}>
          <div>
            <AppBar color="primary" position="static" elevation={1} sx={navigationBarStyling}>
              <Toolbar variant="dense" >
                <Stack direction='row' spacing={1} sx={{ flexGrow: 0.95 }} >
                  <Button color="inherit" component={Link} to="/">
                    Bio
                  </Button>
                  <Button color="inherit" component={Link} to="/gigs">
                    Gigs
                  </Button>
                  <Button color="inherit" component={Link} to="/contact">
                    Contact
                  </Button>
                </Stack>
                <Box onClick={() => navigate('/')} component='img' alt={'Amourtech'} src={logo} sx={logoStyling} />
              </Toolbar>
            </AppBar>
          </div>
          <div>
            <Routes>
              <Route path="/contact" element={<Contact/>} />
              <Route path="/gigs" element={<Gigs />} />
              <Route path="/" element={<Bio />} />
            </Routes>
          </div>
          <div>
            <Social />
          </div>
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App
