import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import styled from '@emotion/styled';

const SmallBox = styled(Box)`
  font-size: 14px;
  vertical-align:baseline;
  & > p {
    font-size: 14px;
    margin-top:10px
  }
`

const Badge = styled(LocalOfferIcon)`
  margin-right:10px;
  color:#00CC00;
  font-size:15px;
`

const ColumnText = styled(TableRow)`
  font-size:14px;
  vertical-align:baseline;
  & > td {
    font-size:14px;
    margin-top:10px;
    border:none;
  }
`

const ProductDetail = ({ product }) => {
  const RatingImage = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))
  return (
    <>
      <Typography> { product.title.longTitle }</Typography>
      <Typography style={ { marginTop: 5, color: '#878787', fontSize: 14 } }>8 Ratings & 2 Reviews
        <Box component='span'>
          <img src={ RatingImage } style={ { width: 77, marginLeft: 20 } } alt="Rating" />
        </Box>
      </Typography>
      <Typography>
        <Box component='span' style={ { fontSize: 28 } }>₹{ product.price.cost }</Box>&nbsp;
        <Box component='span' style={ { color: '#878787' } }><strike>₹{ product.price.mrp }</strike></Box>&nbsp;&nbsp;&nbsp;
        <Box component='span' style={ { color: '#388E3C' } }>{ product.price.discount }</Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallBox>
        <Typography><Badge />Get extra 10% off on Flipkart Axis Bank Credit Card</Typography>
        <Typography><Badge />Get extra 5% off on SBI Credit Card</Typography>
        <Typography><Badge />Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹500</Typography>
        <Typography><Badge />Buy 2 items and get extra 10% off</Typography>
        <Typography><Badge />No cost EMI on Bajaj finserve credit card</Typography>
      </SmallBox>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={ { color: '#878787' } }>Delivery</TableCell>
            <TableCell style={ { fontWeight: 600 } }>Delivery by { date.toDateString() } | ₹40</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={ { color: '#878787' } }>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={ { color: '#878787' } }>Seller</TableCell>
            <TableCell>
            <Box style={ { color: '#2874f0' } } component="span">SuperComNet</Box>
            <Typography>GST Invoice Available</Typography>
            <Typography>View More Sellers</Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2}>
              <img src={adURL} style={{width:390}} alt="SuperCoins"/>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={ { color: '#878787' } }>Description</TableCell>
            <TableCell>{ product.description }</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  )
}

export default ProductDetail
