import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import logoPath from '../../../assets/img/LOGO.png'
import { Container } from '@mui/material'
import loginImage from '../../../assets/img/loginImage.jpg'
import AppBar from '../../../components/AppBar/AppBar'
import { Typography } from '@mui/material'
import Footer from '../../../components/Footer/Footer'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import Grid from '@mui/material/Grid'
import CreateIcon from '@mui/icons-material/Create'

function Profile() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={{
        width: '100%',
        height: '100%'
      }}>
        <AppBar />
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          height: (theme) => theme.webCustom.appBarHeight
        }}>
        </Box>
        <Box sx={{
          height: '100%',
          ml: 30, mr: 30, mt: 2
        }}>
          <Box sx={{
            display: 'flex',
            borderBottom: '1px solid',
            gap: 1,
            alignItems: 'center',
            height: '80px',
            width: '100%'
          }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Typography variant='h6' color='gray' sx={{ fontWeight: 'bold' }}>Tài khoản</Typography>
              <SlideshowIcon sx={{ color: 'red', alignItems: 'center' }} />
              <Typography variant='h8' sx={{ fontWeight: 'bold' }}>Thành viên từ tháng 3 năm 2022</Typography>
            </Stack>
          </Box>
          <Box sx={{
            flexGrow: 1,
            borderBottom: '1px solid',
            gap: 1,
            mt: 4,
            paddingBottom: 2,
            alignItems: 'center',
            height: 'flexDirection',
            width: '100%'
          }}>
            <Grid container spacing={2} sx={{ m: 1, rowGap: 2 }}>
              <Grid sm={8} xs={8} md={10}>
                <Stack direction="row" spacing={7} sx={{ alignItems: 'baseline' }}>
                  <Typography variant='h6' color='gray' sx={{ fontWeight: 'bold' }}>Email</Typography>
                  <TextField sx={{ width: { md: '100%' }, minWidth: '200px' }} size='small' id="outlined-basic" label="Outlined" variant="outlined" />
                </Stack>
              </Grid>
              <Grid sm={8} xs={8} md={10}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'baseline' }}>
                  <Typography variant='h6' color='gray' sx={{ fontWeight: 'bold' }}>Password</Typography>
                  <TextField sx={{ width: { md: '100%' }, minWidth: '200px' }} size='small' id="outlined-basic" label="Outlined" variant="outlined" />
                </Stack>
              </Grid>
              <Grid sm={8} xs={8} md={10}>
                <Stack direction="row" spacing={6} sx={{ alignItems: 'baseline' }}>
                  <Typography variant='h6' color='gray' sx={{ fontWeight: 'bold' }}>Phone</Typography>
                  <TextField sx={{ width: { md: '100%' }, minWidth: '200px' }} size='small' id="outlined-basic" label="Outlined" variant="outlined" />
                </Stack>
              </Grid>
            </Grid>
            <Button sx={{ color: 'white', bgcolor: '#FF0000', width: '100px', height: '40px' }}>Cập nhật</Button>
          </Box>
          <Box sx={{
            display: 'flex',
            borderBottom: '1px solid',
            gap: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '80px',
            width: '100%'
          }}>
            <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
              <Typography variant='h6' color='gray' sx={{ fontWeight: 'bold' }}>Thông tin gói dịch vụ</Typography>
              <Typography variant='h8' sx={{ fontWeight: 'bold' }}>Miễn phí</Typography>
            </Stack>
            <Button sx={{ color: 'white', bgcolor: '#EE9A00', width: '100px', height: '40px' }}>Nâng cấp</Button>
          </Box>
          <Box sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '80px',
            width: '100%'
          }}>
            <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
              <Typography variant='h6' color='gray' sx={{ fontWeight: 'bold' }}>Bảo mật & Quyền riêng tư</Typography>
              <Typography variant='h8' sx={{ fontWeight: 'bold' }}>Kiểm soát quyền truy cập vào tài khoản này</Typography>
            </Stack>
            <Button sx={{ color: 'white', bgcolor: '#EE9A00', width: '100px', height: '40px' }}>Cài Đặt</Button>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Container>
  )
}

export default Profile