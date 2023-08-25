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
    width: '75vw',
    height: '84vh',
    minHeight: '50px',
    background: 'transparent',
    borderRadius: '10px',
    display: 'static',
    marginTop: '7vh',
    marginLeft: 'max(30px, 5vw)',
    overflow: 'scroll'
  }))

  const Text = styled(Typography)(() => ({
    color: 'secondary',
    paddingBottom: '6vh',
    animation: `${textShadowPopBr} 2s ease-in 0.0s infinite both`,
    paddingLeft: '2vw'
  }))

  return(
    <Holder>
      <Typography variant='h1'>About AMOURtech</Typography>
      <Typography variant='body1' sx={{ paddingTop: '5vh', paddingBottom: '10vh' }}>
          The instigator of crazy underground parties.<br />
          The ambassador of love.<br />
          Pissing off your parents is what I do.<br />
          Cheers.
      </Typography>
      <Typography sx={{ paddingBottom: '4vh' }}>I play</Typography>
      <div>
        <Text variant="h1">Melodic House</Text>
        <Text variant="h1">Progressive House</Text>
        <Text variant="h1">Deep Tech House</Text>
      </div>
    </Holder>
  )
}

export default Bio