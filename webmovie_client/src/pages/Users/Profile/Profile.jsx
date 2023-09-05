import { useEffect, useState } from 'react'
import { Container, TextField, Box, Stack, Button, Typography } from '@mui/material'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import AppBar from '../../../components/AppBar/AppBar'
import Footer from '../../../components/Footer/Footer'
import userApi from '../../../apis/userApi'
import { getCookie } from '../../../utils/cookie'

function Profile() {
  const [user, setUser] = useState('')
  var token = getCookie('token')
  const [date, setDate] = useState(null)
  var [username, setUsername] = useState('')
  var [phone, setPhone] = useState('')
  var [image, setImage] = useState('')

  useEffect(() => {
    userApi.getProfile(token)
      .then(function (response) {
        setUser(response.data.user)
        var createDate = new Date(response.data.user.createdAt)
        var month = createDate.getMonth()
        var year = createDate.getFullYear()
        setDate({ month, year })
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const onUpdate = () => {
    userApi.updateUser(user._id, username, phone, image)
      .then(function (response) {
        alert(response.data)
      })
      .catch(function (error) {
        console.log(error)
        alert(error)
      })
  }

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
              <Typography variant='h6' color='gray' sx={{ fontWeight: 'bold' }}>Tài khoản {user?._id}</Typography>
              <SlideshowIcon sx={{ color: 'red', alignItems: 'center' }} />
              <Typography variant='h8' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Thành viên từ tháng {date?.month} năm {date?.year}</Typography>
            </Stack>
          </Box>
          <Box sx={{
            borderBottom: '1px solid',
            gap: 1,
            mt: 4,
            paddingBottom: 2,
            alignItems: 'center',
            height: 'flexDirection',
            width: '100%'
          }}>

            <Box >
              <Box sx={{ mt: 1 }} >
                <Stack direction="row" spacing={1} sx={{ alignItems: 'baseline' }}>
                  <Typography variant='h6' color='gray' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Email</Typography>
                  {user.email && <TextField sx={{ width: { md: '100%' }, minWidth: '200px' }} size='small' id="outlined-basic" variant="outlined" value={user?.email} />}
                </Stack>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'baseline' }}>
                  <Typography variant='h6' color='gray' sx={{ fontWeight: 'bold', minWidth: '100px' }}>UserName</Typography>
                  {user.username && <TextField sx={{ width: { md: '100%' }, minWidth: '200px' }} size='small' id="outlined-basic" variant="outlined" label={user?.username} onChange={e => setUsername(e.target.value)}/>}
                </Stack>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'baseline' }}>
                  <Typography variant='h6' color='gray' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Phone</Typography>
                  {user.phone && <TextField sx={{ width: { md: '100%' }, minWidth: '200px' }} size='small' id="outlined-basic" variant="outlined" label={user?.phone} onChange={e => setPhone(e.target.value)} />}
                </Stack>
              </Box>
              <Box sx={{ mt: 1 }} >
                <Stack direction="row" spacing={1} sx={{ alignItems: 'baseline' }}>
                  <Typography variant='h6' color='gray' sx={{ fontWeight: 'bold', minWidth: '100px' }}>ImageLink</Typography>
                  {user.image && <TextField sx={{ width: { md: '100%' }, minWidth: '200px' }} size='small' id="outlined-basic" variant="outlined" label={user?.image} onChange={e => setImage(e.target.value)}/>}
                </Stack>
              </Box>
            </Box>
            <Button sx={{ color: 'white', bgcolor: '#FF0000', width: '100px', height: '40px' }}
              onClick={() => onUpdate()}>Cập nhật</Button>
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
              <Typography variant='h6' color='gray' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Thông tin gói dịch vụ</Typography>
              <Typography variant='h8' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Miễn phí</Typography>
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
              <Typography variant='h6' color='gray' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Bảo mật & Quyền riêng tư</Typography>
              <Typography variant='h8' sx={{ fontWeight: 'bold', minWidth: '100px' }}>Kiểm soát quyền truy cập vào tài khoản này</Typography>
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