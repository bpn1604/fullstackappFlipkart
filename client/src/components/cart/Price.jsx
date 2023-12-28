import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Header = styled(Box)`
  padding:15px 24px;
  background:#fff;
  border-bottom:1px solid #f0f0f0;
`

const Heading = styled(Typography)` 
  color:#878787;
`

const Container = styled(Box)`
  padding:15px 24px;
  background:#fff;
  & > p  {
    margin-bottom:20px;
    font-size:14px;

  }
  & > h6  {
    margin-bottom:20px;
  }
`

const PriceStyled = styled(Box)`
  float:right;
`

const Discount = styled(Typography)`
color:green;
font-weight:500;
`

const Price = ({cartItems}) => {

    const [price,setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
      totalAmount()
    },[cartItems])

    const totalAmount = () => {
      let price  = 0;
      let discount = 0;
      cartItems.map(item => {
        price += item.price.mrp
        discount += (item.price.mrp - item.price.cost)
      })
      setPrice(price)
      setDiscount(discount)

    }


  return (
    <Box>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
        <Typography>Price ({cartItems?.length} item)
        <PriceStyled component='span' style={ { fontWeight:600, fontSize:18 } }>₹{price}</PriceStyled>
        </Typography>
        <Typography>Discount
          <PriceStyled component='span' style={ { fontWeight:600, fontSize:18 } }>₹{ discount }</PriceStyled>
        </Typography>
        <Typography>Delivry Charges
          <PriceStyled component='span' style={ { fontWeight:600, fontSize:18 } }>₹40</PriceStyled>
        </Typography>
        <Typography variant='h6'>Total Amount
          <PriceStyled component='span' style={ { fontWeight:600, fontSize:18 } }>₹{price-discount+40 }</PriceStyled>
        </Typography>
        <Discount>You will save ₹{ discount - 40 }</Discount>
      </Container>
    </Box>
  )
}

export default Price
