/* eslint-disable react/jsx-props-no-spreading */
import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCardsQuery } from '../../redux/actionCreators/productsCardsAC'
import ProductCard from './Card/Card'

function Cards() {
  const productsCards = useSelector((store) => store.productsCards)
  const { products } = productsCards

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCardsQuery())
  }, [])

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ padding: '40px 10px' }}
    >
      {products ? products.map((product) => (<ProductCard {...product} key={product._id} />)) : null}
    </Grid>
  )
}

export default Cards
