import { useState, useEffect } from 'react'
import { Button, Menu, Box, MenuItem, ListItemText } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import directorApi from '../../../apis/directorApi'
import movieApi from '../../../apis/movieApi'

function Director({ setData }) {
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

    function handleDirector(director) {
        var title = director.name
        movieApi.getListMovieByDirectorId(director._id)
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
                {directors?.map((director) =>
                    <MenuItem key={director._id} onClick={() => { handleDirector(director) }}>
                        <ListItemText >{director.name}</ListItemText>
                    </MenuItem>
                )}
            </Menu>
        </Box>
    )
}

export default Director
