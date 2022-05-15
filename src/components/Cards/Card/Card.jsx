import {
  Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,
} from '@mui/material'

function ProductCard({ name, pictures, description }) {
  const newDescription = description.length > 50 ? `${description.slice(0, 45)}...` : description

  return (
    <Grid item>
      <Card sx={{ width: 345, height: 500 }}>
        <CardMedia
          component="img"
          height="300"
          image={pictures}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {newDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ProductCard
