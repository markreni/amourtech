import useMenu from './useMenu'
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
import { Container, AppBar, Toolbar, Stack, Button, Box, useMediaQuery, Menu, MenuItem } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'

function App() {
  const navigate = useNavigate()
  const menu = useMenu()

  const isMatch = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters sx={containerStyling}>
        <Box sx={backgroundImageStyling}>
          <div>
            <AppBar color="primary" position="static" elevation={1} sx={navigationBarStyling}>
              <Toolbar variant="dense" >
                {!isMatch &&
                  <Stack direction='row' spacing={1} sx={{}} >
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
                }

                {isMatch &&
                <div>
                  <MenuIcon
                    id='resources-button'
                    onClick={menu.handleClick}
                    aria-controls={menu.open ? 'resources-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={menu.open ? 'true' : undefined}
                  />
                  <Menu
                    id='resources-menu'
                    anchorEl={menu.anchorEl}
                    open={menu.open}
                    MenuListProps={{
                      'aria-labelledby': 'resources-button',
                    }}
                    onClose={menu.handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 30, left: 20 }}
                  >
                    <MenuItem onClick={menu.handleClose}><Button color="inherit" component={Link} to="/">
                  Bio
                    </Button></MenuItem>
                    <MenuItem onClick={menu.handleClose}><Button color="inherit" component={Link} to="/gigs">
                  Gigs
                    </Button></MenuItem>
                    <MenuItem onClick={menu.handleClose}><Button color="inherit" component={Link} to="/contact">
                  Contact
                    </Button></MenuItem>
                  </Menu>
                </div>
                }
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
          <div>
            <Footer />
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
