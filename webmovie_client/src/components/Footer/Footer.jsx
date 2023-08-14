import { Box, Chip } from '@mui/material'
import Grid from '@mui/joy/Grid'
import AppsIcon from '@mui/icons-material/Apps'
import HomeIcon from '@mui/icons-material/Home'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import Button from '@mui/material/Button'
import HdOutlinedIcon from '@mui/icons-material/HdOutlined'

const MENU_STYLES = {
    color: 'white',
    bgcolor: 'transparent',
    border: 'none',
    paddingX: '5px',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
        color: 'white'
    },
    '&:hover': {
        bgcolor: 'primary.50'
    }
}
export default function Footer() {
    return (
        <Box sx={{
            width: '100%',
            mt: 2,
            height: '120px',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1C1C1C' : '#2f3640'),
            overflow: 'hidden'
        }}>
            <Box sx={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center', display: 'flex', gap: 2, marginTop: '10px' }}>
                <Chip
                    icon={<HomeIcon />}
                    label={'Home'}
                    clickable
                    sx={MENU_STYLES}
                >
                </Chip>
                <Chip
                    icon={<AddToDriveIcon />}
                    label='AddToDrive'
                    clickable
                    sx={MENU_STYLES}
                >
                </Chip>
                <Chip
                    icon={<BoltIcon />}
                    label='Flash'
                    clickable
                    sx={MENU_STYLES}
                >
                </Chip>
                <Chip
                    icon={<AppsIcon />}
                    label='Flash'
                    clickable
                    sx={MENU_STYLES}
                >
                </Chip>
            </Box>
            <Box sx={{
                width: '100%',
                height: '80%',
                display: 'flex',
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
                <Grid
                    container
                    spacing={{ xs: 1, sm: 1, md: 1 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    sx={{ color: 'white', justifyContent: 'center', fontFamily: 'sans-serif', fontSize: '15px' }}
                >
                   <Grid xs={6} sm={3} md={3}>
                        Trung tâm trợ giúp
                    </Grid>
                    <Grid xs={6} sm={3} md={3}>
                        Điều khoản sử dụng
                    </Grid>
                    <Grid xs={6} sm={3} md={3}>
                        Thông tin doanh nghiệp
                    </Grid>
                    <Grid xs={6} sm={3} md={3}>
                        Liên hệ với chúng tôi
                    </Grid>
                    <Grid xs={6} sm={3} md={3}>
                        Quyền riêng tư
                    </Grid>
                    <Grid xs={6} sm={3} md={3}>
                        Tùy chọn Cookie
                    </Grid>
                    <Button variant="outlined" startIcon={<HdOutlinedIcon />} sx={{ color: 'white', borderColor: 'white' }}>Movies</Button>
                </Grid>
            </Box>
        </Box>
    )
}
