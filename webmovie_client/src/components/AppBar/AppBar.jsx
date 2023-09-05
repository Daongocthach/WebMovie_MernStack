import { ReactComponent as MovieIcon } from '../../assets/movie.svg'
import ModeSelect from '../ModeSelect/ModeSelect'
import { InputAdornment, SvgIcon, Typography, Box, Button, TextField, Badge, Tooltip } from '@mui/material'
import Director from './Menus/Director'
import Country from './Menus/Country'
import Category from './Menus/Category'
import Account from './Menus/Account'
import { Close, Search, NotificationsNone, HelpOutline, HdOutlined, GradeOutlined, Apps } from '@mui/icons-material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box sx={{
      position: 'fixed',
      width: '100%',
      zIndex: 2,
      height: (theme) => theme.webCustom.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 1,
      border: 'none',
      paddingX: 2,
      overflow: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : 'white')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Apps />
        <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }} >
          <SvgIcon component={MovieIcon} inheritViewBox sx={{ size: 'small' }} />
          <Typography variant='span' sx={{ fontStyle: '1.2rem', fontWeight: 'bold' }}>WebMovie</Typography>
        </Box>
        </Link>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Director />
          <Category />
          <Country />
          <Button variant="outlined" start ={<HdOutlined />} sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'), border: 'none', minWidth: '170px' }}>Movies Series</Button>
          <Button variant="outlined" start ={<GradeOutlined />} sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'), border: 'none' }}>TopIMDB</Button>
        </Box>

      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }} />
              </InputAdornment>
            ),
            endAdornment: (
              <Close
                fontSize='small'
                sx={{ color: searchValue ? (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') : 'transparent', cursor: 'pointer' }}
                onClick={() => setSearchValue('')}
              />
            )
          }}
          sx={{
            minWidth: '120px',
            maxWidth: '170px',
            '& label': { color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') },
            '& input': { color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') },
            '& label.Mui-focused': { color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') },
              '&:hover fieldset': { borderColor: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') },
              '&.Mui-focused fieldset': { borderColor: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }
            }
          }} />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNone sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help" sx={{ cursor: 'pointer' }}>
          <HelpOutline sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }} />
        </Tooltip>
        <Account />
      </Box>
    </Box>
  )
}

export default AppBar