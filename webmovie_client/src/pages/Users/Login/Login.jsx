import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { Container } from '@mui/material'
import loginImage from '../../../assets/img/loginImage.jpg'
import AppBar from '../../../components/AppBar/AppBar'
import Checkbox from '@mui/material/Checkbox'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
import { useColorScheme } from '@mui/material/styles'

function Login() {
  const { _ ,setMode } = useColorScheme()
  setMode('dark')
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        bgcolor: 'black'
      }}>
        <AppBar />
        <Box sx={{
          width: '100%',
          height: (theme) => theme.webCustom.appBarHeight,
          bgcolor: 'white'
        }}></Box>
        <img src={loginImage} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <Box sx={{
          position: 'absolute',
          width: { xs: '90%', sm: '70%', md: '30%' },
          height: 'auto',
          borderRadius: '5px',
          top: '30%',
          left: '50%',
          bgcolor: 'black',
          opacity: 0.8,
          transform: 'translate(-50%, -30%)',
          zIndex: 2,
        }}>
          <h2 style={{ textAlign: 'center', color:'white' }}>Sign In</h2>
          <Stack
            component="form"
            sx={{ m: 3 }}
            spacing={4}
          >
            <TextField
              id="filled-hidden-label-small"
              defaultValue="Input Email"
              variant="filled"
              size="small"
            />
            <TextField
              id="filled-hidden-label-normal"
              defaultValue="Input Password"
              variant="filled"
              size="small"
              color='white'
            />
            <Button sx={{ bgcolor: 'red', borderRadius: '5px', color: 'white', fontWeight: 'bold' }}>Sign In</Button>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', m: 0 }}>
                <Checkbox {...label} />
                <Typography variant='span' >Remember me?</Typography>
              </Box>
              <Typography variant='span' sx={{
                '&:hover': {
                  color: 'lightblue',
                  textDecoration: 'underline'
                }
              }}>Need help?
              </Typography>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Link to={'/register'} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='span' sx={{
                  '&:hover': {
                    color: 'lightblue',
                    textDecoration: 'underline'
                  }
                }}>Sign up Now?
                </Typography>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}

export default Login