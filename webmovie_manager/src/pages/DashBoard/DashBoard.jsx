import { useEffect } from 'react'
import { Box, Container } from '@mui/material'
import { usePage } from '../../routers/PageContext'
import AppBar from '../../components/AppBar/AppBar'
import Footer from '../../components/Footer/Footer'
import BoardContent from './BoardContent/BoardContent'
import UserList from '../UserList/UserList'
import MovieList from '../MovieList/MovieList'
import CategoryList from '../CategoryList/CategoryList'
import DirectorList from '../DirectorList/DirectorList'
import CountryList from '../CountryList/CountryList'

function DashBoard() {
  const { page } = usePage()
  console.log(page)
  useEffect(() => {
  }, [page])
  return (
    <Container disableGutters maxWidth={false} sx={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <AppBar />
      <Box sx={{ height: (theme) => theme.webCustom.appBarHeight }}></Box>
      {page === 'boardContent' && <BoardContent />}
      {page === 'userlist' && <UserList />}
      {page === 'movielist' && <MovieList />}
      {page === 'categorylist' && <CategoryList />}
      {page === 'countrylist' && <CountryList />}
      {page === 'directorlist' && <DirectorList />}
      <Footer />
    </Container>
  )
}

export default DashBoard
