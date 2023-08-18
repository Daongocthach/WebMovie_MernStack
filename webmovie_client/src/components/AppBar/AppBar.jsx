import Box from '@mui/material/Box'
import { ReactComponent as MovieIcon } from '../../assets/movie.svg'
import AppsIcon from '@mui/icons-material/Apps'
import ModeSelect from '../ModeSelect/ModeSelect'
import { InputAdornment, SvgIcon, Typography } from '@mui/material'
import Dashboard from './Menus/Dashboard'
import Country from './Menus/Country'
import Category from './Menus/Category'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Account from './Menus/Account'
import { useState } from 'react'
import HdOutlinedIcon from '@mui/icons-material/HdOutlined'
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { Link, useNavigate } from 'react-router-dom'

function AppBar() {
  const navigate = useNavigate()
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
        <AppsIcon sx={{ color: '' }} />
        <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }} >
          <SvgIcon component={MovieIcon} inheritViewBox sx={{ size: 'small' }} />
          <Typography variant='span' sx={{ fontStyle: '1.2rem', fontWeight: 'bold' }}>WebMovie</Typography>
        </Box>
        </Link>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Dashboard />
          <Category />
          <Country />
          <Button variant="outlined" startIcon={<HdOutlinedIcon />} sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'), border: 'none' }}>Movies</Button>
          <Button variant="outlined" startIcon={<GradeOutlinedIcon />} sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'), border: 'none' }}>TopIMDB</Button>
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
                <SearchIcon sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
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
            <NotificationsNoneIcon sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black')}} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help" sx={{ cursor: 'pointer' }}>
          <HelpOutlineIcon sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }} />
        </Tooltip>
        <Account />
      </Box>
    </Box>
  )
}

export default AppBar