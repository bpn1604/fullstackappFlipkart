import axios from 'axios'
import { GET_PRODUCT_SUCCESS,GET_PRODUCT_FAIL, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_FAIL, GET_PRODUCT_DETAILS_SUCCESS } from '../constants/productConstants'

const URL = 'https://flipkart-f2dz.onrender.com'
export const getProducts = () => async (dispatch) => {
    try {
     let res = await  axios.get(`${URL}/products`)
     dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    } catch (error) {
        dispatch({type: GET_PRODUCT_FAIL, payload: error})
        console.log({error:error.message})
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: GET_PRODUCT_DETAILS_REQUEST})
     const {data} = await  axios.get(`${URL}/product/${id}`)
     dispatch({type: GET_PRODUCT_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: GET_PRODUCT_DETAILS_FAIL, payload: error})
        console.log({error:error.message})
    }
}