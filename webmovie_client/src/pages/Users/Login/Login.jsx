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
import { useColorScheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import userApi from '../../../apis/userApi'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

function Login() {
  const navigate = useNavigate()
  const { _, setMode } = useColorScheme()
  var [email, setEmail] = React.useState('')
  var [password, setPassword] = React.useState('')

  const onFinish = () => {
    userApi.login(email, password)
      .then(function (response) {
        alert('Login Successful')
        navigate('/')
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
        alert('Wrong Email or Password')
      })
  }
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
          zIndex: 2
        }}>
          <h2 style={{ textAlign: 'center', color: 'white' }}>Sign In</h2>
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
              onChange={e => setEmail(e.target.value)} // Lưu giá trị email vào biến state
            />
            <TextField
              id="filled-hidden-label-normal"
              placeholder='Input password'
              variant="filled"
              size="small"
              color='white'
              type="password"
              onChange={e => setPassword(e.target.value)} // Lưu giá trị password vào biến state
            />
            <Button
              sx={{ bgcolor: 'red', borderRadius: '5px', color: 'white', fontWeight: 'bold' }}
              onClick={() => onFinish({ email, password })} // Gọi onFinish với giá trị email và password đã lưu
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