import { useState } from 'react'
import { Menu, Box, Divider, MenuItem, ListItemIcon, Avatar, IconButton, Tooltip } from '@mui/material'
import { Settings, PersonAdd } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { deleteCookie, getCookie } from '../../../utils/cookie'


function Account() {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null)
    const token = getCookie('token')
    const avatar = getCookie('avatar')
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleLogout = () => {
        deleteCookie()
        alert('Logout sucessfull')
        navigate('/')
    }
    return (
        <Box>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ padding: 0, marginRight: '10px', color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>
                        {token && avatar && <img src={avatar} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />}
                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                id="basic-menu-account"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                {token && <MenuItem onClick={handleClose}>
                    <Link to={'/profile'} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Avatar sx={{ mr: 3 }} >{token && avatar && <img src={avatar} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />}</Avatar>
                        Profile
                    </Link>

                </MenuItem>}
                <Divider />
                {!token && <MenuItem onClick={handleClose}>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Login
                    </Link>
                </MenuItem>}
                {token && <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Log out
                </MenuItem>}
            </Menu>
        </Box>
    )
}

export default Account