import { Box } from '@mui/material'
import React from 'react'
import Slider from './Slider'
import styled from '@emotion/styled'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const Container = styled(Box)`
    display:flex;
    justify-content:space-between;
`

const Left = styled(Box)(({ theme }) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const Right = styled(Box)(({ theme }) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));
const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Container>
            <ThemeProvider theme={theme}>
                <Left>
                    <Slider products={products} title={title} timer={timer} />
                </Left>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <Right>
                    <img src={adURL} alt="Advertise" style={{ width: 217 }} />
                </Right>
            </ThemeProvider>
        </Container>
    )
}

export default MidSlide
