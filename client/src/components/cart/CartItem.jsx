import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { addEllipsis } from '../../utils/common-utils'
import QuantityButton from './QuantityButton'
import { removeFromCart } from '../../redux/action/cartAction';
import {useDispatch} from 'react-redux'

const Component = styled(Box)`
  border-top:1px solid #f0f0f0;
  display:flex;
  background:#fff;
`

const Left = styled(Box)`
  margin:20px;
  display:flex;
  flex-direction:column;
`

const SmallText = styled(Typography)`
  color:#878787;
  fonr-size:14px;
  margin-top:10px;
`

const RemoveButton = styled(Button)`
  margin-top:20px;
  font-size:16px;
  color:#000;
  font-weight:600;
`

const CartItem = ({ item }) => {

  const dispatch = useDispatch()

  const RemoveItem = (id) => {
    dispatch(removeFromCart(id))
  }

  const RatingImage = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

  return (
    <Component>
      <Left>
        <img src={item.url} style={{height:110, width:110}}alt="product" />
        <QuantityButton/>
      </Left>
      <Box style={{margin:20}}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>Seller:RetailNet
          <Box component='span'>
            <img src={RatingImage} style={{ width: 50, marginLeft: 10 }} alt="Rating" />
          </Box>
        </SmallText>
        <Typography style={{margin:'20px 0'}}>
        <Box component='span' style={ { fontWeight:600, fontSize:18 } }>₹{ item.price.cost }</Box>&nbsp;
        <Box component='span' style={ { color: '#878787' } }><strike>₹{ item.price.mrp }</strike></Box>&nbsp;&nbsp;&nbsp;
        <Box component='span' style={ { color: '#388E3C' } }>{ item.price.discount }</Box>
      </Typography>
      <RemoveButton onClick={()=>RemoveItem(item.id)}>Remove</RemoveButton>
      </Box>
    </Component>
  )
}

export default CartItem
