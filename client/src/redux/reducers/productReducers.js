import { GET_PRODUCT_DETAILS_FAIL, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_RESET, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from "../constants/productConstants"


export const getProductsReducer = (state = {products: []}, action) => {

    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload
            }
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
    
}

export const getProductDetailsReducer = (state = {product: {}}, action) => {

    switch (action.type) {
        case GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading:true
            }
        case GET_PRODUCT_DETAILS_SUCCESS:
            return{
               loading:false,
                product: action.payload
            }
            case GET_PRODUCT_DETAILS_FAIL:
                return {
                    loading:false,
                    error: action.payload
                }
            case GET_PRODUCT_DETAILS_RESET:
                return{
                    product:{}
                }

            default:
                return state
    }
    
}