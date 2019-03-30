import  {
    ADD_TO_CART,
    CHECK_QUALITY,
    FETCH_CART
} from "../actiontype"
const initState = {
    cartList:[],
    numCart:0,
    
}

const cartReducer = (state = initState, action) => {
    let newState = {...state};
    switch(action.type) {
        case ADD_TO_CART:
            // for(let i = 0;i < newState.cartList.length; i++){
            //     if(newState.cartList[i].product.id == action.payload) {
            //         newState.cartList.quantity += 1;
            //     }
            // }
            newState.numCart += 1;
            
        case FETCH_CART:
            newState.numCart += action.payload.length;
            action.payload.map(product => {
                newState.cartList.push(product);
            })
            
        default:
            return newState
    }
}
export default cartReducer