import { Box, Button, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from '@emotion/styled';
import LoginPage from '../login/LoginPage';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';

const theme = createTheme();

const Wrapper = styled(Box)(({theme})=>({
 display:'flex',
 margin:'0 3% 0 auto',
 '& > * ':{ 
    marginRight:'40px !important',
    fontSize:16,
    alignItems:'center',
 },
 [theme.breakpoints.down('md')]:{
  display:'block'
}
})) 
 

const Container = styled(Link)(({theme})=>({
  display:'flex',
  textDecoration:'none',
  color:'inherit',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}))



const LoginButton = styled(Button)`
    color:#2874f0;
    background:#fff;
    text-transform:none;
    padding:5px 40px;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:32px;
    
`

const Buttons = () => {
  const [open, setOpen] =  useState(false)
  const {userAccount,setUserAccount} = useContext(DataContext)
  const {cartItems} = useSelector(state => state.cart)

  const openDialog = () => {
    setOpen(true)
  }

  return (
    <ThemeProvider theme={theme}> 
    <Wrapper>
    {
      userAccount ?<Profile account={userAccount} setUserAccount={setUserAccount}/>
      :
      <LoginButton onClick={()=>openDialog()} variant='contained'>Login</LoginButton>
    }
      
      <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
      <Typography style={{marginTop:3}}>More</Typography>
      
      <Container to="/cart">
      <Badge badgeContent={cartItems?.length} color='primary'>
      <ShoppingCartIcon/>
      </Badge>
        <Typography style={{marginLeft:10}}>Cart</Typography>
        
      </Container>
      <LoginPage open={open} setOpen={setOpen}/>
    </Wrapper>
    </ThemeProvider>
  )
}

export default Buttons
