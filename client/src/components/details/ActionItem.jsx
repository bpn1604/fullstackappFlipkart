import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addCart} from '../../redux/action/cartAction'
import {loadStripe} from '@stripe/stripe-js';

const theme = createTheme();

const Left = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 40px',
  }
}))
 


const Image = styled('img')({
  padding:'15px 20px',
  width:'95%'
  
});

const StyledButton = styled(Button)(({ theme }) => ({
  width:'48%',
  height:'50px',
  borderRadius:'2px',
  [theme.breakpoints.down('lg')]: {
    width:'46%',
  },
  [theme.breakpoints.down('sm')]: {
    width:'48%',
  }
}))


const ActionItem = ({product}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {id} = product
  const [quantity,setQuantity] = useState(1)


  const addItemToCart = () => {
    dispatch(addCart(id,quantity))
    navigate('/cart')
  }

  // const buyNow = async() => {
  //  let res = await payUsingpaytm({amount:500,email:'xyz@gmail.com'})
  //  let info = {
  //   action: 'https://securegw-stage.paytm.in/order/process',
  //   params: res ,
  //  }
  //  post(info)
  // }

  const handlePayment = async() => {
    const stripe = await loadStripe('pk_test_51MGEjdSC49Zv3vzhZTH0N9wHGIbBHd1h6Zs4LmZm9ZXKn2aV6rGSNFOhK0iajleaLQXACBAgL0oT2cbSDDfAe3yj00PBNE45ZO');
    const body = [product]

    const headers = {
      'Content-Type': 'application/json'
    }
    const res = await fetch('https://flipkart-f2dz.onrender.com/api/create-checkout-session',{
      method: 'POST',
      headers:headers,
      body: JSON.stringify(body)
    } )

    const session = await res.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    })

    if(result.error){
      console.log(result.error)
    }
   
  }
  
  return (
    <ThemeProvider theme={theme}>
    <Left>
    <Box style={{padding:'15px 20px',border: '1px solid #f0f0f0',width:'90%'}}>
        <Image src={product.detailUrl} alt='Image Details' />
        </Box>
        <ThemeProvider theme={theme}>
        <StyledButton variant='contained' style={{marginRight:10, background:'#ff9f00'}} onClick={() => addItemToCart()}><ShoppingCartIcon/>Add to Cart</StyledButton>
        <StyledButton variant='contained' onClick={()=> handlePayment()} style={{background:'#fb541b'}}><FlashOnIcon/>Buy Now</StyledButton>
        </ThemeProvider>
    </Left>
    </ThemeProvider>
  )
}

export default ActionItem
