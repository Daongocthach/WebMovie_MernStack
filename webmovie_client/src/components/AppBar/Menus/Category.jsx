import { useState, useEffect } from 'react'
import { ListItemText, Button, Box, Menu, MenuItem } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useNavigate } from 'react-router-dom'
import categoryApi from '../../../apis/categoryApi'
import movieApi from '../../../apis/movieApi'

function Category({ setData }) {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null)
    const [categories, setCategories] = useState([])
    useEffect(() => {
        categoryApi.getListCategories()
            .then(response => {
                setCategories(response.data)
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
    function handleCategory(category) {
        var title = category.name
        movieApi.getListMovieByCategoryId(category._id)
        .then(response => {
            const dataToStore = {
                title,
                movies: response.data
            }
            navigate('/')
            setData(dataToStore)

        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <Box>
            <Button
                id="basic-button-category"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<ExpandMoreIcon />}
                sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }}
            >
                Category
            </Button>
            <Menu
                id="basic-menu-category"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                {categories?.map((category) =>
                    <MenuItem key={category._id}>
                        <ListItemText onClick={() => {handleCategory(category)}}>{category.name}</ListItemText>
                    </MenuItem>
                )}
            </Menu>
        </Box>
    )
}

export default Category