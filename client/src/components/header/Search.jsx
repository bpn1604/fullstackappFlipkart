import styled from '@emotion/styled'
import { Box, InputBase, List, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../redux/action/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SearchContainer = styled(Box)`
    background:#fff;
    width:38%;
    margin-left:10px;
    border-radius:2px;
    display:flex;
`

const InputContainer = styled(InputBase)`
    font-size: unset;
    padding-left:20px;
    width:100%;
`

const SearchIconStyle = styled(Box)`
    color:blue;
    padding:5px;
    display:flex;
`

const ListWrapper = styled(List)`
    position:absolute;
    background:#ffffff;
    color:#000;
    margin-top:36px;
`

const Search = () => {

    const [text,setText] = useState('')
    const {products} = useSelector(state => state.getProducts || {})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    const getText = (text)=>{
        setText(text)
    }

  return (
    <SearchContainer>
    <InputContainer 
        placeholder='Search for Products, Brands and More'
        onChange={(e)=> getText(e.target.value)}
        value={text}
    />
    <SearchIconStyle>
        <SearchIcon/>
    </SearchIconStyle>
    {
        text && 
        <ListWrapper>
            {
                products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                        <Link
                        to={`/product/${product.id}`}
                        onClick={()=> setText('')}
                        style={{textDecoration:'none', color:'inherit'}}
                        >
                        {product.title.longTitle}
                        </Link>
                    </ListItem>
                ))
            }
        </ListWrapper>
    }
    </SearchContainer>
  )
}

export default Search