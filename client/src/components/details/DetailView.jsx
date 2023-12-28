import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/action/productAction';
import {Box, Grid, Typography} from '@mui/material'
import ActionItem from './ActionItem';
import styled from '@emotion/styled';
import ProductDetail from './ProductDetail';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Component = styled(Box)` 
  background: #f2f2f2;
  margin-top:55px;
  
`

const Container = styled(Grid)(({theme})=>({
  background: 'white',
  display: 'flex',
 
  [theme.breakpoints.down('md')]:{
    margin:0
  }
}))
 

const Right = styled(Grid)`
  margin-top:50px;
  padding-right:50px;
  padding-left:40px;
`

const DetailView = () => {

    const dispatch = useDispatch();
    const {id} = useParams()

    const {loading,product} = useSelector(state => state.getProductDetails || {})

    useEffect(() => {
      if(product && id !== product.id){
        dispatch(getProductDetails(id))
      }
    },[dispatch,id,loading,product])
    
    

  return (
    <Component>
      {
        product && Object.keys(product).length &&
        <ThemeProvider theme={theme}>
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product}/>
          </Grid>
          <Right item  lg={8}  md={8} sm={8} xs={12}>
           <ProductDetail product={product}/>
          </Right>
        </Container>
        </ThemeProvider>
      }
    </Component>
  )
}

export default DetailView
