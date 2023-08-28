import { socialMediaStyling } from '../styling'
import { Stack, Avatar, Typography } from '@mui/material'
import SoundCloudIcon from '../images/soundcloud.png'
import MixCloudIcon from '../images/mixcloud.png'
import FacebookIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Icon from '@mui/material/Icon'
import { useMediaQuery, useTheme } from '@mui/material'

const Social = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  const isSmallest = useMediaQuery(theme.breakpoints.down('sm'))
  const isHeight = useMediaQuery('(min-height: 700px)')
  const direction = isMatch || !isHeight ? 'row' : 'column'
  const paddingBottom = isMatch || !isHeight ? 0.8 : 0
  const socialMediaStylingRow =
  isMatch ? {
    position: 'absolute',
    left: 'max(3vw, 10px)',
    top: 'max(81vh, 130px)',
    width: '85vw',
  } : !isHeight ? {
    position: 'absolute',
    left: 'max(0vw, 0px)',
    top: 'max(58vh, 130px)',
    width: '85vw',
  } : {}
  const spacing = isSmallest ? 1 : !isHeight ? 2 : 4
  const size = isSmallest ? 'medium' : 'large'
  const sizeIcons = isSmallest ? 0.7 : 1

  return(
    <Stack direction={direction} display='flex' alignItems="left" spacing={spacing} sx={{ ...socialMediaStyling, ...socialMediaStylingRow }}>
      <Stack direction="row" spacing={3} alignItems='center'>
        <Avatar><a href='https://www.instagram.com/amourtech' target="_blank" rel="noopener noreferrer"><InstagramIcon color="secondary" fontSize={size} /></a></Avatar>
        {!isMatch && isHeight &&
          <Typography variant='caption'>Instagram</Typography>
        }
      </Stack>
      <Stack direction="row" spacing={3} alignItems='center'>
        <Avatar><a href='https://www.facebook.com/amourtech' target="_blank" rel="noopener noreferrer"><FacebookIcon color="secondary" fontSize={size} /></a></Avatar>
        {!isMatch && isHeight &&
          <Typography variant='caption'>Facebook</Typography>
        }
      </Stack>
      <Stack direction="row" spacing={3} alignItems='center'>
        <Avatar><a href='https://www.twitter.com/amourtech' target="_blank" rel="noopener noreferrer"><TwitterIcon color="secondary" fontSize={size}/></a></Avatar>
        {!isMatch && isHeight &&
          <Typography variant='caption'>Twitter</Typography>
        }
      </Stack>
      <Stack direction="row" spacing={3} alignItems='center'>
        <Avatar><a href='https://www.youtube.com/@amourtech756/videos' target="_blank" rel="noopener noreferrer"><YouTubeIcon color="secondary" fontSize={size} /></a></Avatar>
        {!isMatch && isHeight &&
          <Typography variant='caption'>Youtube</Typography>
        }
      </Stack>
      <Stack direction="row" spacing={3} alignItems='center'>
        <Avatar><a href='https://www.soundcloud.com/amourtech' target="_blank" rel="noopener noreferrer"><Icon component='img' src={SoundCloudIcon} color="secondary" sx={{ height: 18 * sizeIcons, width: 34 * sizeIcons, paddingLeft: 0.3, paddingTop: 0.5, paddingBottom: 0.0 + paddingBottom }} /></a></Avatar>
        {!isMatch && isHeight &&
          <Typography variant='caption'>Soundcloud</Typography>
        }
      </Stack>
      <Stack direction="row" spacing={3} alignItems='center'>
        <Avatar><a href='https://www.mixcloud.com/amourtech' target="_blank" rel="noopener noreferrer"><Icon component='img' src={MixCloudIcon} color="secondary" sx={{ height: 35 * sizeIcons, width: 35 * sizeIcons, paddingLeft: 0.3, paddingTop: 1.2, paddingBottom: 0.0 + paddingBottom }} /></a></Avatar>
        {!isMatch && isHeight &&
          <Typography variant='caption'>Mixcloud</Typography>
        }
      </Stack>
    </Stack>
  )
}

export default Social