import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import { getProducts } from '../../redux/action/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Slider from './Slider'
import MidSlide from './MidSlide'
import MidSection from './MidSection'
const Component = styled(Box)`
padding:10px;
background:#F2F2F2;
`

const Home = () => {

  const dispatch = useDispatch()
  const {products} = useSelector(state => state.getProducts);
  console.log(products)
   

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  return (
    <>
    <Navbar/>
    <Component>
    <Banner/>
    <MidSlide products={products} title="Deals of the Day" timer={true}/>
    <Slider products={products} title="Discounts for You" timer={false}/>
    <Slider products={products} title="Suggested Items" timer={false}/>
    <MidSection/>
    <Slider products={products} title="Top Selection" timer={false}/>
    <Slider products={products} title="Recommended Items" timer={false}/>
    <Slider products={products} title="Trending Offers" timer={false}/>
    <Slider products={products} title="Seasonal Picks" timer={false}/>
    <Slider products={products} title="Top Deals on Accessories" timer={false}/>
    </Component>
    </>
  )
}

export default Home
