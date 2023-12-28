import {Grid } from '@mui/material'
import React from 'react'
import { imageURL } from '../../constants/data'
import styled from '@emotion/styled'

const Container = styled(Grid)`
    margin-top:10px;
    justify-content:space-between;
`


const MidSection = () => {
  return (
    <Container lg={12} sm={12} md={12} xs={12} container>
        {
            imageURL.map((e)=>(
                <Grid item lg={4} md={4} sm={12} xs={12}>
                <img src={e} alt="Banner Images" style={{width:'100%'}}/>
                </Grid>
            ))
        }
        </Container>
  )
}

export default MidSection
