import { useState } from 'react'
import loginImage from '../../assets/img/loginImage.jpg'
import { Container, TextField, Stack, Button, Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import userApi from '../../apis/userApi'
import { getCookie, setCookie } from '../../utils/cookie'

function Login() {
  const navigate = useNavigate()
  var [email, setEmail] = useState('')
  var [password, setPassword] = useState('')
  const token = getCookie('token')
  if (token) navigate('/dashboard')

  const onFinish = () => {
    userApi.login(email, password)
      .then(function (response) {
        if (response.data.role === 'admin') {
          alert('Login Successful')
          setCookie('token', response.data.token, 1)
          setCookie('avatar', response.data.image, 1)
          setCookie('name', response.data.name, 1)
          navigate('/dashboard')
        }
        else alert('Do not have access!')
      })
      .catch(function (error) {
        console.log(error)
        alert('Wrong Email or Password')
      })
  }
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', width: '100vw' }}>
      <Box sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
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
          transform: 'translate(-50%, -30%)'
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
              sx={{ bgcolor: 'white', borderRadius: 3 }}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              id="filled-hidden-label-normal"
              placeholder='Input password'
              variant="filled"
              size="small"
              sx={{ bgcolor: 'white', borderRadius: 3 }}
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              sx={{ bgcolor: 'red', color: 'white', fontWeight: 'bold' }}
              onClick={() => onFinish({ email, password })}
            >Sign In</Button>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', m: 0 }}>
                <Link to={'/'} style={{ color: 'white' }}>Forgot Password?</Link>
              </Box>
              <Link to={'/'} style={{ color: 'white' }}>Need help?</Link>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}

export default Login