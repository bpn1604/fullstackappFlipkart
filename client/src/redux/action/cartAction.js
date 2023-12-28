import { ADD_TO_CART,REMOVE_FROM_CART,CART_RESET,ADD_TO_CART_ERROR } from "../../constants/cartData"
import axios from "axios"

const URL = 'https://flipkart-f2dz.onrender.com'

export const addCart = (id,quantity) => async(dispatch)=>{
    try {
       const {data} =  await axios.get(`${URL}/product/${id}`)
       dispatch({type:ADD_TO_CART,payload:{...data,quantity}})
    } catch (error) {
        dispatch({type:ADD_TO_CART_ERROR,payload:error.message})
    }
   
}


export const removeFromCart = (id) =>(dispatch)=> {
   dispatch({type:REMOVE_FROM_CART,payload:id})
}