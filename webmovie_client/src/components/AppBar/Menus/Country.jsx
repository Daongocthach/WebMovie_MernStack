import { useState, useEffect } from 'react'
import { Button, Menu, Box, MenuItem, ListItemText } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import countryApi from '../../../apis/countryApi'
import movieApi from '../../../apis/movieApi'

function Country({ setData }) {
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
    function handleCountry(country) {
        var title = country.name
        movieApi.getListMovieByCountryId(country._id)
        .then(response => {
            const dataToStore = {
                title,
                movies: response.data
            }
            setData(dataToStore)
        })
        .catch(error => {
            console.error(error)
        })
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
                {countries?.map((country) =>
                    <MenuItem key={country._id}>
                        <ListItemText onClick={() => {handleCountry(country)}}>{country.name}</ListItemText>
                    </MenuItem>
                )}
            </Menu>
        </Box>
    )
}

export default Country