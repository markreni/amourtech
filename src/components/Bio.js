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
    width: '80vw',
    height: '80vh',
    background: 'transparent',
    borderColor: 'RGB(255,255,255,0.1)',
    //borderStyle: 'solid',
    borderRadius: '10px',
    display: 'static',
    marginTop: '7vh',
    marginLeft: 'max(30px, 5vw)',
  }))

  const Text = styled(Typography)(() => ({
    color: 'secondary',
    paddingBottom: '7vh',
    animation: `${textShadowPopBr} 2s ease-in 0.0s infinite both`

  }))
  return(
    <div className="App">
      <Holder>
        <Typography sx={{ paddingTop: '5vh', paddingBottom: '10vh' }}>
          The instigator of crazy underground parties.<br />
          The ambassador of love.<br />
          Pissing off your parents is what I do.<br />
          Cheers.
        </Typography>
        <Typography sx={{ paddingBottom: '5vh' }}>I play</Typography>
        <Text variant="h1">Melodic House</Text>
        <Text variant="h1">Progressive House</Text>
        <Text variant="h1">Deep Tech House</Text>

      </Holder>
    </div>
  )
}

export default Bio