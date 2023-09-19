import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import BoardContent from './BoardContent/BoardContent'
import categoryApi from '../../apis/categoryApi'
import countryApi from '../../apis/countryApi'
import directorApi from '../../apis/directorApi'
import movieApi from '../../apis/movieApi'
import userApi from '../../apis/userApi'

function DashBoard() {
  const [users, setUsers] = useState([])
  const [categories, setCategories] = useState([])
  const [countries, setCountries] = useState([])
  const [directors, setDirectors] = useState([])
  const [movies, setMovies] = useState([])

  useEffect(() => {
    categoryApi.getListCategories()
      .then(response => {
        setCategories(response.data)
      })
      .catch(error => {
        console.error(error)
      })

    countryApi.getListCountries()
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => {
        console.error(error)
      })

    directorApi.getListDirectors()
      .then(response => {
        setDirectors(response.data)
      })
      .catch(error => {
        console.error(error)
      })
    movieApi.getListMovies()
      .then(response => {
        setMovies(response.data)
      })
      .catch(error => {
        console.error(error)
      })
    userApi.getListUsers()
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  const data = [
    users, movies, categories, directors, countries
  ]
  return (
    <Container disableGutters maxWidth={false} sx={{ minHeight: '100vh' }}>
      <BoardContent data={data} />
    </Container>
  )
}

export default DashBoard
