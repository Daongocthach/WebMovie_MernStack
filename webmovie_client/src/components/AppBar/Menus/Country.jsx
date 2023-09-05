import { useState, useEffect } from 'react'
import { Button, Menu, Box, MenuItem, ListItemText } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import countryApi from '../../../apis/countryApi'
function Country() {
    const [anchorEl, setAnchorEl] = useState(null)
    const [countries, setCountries] = useState([])
    useEffect(() => {
        countryApi.getListCountries()
          .then(response => {
            setCountries(response.data)
          })
          .catch(error => {
            console.error(error)
          })
      }, [])
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <Box>
            <Button
                id="basic-button-country"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<ExpandMoreIcon />}
                sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }}
            >
                Country
            </Button>
            <Menu
                id="basic-menu-country"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                {countries?.map((country, index) =>
                    <MenuItem key={index}>
                        <ListItemText>{country.name}</ListItemText>
                    </MenuItem>
                )}
            </Menu>
        </Box>
    )
}

export default Country