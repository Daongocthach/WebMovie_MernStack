import { useState, useEffect } from 'react'
import { Button, Menu, Box, MenuItem, ListItemText } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import directorApi from '../../../apis/directorApi'
function Director() {
    const [anchorEl, setAnchorEl] = useState(null)
    const [directors, setDirectors] = useState([])
    useEffect(() => {
        directorApi.getListDirectors()
          .then(response => {
            setDirectors(response.data)
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
                id="basic-button-director"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<ExpandMoreIcon />}
                sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }}
            >
                Director
            </Button>
            <Menu
                id="basic-menu-Director"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                {directors?.map((director, index) =>
                    <MenuItem key={index}>
                        <ListItemText>{director.name}</ListItemText>
                    </MenuItem>
                )}
            </Menu>
        </Box>
    )
}

export default Director