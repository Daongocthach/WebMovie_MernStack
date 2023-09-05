
import { ListItemText, Button, Box, Menu, MenuItem } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import categoryApi from '../../../apis/categoryApi'
import { useState, useEffect } from 'react'
function Category() {
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
    return (
        <Box>
            <Button
                id="basic-button-category"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<ExpandMoreIcon/>}
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
                {categories?.map((category, index) =>
                    <MenuItem key={index}>
                        <ListItemText>{category.name}</ListItemText>
                    </MenuItem>
                )}
            </Menu>
        </Box>
    )
}

export default Category