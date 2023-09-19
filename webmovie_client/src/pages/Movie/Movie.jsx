import { useEffect, useState } from 'react'
import { Rating, Box, Stack, Typography, Button, Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CommentSection from './CommentSection'
import movieApi from '../../apis/movieApi'
import categoryApi from '../../apis/categoryApi'
import episodeApi from '../../apis/episodeApi'
import ratingApi from '../../apis/ratingApi'
import reviewApi from '../../apis/reviewApi'

function Movie() {
  const navigate = useNavigate()
  var id = window.location.search.substring(1) //get id from param request
  var [movie, setMovie] = useState(null)
  var [categories, setCategories] = useState([])
  var [episodes, setEpisodes] = useState([])
  var [ratings, setRatings] = useState([])
  var [reviews, setReviews] = useState([])
  const [showMore, setShowMore] = useState(3)
  const [currentRating, setCurrentRating] = useState(0)
  const [date, setDate] = useState(null)

  function handleClickEpisode(episode) {
    navigate('/episode', { state: { episode } })
  }
  function handleShowMoreClick() {
    setShowMore(showMore + 3)
  }
  function averageRating() {
    if (ratings.length === 0) {
      return 0
    }
    const sum = ratings.reduce((total, rating) => total + rating.point, 0)
    return sum / ratings.length
  }
  function handleSelectRating() {
    if (currentRating != 0) {
      return currentRating
    }
    else return 0
  }

  useEffect(() => {
    movieApi.getMovieById(id)
      .then(response => {
        setMovie(response)
        var createDate = new Date(response.createdAt)
        var day = createDate.getDay()
        var month = createDate.getMonth()
        var year = createDate.getFullYear()
        setDate({ day, month, year })
      })
      .catch(error => {
        console.error(error)
      })
    categoryApi.getCategoriesByMovieId(id)
      .then(response => {
        setCategories(response.data)
      })
      .catch(error => {
        console.error(error)
      })
    episodeApi.getEpisodesByMovieId(id)
      .then(response => {
        setEpisodes(response)
      })
      .catch(error => {
        console.error(error)
      })
    ratingApi.getRatingsByMovieId(id)
      .then(response => {
        setRatings(response)
      })
      .catch(error => {
        console.error(error)
      })
    reviewApi.getReviewsByMovieId(id)
      .then(response => {
        setReviews(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])

  return (
    <div>
      <Box sx={{
        height: '100%', width: '100%', display: 'flex',
        justifyContent: 'center'
      }}>
        <Box>
          {/* Spacing Appbar */}
          <Box sx={{
            width: '100%',
            height: (theme) => theme.webCustom.appBarHeight
          }}>
          </Box>
          {/* Movie info */}
          <Box sx={{
            width: '80vw',
            height: 'auto',
            overflow: 'scroll',
            overflowX: 'hidden',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#363636' : '#FFFFF0')
          }}>
            <Box sx={{ width: '100%', height: '40vh', display: 'flex', justifyContent: 'start', alignItems: 'center', padding: 2 }}>
              <img src={movie?.poster} style={{ width: '200px', height: '100%', objectFit: 'cover' }} />
              <Box sx={{ width: '100%', height: '100%', mr: 2, ml: 2, p: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h4' fontWeight={'bold'} fontFamily={'fantasy'}>{movie?.title}</Typography>
                <Typography variant='h8' fontWeight={'bold'} fontFamily={'fantasy'} >{date?.month}. {date?.day} {date?.year}</Typography>
                <Typography variant='h7' sx={{ bgcolor: '#1E90FF', height: '35px', width: '200px', mt: 2, color: 'white', textAlign: 'center', lineHeight: '35px' }}>Full 12/12 Episode </Typography>
                <Box sx={{ display: 'flex', mt: 2, alignItems: 'center', gap: 2 }}>
                  <Typography variant='h4'>{averageRating()}</Typography>
                  <Rating name="size-medium" size='large' value={averageRating()} precision={0.1} onChange={(event, newValue) => setCurrentRating(newValue)} />
                  <Typography variant='subtitle2'>Your Rating: {handleSelectRating()}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {categories?.map(category => <Typography key={category._id} mt={1} variant='subtitle1'>{category.name}</Typography>)}
                </Box>
              </Box>
            </Box>

            <Box >
              <Stack spacing={1} sx={{ m: 2, mr: 2 }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Button sx={{ bgcolor: '#1E90FF', color: 'white' }} onClick={() => handleClickEpisode(episodes[0])}>Watch Movie</Button>
                  <Typography variant='h5' sx={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>Description</Typography>
                </Box>
                {/* Description */}
                <Typography variant='subtitle1' sx={{ fontFamily: 'sans-serif' }}> {movie?.description}</Typography>
                {movie?.series == 1 &&
                  <><Typography variant='h5' sx={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>Episodes</Typography><Box sx={{ display: 'flex', gap: 1 }}>
                    {episodes?.map(episode => <Button key={episode._id} sx={{ bgcolor: '#828282', color: 'white', width: '60px', height: '30px' }} onClick={() => handleClickEpisode(episode)}>{episode.name}</Button>)}
                  </Box></>
                }
                <Typography variant='subtitle1' sx={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: 'darkorange' }}>Comment</Typography>
                {reviews?.slice(0, showMore).map((review, index) =>
                  <Box key={index} sx={{ display: 'flex', borderRadius: 3, width: '100%', gap: 2, alignItems: 'center', mt: 3 }}>
                    <Avatar alt="Remy Sharp" src={review?.avatar} />
                    <Box sx={{}}>
                      <Typography variant='subtitle1'>{review?.name}</Typography>
                      <Typography variant='body1'>{review?.comment}</Typography>
                    </Box>
                  </Box>
                )}
                {reviews.length > showMore && (
                  <Button onClick={handleShowMoreClick} sx={{ color: 'gray', '&:hover': { bgcolor: 'darkgray' } }}>Show More</Button>
                )}
                <CommentSection movie={movie} reviews={reviews} setReviews={setReviews} />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )

}

export default Movie