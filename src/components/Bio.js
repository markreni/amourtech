import styled from '@mui/material/styles/styled'
import { Typography, Box, keyframes } from '@mui/material'

const Bio = () => {

  const textShadowPopBr = keyframes`
  0% {
    text-shadow: 2px 2px #555555, 2px 2px #555555, 2px 2px #555555, 2px 2px #555555, 2px 2px #555555, 2px 2px #555555, 2px 2px #555555, 2px 2px #555555;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: 1px 1px #555555, 2px 2px #555555, 3px 3px #555555, 4px 4px #555555, 5px 5px #555555, 6px 6px #555555, 7px 7px #555555, 8px 8px #555555;
    -webkit-transform: translateX(-8px) translateY(-8px);
            transform: translateX(-8px) translateY(-8px);
  }
`

  const Holder = styled(Box)(() => ({
    width: 'clamp(30vw, 80vw, 1000px)',
    height: 'clamp(30vh, 70vh, 80vh)',
    background: 'transparent',
    borderRadius: '10px',
    display: 'static',
    marginTop: '7vh',
    marginLeft: 'max(30px, 5vw)',
    overflow: 'scroll'
  }))

  const Text = styled(Typography)(() => ({
    color: 'secondary',
    paddingBottom: '5vh',
    animation: `${textShadowPopBr} 2s ease-in 0.0s infinite both`,
    paddingLeft: '2vw'
  }))

  return(
    <Holder>
      <Typography variant='h1' sx={{ marginBottom: '3vh' }}>About AMOURtech</Typography>
      <Typography variant='body1' sx={{ marginBottom: '5vh' }}>
          The instigator of crazy underground parties.<br />
          The ambassador of love.<br />
          Pissing off your parents is what I do.<br />
          Cheers.
      </Typography>
      <Box sx={{ marginBottom: '2vh' }}>
        <Typography sx={{ marginBottom: '2vh' }}>I play</Typography>
        <Text variant="h1">Melodic House</Text>
        <Text variant="h1">Progressive House</Text>
        <Text variant="h1">Deep Tech House</Text>
      </Box>
      <div>
        <Typography variant='body1' sx={{ marginBottom: '2vh' }}>Latest mix</Typography>
        <iframe width="80%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Famourtech%2Fmelodies-for-destruction-part-three%2F" />
      </div>
    </Holder>
  )
}

export default Bio