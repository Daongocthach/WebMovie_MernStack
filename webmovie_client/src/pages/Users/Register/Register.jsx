import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import logoPath from '../../../assets/img/LOGO.png'
import { Container } from '@mui/material'
import loginImage from '../../../assets/img/loginImage.jpg'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useColorScheme } from '@mui/material/styles'

function Register() {
  const { _ ,setMode } = useColorScheme()
  setMode('dark')
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1
      }}>
        <Box sx={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          borderRadius: '5px',
          top: '5%',
          left: '50%',
          bgcolor: 'black',
          transform: 'translate(-50%, -20%)',
          zIndex: 2
        }}><img src={logoPath} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Box>
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
          transform: 'translate(-50%, -20%)',
          zIndex: 2
        }}>
          <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
          <Stack
            component="form"
            sx={{ m: 3 }}
            spacing={4}
          >
            <TextField
              id="input-email"
              defaultValue="Input Email"
              variant="filled"
              size="small"
            />
            <TextField
              id="input-password"
              defaultValue="Input Password"
              variant="filled"
              size="small"
            />
            <TextField
              id="input-phone"
              defaultValue="Input Phone"
              variant="filled"
              size="small"
            />
            <Button sx={{ bgcolor: 'red', borderRadius: '5px', color: 'white', fontWeight: 'bold' }}>Sign Up</Button>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Link to={'/login'} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='span' sx={{
                  '&:hover': {
                    color: 'lightblue',
                    textDecoration: 'underline'
                  }
                }}>Sign In Now?
                </Typography>
              </Link>
              <Typography variant='span' sx={{
                '&:hover': {
                  color: 'lightblue',
                  textDecoration: 'underline'
                }
              }}>Need help?
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}

export default Register