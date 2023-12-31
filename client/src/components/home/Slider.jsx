import styled from '@emotion/styled';
import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Component = styled(Box)`
margin-top:10px;
background:white;
`
const Deal = styled(Box)`
  padding : 15px 20px;
  display:flex;
`

const Timer = styled(Box)`
  display:flex;
  margin-left:10px;
  align-items:center;
  color:#7F7F7F;
`

const DealText = styled(Typography)`
  font-size:22px;
  font-weight:600;
  margin-right:25px;
  line-height:32px;
`

const ViewAll = styled(Button)`
  margin-left:auto;
  background-color:#2874f0;
  border-radius:2px;
  font-size:13px;
  font-weight:600;
`

const Image = styled('img')({
  width: 'auto',
  height: 150

})

const Text = styled(Typography)`
  font-size:14px;
  margin-top:5px;

`

const Slider = ({ products, title, timer }) => {
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const renderer = ({ hours, minutes, seconds, completed }) => {
    return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>
  };


  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {
          timer && <Timer>
            <img src={timerURL} alt='Timer' style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
          </Timer>
        }

        <ViewAll variant="contained" color="primary">View All</ViewAll>

      </Deal>
      <Divider />
      <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlaySpeed={4000}
        autoPlay={true}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container">
        {
          products.map((e) => (
            <Link to={`product/${e.id}`} style={{textDecoration:'none'}}>
            <Box textAlign={"center"} style={{ padding: '25px 15px' }} key={e.id}>
              <Image src={e.url} alt="Product" />
              <Text style={{ fontWeight: 600, color: '#212121' }}>{e.title.shortTitle}</Text>
              <Text style={{ color: 'green' }}>{e.discount}</Text>
              <Text style={{ color: '#212121', opacity: '.6' }}>{e.tagline}</Text>
            </Box>
            </Link>
          ))
        }
      </Carousel>
    </Component>
  )
}

export default Slider
