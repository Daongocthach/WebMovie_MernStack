import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Box from '@mui/material/Box'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectMode = event.target.value
    setMode(selectMode)
  }

  return (
    <FormControl sx={{ minWidth: '120px', color: 'black', }} size='small'>
      <InputLabel
        id="label-slect-dark-light-mode"
        sx={{
          color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'),
          '&.Mui-focused':{ color:(theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-slect-dark-light-mode"
        id="slect-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color:(theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'),
          '.MuiOutlinedInput-notchedOutline': { borderColor: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') },
          '.MuiSvgIcon-root': { color:(theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }
        }}
      >
        <MenuItem value="light">
          <Box sx={{ display:'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon/> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display:'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeIcon/> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display:'flex', alignItems: 'center', gap: 1 }}>
            <Brightness4Icon/> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
