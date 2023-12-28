import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/data'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Component = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '55px 130px 0 130px',
  justifyContent: 'space-between',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    margin: 55,
  }
}))

const Container = styled(Box)`
padding:12px 8px;
text-align:center;
`

const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;,
`

const Navbar = () => {
  return (
    <Box style={{ background: '#fff' }}>
      <ThemeProvider theme={theme}>
        <Component>
          {
            navData.map(data => (
              <Container>
                <img src={data.url} alt="navbar" style={{ width: 64 }} />
                <Text>{data.text}</Text>
              </Container>
            ))
          }
        </Component>
      </ThemeProvider>
    </Box>
  )
}

export default Navbar
