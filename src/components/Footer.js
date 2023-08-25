import { Box, Typography } from '@mui/material'
import { footerStyling } from '../styling'

const Footer = () => {
  return(
    <Box display='flex' justifyContent='center' sx={footerStyling}>
      <Typography variant='body2'>© AMOURtech. 2023. All rights reserved.</Typography>
    </Box>
  )
}

export default Footer