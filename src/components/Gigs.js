import { gigCardStyling, gigBoxStyling } from '../styling'
import { Grid, Paper, Typography, Card, CardContent, Divider, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import gigs from '../gigs'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '20vw',
  height: '10vw',
  maxWidth: '150px',
  maxHeight: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    opacity: '80%'
  },
}))

const Gigs = () => {
  //<CardHeader titleTypographyProps={{ fontSize: 'max(2.5vw, 30px)' }} title='Upcoming gigs' />
  return(
    <Box sx={gigBoxStyling}>
      <Typography variant='h1'>Upcoming gigs</Typography>
      <Card sx={gigCardStyling}>
        <CardContent>
          {gigs.map((gig, index) => {
            return(
              <div key={index}>
                <Grid container>
                  <Grid component='div' item xs={7} md={7} lg={7} sx={{ marginBottom: '20px' }}>
                    <Typography variant='body1'>
                      {gig.date} <br /> {gig.premises} <br /> <b>{gig.location}</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={1} md={1} lg={1} sx={{ marginBottom: '20px' }}>
                    <Item onClick={() => alert('No tickets available yet.')}>
                      <Typography variant='h4'>Get tickets</Typography>
                    </Item>
                  </Grid>
                </Grid>
                <Divider flexItem variant='string' sx={{ backgroundColor: 'secondary.main', marginBottom: '20px', opacity: '10%' }}>...</Divider>
              </div>
            )
          })}
        </CardContent>
      </Card>
    </Box>
  )
}

export default Gigs