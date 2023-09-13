import useMenu from '../useMenu'
import { socialMediaStyling } from '../styling'
import { Stack, Avatar, Typography } from '@mui/material'
import SoundCloudIcon from '../images/soundcloud.png'
import MixCloudIcon from '../images/mixcloud.png'
import FacebookIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Icon from '@mui/material/Icon'
import { useMediaQuery, useTheme, Menu, MenuItem, Button, Box } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Social = () => {
  const theme = useTheme()
  const menu = useMenu()

  const isWidth = useMediaQuery(theme.breakpoints.down('lg'))
  const isSmallestSpace = useMediaQuery(theme.breakpoints.down('md'))
  const isHeight = useMediaQuery('(min-height: 700px)')
  const isMenu = useMediaQuery(theme.breakpoints.down('xs'))
  const direction = isWidth || !isHeight ? 'row' : 'column'
  const paddingBottom = isWidth || !isHeight ? 0.8 : 0
  const spacing = isSmallestSpace ? 0 : !isHeight ? 2 : 3
  const size = isSmallestSpace ? 'medium' : 'medium'
  const sizeIcons = isSmallestSpace ? 0.7 : 0.7
  const socialMediaStylingRow =
  isMenu ? {
    position: 'fixed',
    left: 'max(5vw, 30px)',
    top: '90vh',
    width: 'clamp(50vw, 65vw, 75vw)',
  } :
    isWidth ? {
      position: 'fixed',
      left: '0',
      height: 'auto',
      top: 'none',
      bottom: '0vh',
      paddingBottom: '15px',
      opacity: '70%',
      backgroundColor: 'primary.main',
      width: 'clamp(50vw, 100vw, 100vw)',
    } : !isHeight ? {
      position: 'absolute',
      left: 'max(70vw, 0px)',
      top: 'max(58vh, 130px)',
      width: 'clamp(20vw, 25vw, 30vw)',
    } : {}

  return(
    <div>
      {isMenu &&
        <Box sx={{ ...socialMediaStyling, ...socialMediaStylingRow }}>
          <Button
            id='resources-button'
            onClick={menu.handleClick}
            aria-controls={menu.open ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={menu.open ? 'true' : undefined}
            endIcon={ <KeyboardArrowDownIcon />}
          >
          Social media
          </Button>
          <Menu
            id='resources-menu'
            anchorEl={menu.anchorEl}
            open={menu.open}
            MenuListProps={{
              'aria-labelledby': 'resources-button',
            }}
            onClose={menu.handleClose}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 1000, left: 300 }}
          >
            <MenuItem onClick={menu.handleClose}>
              <Avatar>
                <a href='https://www.instagram.com/amourtech' target="_blank" rel="noopener noreferrer"><InstagramIcon color="secondary" fontSize={size} /></a>
              </Avatar>
            </MenuItem>
            <MenuItem onClick={menu.handleClose}>
              <Avatar>
                <a href='https://www.facebook.com/amourtech' target="_blank" rel="noopener noreferrer"><FacebookIcon color="secondary" fontSize={size} /></a>
              </Avatar>
            </MenuItem>
            <MenuItem onClick={menu.handleClose}>
              <Avatar>
                <a href='https://www.twitter.com/amourtech' target="_blank" rel="noopener noreferrer"><TwitterIcon color="secondary" fontSize={size}/></a>
              </Avatar>
            </MenuItem>
            <MenuItem onClick={menu.handleClose}>
              <Avatar>
                <a href='https://www.youtube.com/@amourtech756/videos' target="_blank" rel="noopener noreferrer"><YouTubeIcon color="secondary" fontSize={size} /></a>
              </Avatar>
            </MenuItem>
            <MenuItem onClick={menu.handleClose}>
              <Avatar>
                <a href='https://www.soundcloud.com/amourtech' target="_blank" rel="noopener noreferrer"><Icon component='img' src={SoundCloudIcon} color="secondary" sx={{ height: 18 * sizeIcons, width: 34 * sizeIcons, paddingLeft: 0.3, paddingTop: 0.5, paddingBottom: 0.0 + paddingBottom }} /></a>
              </Avatar>
            </MenuItem>
            <MenuItem onClick={menu.handleClose}>
              <Avatar>
                <a href='https://www.mixcloud.com/amourtech' target="_blank" rel="noopener noreferrer"><Icon component='img' src={MixCloudIcon} color="secondary" sx={{ height: 35 * sizeIcons, width: 35 * sizeIcons, paddingLeft: 0.3, paddingTop: 1.2, paddingBottom: 0.0 + paddingBottom }} /></a>
              </Avatar>
            </MenuItem>
          </Menu>
        </Box>
      }

      {!isMenu &&
      <Stack direction={direction} display='flex' alignItems="left" spacing={spacing} sx={{ ...socialMediaStyling, ...socialMediaStylingRow }}>
        <Stack direction="row" spacing={3} alignItems='center'>
          <Avatar>
            <a href='https://www.instagram.com/amourtech' target="_blank" rel="noopener noreferrer"><InstagramIcon color="secondary" fontSize={size} /></a>
          </Avatar>
          {!isWidth && isHeight &&
        <Typography variant='caption'>Instagram</Typography>
          }
        </Stack>
        <Stack direction="row" spacing={3} alignItems='center'>
          <Avatar>
            <a href='https://www.facebook.com/amourtech' target="_blank" rel="noopener noreferrer"><FacebookIcon color="secondary" fontSize={size} /></a>
          </Avatar>
          {!isWidth && isHeight &&
        <Typography variant='caption'>Facebook</Typography>
          }
        </Stack>
        <Stack direction="row" spacing={3} alignItems='center'>
          <Avatar>
            <a href='https://www.twitter.com/amourtech' target="_blank" rel="noopener noreferrer"><TwitterIcon color="secondary" fontSize={size}/></a>
          </Avatar>
          {!isWidth && isHeight &&
        <Typography variant='caption'>Twitter</Typography>
          }
        </Stack>
        <Stack direction="row" spacing={3} alignItems='center'>
          <Avatar>
            <a href='https://www.youtube.com/@amourtech756/videos' target="_blank" rel="noopener noreferrer"><YouTubeIcon color="secondary" fontSize={size} /></a>
          </Avatar>
          {!isWidth && isHeight &&
        <Typography variant='caption'>Youtube</Typography>
          }
        </Stack>
        <Stack direction="row" spacing={3} alignItems='center'>
          <Avatar>
            <a href='https://www.soundcloud.com/amourtech' target="_blank" rel="noopener noreferrer"><Icon component='img' src={SoundCloudIcon} color="secondary" sx={{ height: 18 * sizeIcons, width: 34 * sizeIcons, paddingLeft: 0.3, paddingTop: 0.5, paddingBottom: 0.0 + paddingBottom }} /></a>
          </Avatar>
          {!isWidth && isHeight &&
        <Typography variant='caption'>Soundcloud</Typography>
          }
        </Stack>
        <Stack direction="row" spacing={3} alignItems='center'>
          <Avatar>
            <a href='https://www.mixcloud.com/amourtech' target="_blank" rel="noopener noreferrer"><Icon component='img' src={MixCloudIcon} color="secondary" sx={{ height: 35 * sizeIcons, width: 35 * sizeIcons, paddingLeft: 0.3, paddingTop: 1.2, paddingBottom: 0.0 + paddingBottom }} /></a>
          </Avatar>
          {!isWidth && isHeight &&
        <Typography variant='caption'>Mixcloud</Typography>
          }
        </Stack>
      </Stack>
      }
    </div>
  )
}

export default Social