import { Box, Grid } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

export default function Footer() {
    return (
        <Box sx={{
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1C1C1C' : '#2f3640'),
            width: '100%',
            height: 'fit-content',
            mt: 2,
            p:1,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex'
        }}>
            <Box sx={{ width: '100%', ml: 20 }}>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ color: 'white', fontFamily: 'monospace', fontSize: '15px' }}>
                    <Grid item xs={4} sm={8} md={12} sx={{ fontSize: '30px', color: 'red', fontFamily: 'fantasy' }}>
                        WebMovie
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        Liên hệ: 0123456789
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        Báo lỗi dịch vụ
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        Phim hay
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        Phim mới
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        Email: pemeoh1@gmail.com
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        Giới thiệu
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        Đăng ký
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        Trang chủ
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        Địa chỉ: 01 Võ văn ngân, Thủ Đức, <br/> Thành Phố Hồ Chí Minh
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        Chính sách bảo mật
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        Đăng nhập
                    </Grid>
                    <Grid item xs={2} sm={4} md={3} >
                        <YouTubeIcon /><FacebookIcon /><TwitterIcon />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
