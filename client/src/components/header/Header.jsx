import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled} from '@mui/system';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, Typography } from '@mui/material';
import Search from './Search';
import Buttons from './Buttons';
import {Link} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme();

const StyledHeader = styled(AppBar)`
background: #2874f0;
height:55px
`

const Components = styled(Link)`
margin-left:12%;
line-height:0;
text-decoration:none;
color:inherit;
`

const SubHeading = styled(Typography)`
font-size:10px;
font-style:italic;

`

const  PlusImage = styled('img')({
  width:10,
  height:10,
  marginLeft:4
  
})
  
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  }
}))

const MenuButton = styled(IconButton)(({ theme }) => ({
  display:'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  }
}))


const Header = () => {

  const [open,setOpen] = useState(false)
  
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen (false)
  }

  
  return (
    <StyledHeader>
    <Toolbar style={{minHeight:55}}>
    <ThemeProvider theme={theme}>
    <MenuButton color='inherit' onClick={handleOpen}>
      <MenuIcon/>
    </MenuButton>
    <Drawer open={open} onClose={handleClose}>
     <Box style={{width:200}} onClick={handleClose}>
     <List>
       <ListItem>
         <ListItemButton>
           <Buttons/>
         
         </ListItemButton>
        </ListItem>
       </List>
    
    </Box>
    </Drawer>
    </ThemeProvider>
      <Components to='/'>
        <img src={logoURL} alt="logo" style={{width:75,}}/>
        <Box style={{display:'flex',}}>
          <SubHeading>Explore&nbsp;
          <Box component={"span"} style={{color:'#FFE500'}}>Plus</Box>
          </SubHeading>
          <PlusImage src={subURL} alt="subURL"/>
          
        </Box>
      </Components>
      <Search/>
      <CustomButtonWrapper>
        <Buttons/>
      </CustomButtonWrapper>
    </Toolbar>
  </StyledHeader>
  )
}

export default Header