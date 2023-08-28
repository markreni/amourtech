import { useState } from 'react'
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
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()

  const isMatch = useMediaQuery(theme.breakpoints.down('xs'))

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

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
                    onClick={handleClick}
                    aria-control={open ? 'resources-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                  />
                  <Menu
                    id='resources-menu'
                    anchorEl={anchorEl}
                    open={open}
                    MenuListProps={{
                      'aria-labelledby': 'resources-button',
                    }}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right'
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                  >
                    <MenuItem onClick={handleClose}><Button color="inherit" component={Link} to="/">
                  Bio
                    </Button></MenuItem>
                    <MenuItem onClick={handleClose}><Button color="inherit" component={Link} to="/gigs">
                  Gigs
                    </Button></MenuItem>
                    <MenuItem onClick={handleClose}><Button color="inherit" component={Link} to="/contact">
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
          <Social />
          <div>
            <Footer />
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
