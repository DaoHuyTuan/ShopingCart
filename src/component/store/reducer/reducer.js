const initState = {
    products:[]
}
const productReducer = (state = initState, action) => {
    let newState = {...state};
    if(action.type === "FETCH_DATA") {
        newState.products = action.payload; 
    }
    return newState;
}
export default productReducer;