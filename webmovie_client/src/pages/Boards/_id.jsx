import { Container } from '@mui/material'
import { useState } from 'react'
import AppBar from '../../components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import Footer from '../../components/Footer/Footer'

function Board() {
  const [data, setData] = useState([])
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar setData={setData}/>
      <BoardBar />
      <BoardContent data={data}/>
      <Footer/>
    </Container>
  )
}

export default Board