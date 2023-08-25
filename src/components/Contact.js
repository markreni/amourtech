import { contactStyling } from '../styling'
import { Box, Typography } from '@mui/material'
import gif from '../images/amourtech.gif'

const Contact = () => {
  return(
    <Box sx={contactStyling}>
      <Typography variant='h1' sx={{ marginBottom: '6vh' }}>Contact</Typography>
      <Typography variant='h2' sx={{ marginBottom: '2vh' }}>Bookings & Collaborations</Typography>
      <a href="mailto:amourtech@gmail.com"><Typography variant='body1' sx={{ marginBottom: '8vh', '&:hover': { opacity: '50%' } }}>amourtech@gmail.com</Typography></a>
      <img src={gif} />
    </Box>
  )
}

export default Contact