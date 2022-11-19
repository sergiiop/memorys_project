import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@mui/material'
import Post from './Post/Post'
import useStyles from './styles'

const Posts = ({ handleId }) => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles()
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems='stretch'
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} xs={12} sm={6} item>
          <Post post={post} handleId={handleId} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Posts
