import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import Price from './Price'
import styled from '@emotion/styled'
import EmptyCart from './EmptyCart'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {loadStripe} from '@stripe/stripe-js';


const theme = createTheme();

const Container = styled(Grid)(({theme})=>({
    padding:'30px 135px',

    [theme.breakpoints.down('sm')]:{
       padding:'15px 0'
    }
}))
  


const Header = styled(Box)`
    padding:15px 24px;
    background:#fff,

`

const ButtonWrapper = styled(Box)`
    padding:16px 22px;
    background:#fff;
    box-shadow:0 -2px 10px  0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`

const PlaceButton = styled(Button)`
    display:flex;
    margin-left:auto;
    background:#fb641d !important;;
    color:#fff !important;;
    width:250px;
    height:50px;
    border-radius:2px;
`

const Left = styled(Grid)(({theme})=>({
    paddingRight:'15px',
    marginTop:'-55px',
    [theme.breakpoints.down('md')]:{
        marginBottom:'15px'
    }
}))
   


const Cart = () => {

    const { cartItems } = useSelector(state => state.cart)

    const handlePayment = async() => {
        const stripe = await loadStripe('pk_test_51MGEjdSC49Zv3vzhZTH0N9wHGIbBHd1h6Zs4LmZm9ZXKn2aV6rGSNFOhK0iajleaLQXACBAgL0oT2cbSDDfAe3yj00PBNE45ZO');
        const body = cartItems
    
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
        <>
            {
                cartItems.length ?
                <ThemeProvider theme={theme}> 
                 <Container style={{marginTop:100}} container>
                
                    <Left item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart ({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item => (
                                <CartItem item={item}/>
                            ))
                        }
                        <ButtonWrapper>
                            <PlaceButton onClick={()=> handlePayment()}>Place Order</PlaceButton>
                        </ButtonWrapper>
                    </Left>

                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Price cartItems={cartItems}/>
                    </Grid>
                 </Container> 
                 </ThemeProvider>
                 :
                  <div style={{marginTop:100}}><EmptyCart/></div>
            }
            
        </>
    )
}

export default Cart
