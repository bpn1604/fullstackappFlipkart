import { ADD_TO_CART,REMOVE_FROM_CART,CART_RESET,ADD_TO_CART_ERROR } from "../../constants/cartData"


const cartReducers = (state={cartItems:[]},action) => {
    switch(action.type){
        case ADD_TO_CART:
            const item = action.payload;
            const exist = state.cartItems.find(x => x.id === item.id);
            if(exist){
                return{
                    ...state,
                    cartItems: state.cartItems.map(x => x.id === exist.id ? item : x)
                }
            }
            else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }

            case REMOVE_FROM_CART:
                return{
                    ...state,
                    cartItems: state.cartItems.filter(x => x.id !== action.payload)
                }

                default:
                    return state
    }
}

export default cartReducers