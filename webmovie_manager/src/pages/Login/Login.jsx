import React from 'react'
import loginImage from '../../assets/img/loginImage.jpg'
import { Typography, Checkbox, Container, TextField, Stack, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useColorScheme } from '@mui/material/styles'
//import userApi from '../../../apis/userApi'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

function Login() {
  const { setMode } = useColorScheme()
  var [email, setEmail] = React.useState('')
  var [password, setPassword] = React.useState('')

  const onFinish = () => {
    // userApi.login(email, password)
    //   .then(function (response) {
    //     setUser(response.data.user)
    //     alert('Login Successful')
    //     navigate('/')
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //     alert('Wrong Email or Password')
    //   })
  }
  setMode('dark')
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', width: '100vw' }}>
      <Box sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        bgcolor: 'black'
      }}>
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
          zIndex: 2
        }}>
          <h2 style={{ textAlign: 'center', color: 'white' }}> Sign In Admin Account</h2>
          <Stack
            component="form"
            sx={{ m: 3 }}
            spacing={4}
          >
            <TextField
              id="filled-hidden-label-small"
              placeholder='Input email'
              variant="filled"
              size="small"
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              id="filled-hidden-label-normal"
              placeholder='Input password'
              variant="filled"
              size="small"
              color='white'
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              sx={{ bgcolor: 'red', borderRadius: '5px', color: 'white', fontWeight: 'bold' }}
              onClick={() => onFinish({ email, password })}
            >
              Sign In
            </Button>

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