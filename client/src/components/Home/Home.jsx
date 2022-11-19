import { Container, Grid, Grow } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/post'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'

const Home = () => {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])
  return (
    <Grow in>
      <Container>
        <Grid container justify='space-between' alignItems='stretch' gap={5}>
          <Grid item xs={12} sm={7}>
            <Posts handleId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} handleId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home
